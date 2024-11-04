import requests
from urllib.parse import urlparse, parse_qs
from bs4 import BeautifulSoup
from sklearn.ensemble import IsolationForest
import numpy as np
import tkinter as tk
from tkinter import messagebox

# Define your existing SECURITY_HEADERS, payloads, and other functions here...
# Initialize a dictionary to store findings
anomalous_responses = []
findings = {
    "missing_headers": [],
    "sql_injection": False,
    "xss": False,
    "overall_security": "Unknown"
}
SECURITY_HEADERS = [
    "Content-Security-Policy",
    "Strict-Transport-Security",
    "X-Content-Type-Options",
    "X-Frame-Options",
    "X-XSS-Protection",
]
SQLI_PAYLOAD = "' OR '1'='1"
XSS_PAYLOAD = "<script>alert('XSS')</script>"

# Function to extract features from HTTP response
def extract_features(response):
    features = []
    # Example features
    features.append(response.status_code)
    features.append(len(response.text))
    features.append(response.elapsed.total_seconds())
    # Add more features as needed
    return features

def check_security_headers(url):
    print("\n[+] Checking Security Headers...")
    try:
        response = requests.get(url, timeout=30)
        missing_headers = [header for header in SECURITY_HEADERS if header not in response.headers]
        findings["missing_headers"] = missing_headers  # Store missing headers

        if not missing_headers:
            return "[+] All important security headers are present."
        else:
            return "[-] Missing Security Headers:\n" + "\n".join(f"    - {header}" for header in missing_headers)
    except Exception as e:
        return f"Error checking security headers: {e}"

def test_xss(url, params):
    print("\n[+] Testing for Cross-Site Scripting (XSS)...")
    vulnerable = False
    xss_results = []
    for param in params:
        original_values = params[param]
        for value in original_values:
            # Encode payload to handle special characters in URLs
            payload = requests.utils.quote(XSS_PAYLOAD)
            test_url = url.replace(f"{param}={value}", f"{param}={payload}")
            try:
                response = requests.get(test_url, timeout=10)
                # Check if the payload is reflected in the response
                if XSS_PAYLOAD in response.text:
                    xss_results.append(f"[*] Potential XSS vulnerability found in parameter: {param}")
                    vulnerable = True
            except Exception as e:
                xss_results.append(f"Error testing XSS on {param}: {e}")
    findings["xss"] = vulnerable  # Store XSS finding
    if not vulnerable:
        xss_results.append("[+] No XSS vulnerabilities found with basic testing.")
    
    return "\n".join(xss_results)

def assess_overall_security():
    print("\n[+] Assessing Overall Security Status...")
    issues_found = False
    results = []

    # Check for missing security headers
    if findings["missing_headers"]:
        issues_found = True
        results.append("[-] The website is missing critical security headers.")
    else:
        results.append("[+] All critical security headers are present.")

    # Check for SQL Injection vulnerability
    if findings["sql_injection"]:
        issues_found = True
        results.append("[-] The website is vulnerable to SQL Injection attacks.")
    else:
        results.append("[+] No SQL Injection vulnerabilities detected.")

    # Check for XSS vulnerability
    if findings["xss"]:
        issues_found = True
        results.append("[-] The website is vulnerable to Cross-Site Scripting (XSS) attacks.")
    else:
        results.append("[+] No XSS vulnerabilities detected.")

    # Determine overall security status
    if not issues_found:
        findings["overall_security"] = "Secure"
        results.append("\n[+] Overall Security Status: Secure ✅")
    elif len(findings["missing_headers"]) > 0 or findings["sql_injection"] or findings["xss"]:
        findings["overall_security"] = "Not Fully Secure"
        results.append("\n[-] Overall Security Status: Not Fully Secure ❌")
    else:
        findings["overall_security"] = "Partial Security"
        results.append("\n[+] Overall Security Status: Partial Security ⚠️")

    return "\n".join(results)

def test_sql_injection(url, params):
    print("\n[+] Testing for SQL Injection...")
    vulnerable = False
    sql_results = []
    for param in params:
        original_values = params[param]
        for value in original_values:
            # Encode payload to handle special characters in URLs
            payload = requests.utils.quote(SQLI_PAYLOAD)
            test_url = url.replace(f"{param}={value}", f"{param}={payload}")
            try:
                response = requests.get(test_url, timeout=10)
                if "database" in response.text.lower() or "sql" in response.text.lower():
                    sql_results.append(f"[*] Potential SQL Injection vulnerability found in parameter: {param}")
                    vulnerable = True
            except Exception as e:
                sql_results.append(f"Error testing SQL Injection on {param}: {e}")
    findings["sql_injection"] = vulnerable  # Store SQLi finding
    if not vulnerable:
        sql_results.append("[+] No SQL Injection vulnerabilities found with basic testing.")
    
    return "\n".join(sql_results)

def train_anomaly_detector(normal_responses):
    feature_matrix = [extract_features(resp) for resp in normal_responses]
    model = IsolationForest(contamination=0.05)
    model.fit(feature_matrix)
    return model

def detect_anomaly(model, response):
    feature = np.array(extract_features(response)).reshape(1, -1)
    prediction = model.predict(feature)
    
    if prediction[0] == -1:  # Anomaly detected
        anomalous_responses.append(response)  # Store the anomalous response
        return True
    return False

# Function to check cookies security
def check_cookie_security(url):
    print("\n[+] Checking Cookie Security...")
    try:
        response = requests.get(url, timeout=10)
        cookies = response.cookies
        insecure_cookies = []

        if cookies:
            for cookie in cookies:
                if not cookie.secure:
                    insecure_cookies.append(f"Cookie '{cookie.name}' is not marked Secure.")
                if not cookie.has_nonstandard_attr('HttpOnly'):
                    insecure_cookies.append(f"Cookie '{cookie.name}' is missing HttpOnly flag.")
        else:
            return "[+] No cookies found to assess."

        if insecure_cookies:
            findings['cookie_security'] = "Insecure cookies found"
            return "[-] Insecure Cookies:\n" + "\n".join(insecure_cookies)
        else:
            return "[+] All cookies are secure."

    except Exception as e:
        return f"Error checking cookies: {e}"

def perform_scan(url):
    results = []
    
    # Collect normal responses for training
    print("[+] Collecting normal responses for training...")
    normal_responses = []
    try:
        for _ in range(20):  # Collect 20 normal responses
            resp = requests.get(url, timeout=20)
            normal_responses.append(resp)
    except Exception as e:
        results.append(f"Error collecting normal responses: {e}")
        return "\n".join(results)

    # Train the anomaly detection model
    model = train_anomaly_detector(normal_responses)
    print("[+] Anomaly detection model trained.")
    
    # Proceed with existing security checks
    results.append(check_security_headers(url))
    results.append(check_cookie_security(url))  # Add cookie security check here
    
    params = get_url_parameters(url)
    if params:
        results.append(test_sql_injection(url, params))
        results.append(test_xss(url, params))
    else:
        results.append("\n[-] No URL parameters found to test for SQL Injection or XSS.")
    
    results.append(assess_overall_security())
    return "\n".join(results)


def update_anomaly_detector(model, normal_responses, anomalous_responses):
    # Combine normal and anomalous responses for re-training
    all_responses = normal_responses + anomalous_responses
    feature_matrix = [extract_features(resp) for resp in all_responses]
    
    # Retrain the model
    model.fit(feature_matrix)
    return model


def extract_features(response):
    features = []
    # Example features
    features.append(response.status_code)
    features.append(len(response.text))
    features.append(response.elapsed.total_seconds())
    # Add more features as needed
    return features

def get_url_parameters(url):
    parsed = urlparse(url)
    return parse_qs(parsed.query)

def perform_scan(url):
    results = []

    # Collect normal responses for training
    print("[+] Collecting normal responses for training...")
    normal_responses = []
    try:
        for _ in range(20):  # Collect 20 normal responses
            resp = requests.get(url, timeout=20)
            normal_responses.append(resp)
    except Exception as e:
        results.append(f"Error collecting normal responses: {e}")
        return "\n".join(results)
    
    # Train the anomaly detection model
    model = train_anomaly_detector(normal_responses)
    print("[+] Anomaly detection model trained.")
    
    # Proceed with existing security checks
    results.append(check_security_headers(url))
    
    params = get_url_parameters(url)
    if params:
        print(f"\n[+] Found URL Parameters: {', '.join(params.keys())}")
        results.append(test_sql_injection(url, params))
        results.append(test_xss(url, params))
        
        # Test for anomalies in responses after injections
        for param in params:
            original_values = params[param]
            for value in original_values:
                # SQL Injection Test
                sql_payload = requests.utils.quote(SQLI_PAYLOAD)
                test_url_sqli = url.replace(f"{param}={value}", f"{param}={sql_payload}")
                try:
                    response_sqli = requests.get(test_url_sqli, timeout=10)
                    if detect_anomaly(model, response_sqli):
                        results.append(f"[*] Anomaly detected in SQL Injection test for parameter: {param}")
                except Exception as e:
                    results.append(f"Error during anomaly detection for SQLi on {param}: {e}")
                
                # XSS Test
                xss_payload = requests.utils.quote(XSS_PAYLOAD)
                test_url_xss = url.replace(f"{param}={value}", f"{param}={xss_payload}")
                try:
                    response_xss = requests.get(test_url_xss, timeout=10)
                    if detect_anomaly(model, response_xss):
                        results.append(f"[*] Anomaly detected in XSS test for parameter: {param}")
                except Exception as e:
                    results.append(f"Error during anomaly detection for XSS on {param}: {e}")
    else:
        results.append("\n[-] No URL parameters found to test for SQL Injection or XSS.")
    
    results.append(assess_overall_security())
    return "\n".join(results)

def start_scan():
    url = url_entry.get().strip()
    
    # Basic URL validation
    parsed_url = urlparse(url)
    if not parsed_url.scheme or not parsed_url.netloc:
        messagebox.showerror("Error", "Invalid URL. Please include the scheme (http:// or https://).")
        return

    results = perform_scan(url)
    # Clear previous results
    results_text.delete(1.0, tk.END)
    # Insert new results
    results_text.insert(tk.END, results)

# Create the main window
root = tk.Tk()
root.title("Web Vulnerability Scanner")
root.geometry("600x600")  # Set fixed window size
root.configure(bg='#01005E')

# Create a heading label
heading = tk.Label(root, text="Web Vulnerability Scanner", font=("Arial Black", 26), bg='#01005E', fg="#f39200")
heading.pack(pady=(20, 10))  # Add gap above the text field

# Create a text field for URL entry with rounded corners and custom padding
url_frame = tk.Frame(root)
url_frame.pack(pady=(10, 10))

url_entry = tk.Entry(url_frame, width=50, font=("Helvetica", 12), bd=0, highlightthickness=2, relief="flat")
url_entry.pack(side=tk.LEFT, padx=(0, 10), pady=10)  # Add some padding

# Create a scan button
scan_button = tk.Button(url_frame, text="Scan", command=start_scan, bg="#f39200", fg="#000000", font=("Helvetica", 12), bd=2)
scan_button.pack(side=tk.RIGHT)

# Create a text box to display results with a scrollbar
results_frame = tk.Frame(root)
results_frame.pack(pady=(20, 0), fill=tk.BOTH, expand=True)

results_text = tk.Text(results_frame, wrap=tk.WORD, font=("Helvetica", 16), bg="#f39200", fg="#01005E")
results_text.pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)


scrollbar = tk.Scrollbar(results_frame, command=results_text.yview)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
results_text.config(yscrollcommand=scrollbar.set)

# Run the application
root.mainloop()

