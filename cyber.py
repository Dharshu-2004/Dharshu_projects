import requests
from urllib.parse import urlparse, parse_qs
from bs4 import BeautifulSoup
from sklearn.ensemble import IsolationForest
import numpy as np
import tkinter as tk
from tkinter import messagebox
import matplotlib.pyplot as plt

# ---- Security Headers and Payloads ----
SECURITY_HEADERS = [
    "Content-Security-Policy",
    "Strict-Transport-Security",
    "X-Content-Type-Options",
    "X-Frame-Options",
    "X-XSS-Protection",
]
SQLI_PAYLOAD = "' OR '1'='1"
XSS_PAYLOAD = "<script>alert('XSS')</script>"

# ---- Global Variables ----
findings = {
    "missing_headers": [],
    "sql_injection": False,
    "xss": False,
    "overall_security": "Unknown"
}
anomalous_responses = []

# ---- Feature Extraction ----
def extract_features(response):
    features = []
    features.append(response.status_code)
    features.append(len(response.text))
    features.append(response.elapsed.total_seconds())
    
    soup = BeautifulSoup(response.text, "html.parser")
    features.append(len(soup.find_all("script")))  # Number of <script> tags
    
    suspicious_keywords = ['select', 'union', 'alert', 'onerror']
    keyword_count = sum(response.text.lower().count(word) for word in suspicious_keywords)
    features.append(keyword_count)
    
    features.append(int(response.headers.get('Content-Length', len(response.text))))  # Content-Length or fallback
    
    return features

# ---- Check Security Headers ----
def check_security_headers(url):
    try:
        response = requests.get(url, timeout=30)
        missing_headers = [header for header in SECURITY_HEADERS if header not in response.headers]
        findings["missing_headers"] = missing_headers
        return missing_headers
    except Exception as e:
        return f"Error checking security headers: {e}"

# ---- Test for SQL Injection ----
def test_sql_injection(url, params):
    vulnerable = False
    for param in params:
        original_values = params[param]
        for value in original_values:
            payload = requests.utils.quote(SQLI_PAYLOAD)
            test_url = url.replace(f"{param}={value}", f"{param}={payload}")
            try:
                response = requests.get(test_url, timeout=10)
                if "syntax" in response.text.lower() or "error" in response.text.lower():
                    vulnerable = True
                    break
            except:
                pass
    findings["sql_injection"] = vulnerable

# ---- Test for XSS ----
def test_xss(url, params):
    vulnerable = False
    for param in params:
        original_values = params[param]
        for value in original_values:
            payload = requests.utils.quote(XSS_PAYLOAD)
            test_url = url.replace(f"{param}={value}", f"{param}={payload}")
            try:
                response = requests.get(test_url, timeout=10)
                if XSS_PAYLOAD in response.text:
                    vulnerable = True
                    break
            except:
                pass
    findings["xss"] = vulnerable

# ---- Scan URL ----
def scan_url(url):
    findings["missing_headers"] = []
    findings["sql_injection"] = False
    findings["xss"] = False
    
    try:
        response = requests.get(url, timeout=30)
    except Exception as e:
        return f"Error accessing URL: {e}"
    
    # Feature Extraction
    features = extract_features(response)
    anomalous_responses.append(features)
    
    # Headers
    missing = check_security_headers(url)
    
    # SQLi and XSS Testing
    parsed_url = urlparse(url)
    params = parse_qs(parsed_url.query)
    if params:
        test_sql_injection(url, params)
        test_xss(url, params)
    else:
        findings["sql_injection"] = False
        findings["xss"] = False

    # Security Status
    if findings["missing_headers"] or findings["sql_injection"] or findings["xss"]:
        findings["overall_security"] = "Not Fully Secure ❌"
    else:
        findings["overall_security"] = "Fully Secure ✅"

    return generate_report()

# ---- Generate Report ----
def generate_report():
    result = "\nScan Results:\n\n"
    
    if findings["missing_headers"]:
        result += "[-] Missing Security Headers:\n"
        for header in findings["missing_headers"]:
            result += f"    - {header}\n"
    else:
        result += "[+] All important security headers are present.\n"
    
    result += "[+] No SQL Injection vulnerabilities detected.\n" if not findings["sql_injection"] else "[-] SQL Injection vulnerability detected!\n"
    result += "[+] No XSS vulnerabilities detected.\n" if not findings["xss"] else "[-] Cross Site Scripting (XSS) vulnerability detected!\n"
    
    result += f"\n[-] Overall Security Status: {findings['overall_security']}\n"
    return result

# ---- Show Graph Window ----
def show_graph():
    data = np.array(anomalous_responses)
    model = IsolationForest(contamination=0.1, random_state=42)
    scores = model.fit_predict(data)
    anomaly_scores = model.decision_function(data)

    plt.figure(figsize=(8, 6))
    plt.title("Isolation Forest Anomaly Scores", fontsize=16, fontweight='bold')
    plt.xlabel("Sample", fontsize=12)
    plt.ylabel("Anomaly Score", fontsize=12)
    plt.scatter(range(len(anomaly_scores)), anomaly_scores, c=['red' if s == -1 else 'green' for s in scores], marker='o', s=100, edgecolors='k')
    plt.grid(True, linestyle="--", alpha=0.7)
    plt.tight_layout()
    plt.show()

# ---- Tkinter UI ----
root = tk.Tk()
root.title("AI Web Vulnerability Scanner")
root.geometry("700x500")
root.configure(bg="#f0f8ff")  # Light blue background

# Font
FONT = ("calibiri", 18)

# Entry Field
url_label = tk.Label(root, text="Enter Website URL:", font=FONT, bg="#f0f8ff")
url_label.pack(pady=10)
url_entry = tk.Entry(root, width=60, font=FONT)
url_entry.pack(pady=5)

# Result Box
result_box = tk.Text(root, width=80, height=18, font=FONT, bg="#ffffff", fg="#000000", borderwidth=2, relief="ridge")
result_box.pack(pady=10)

# Scan Button
def on_scan():
    url = url_entry.get()
    if not url.startswith("http"):
        messagebox.showerror("Error", "Please enter a valid URL (starting with http/https)")
        return
    result = scan_url(url)
    result_box.delete(1.0, tk.END)
    result_box.insert(tk.END, result)
    show_graph()

scan_btn = tk.Button(root, text="Scan Website", font=("calibiri", 18, "bold"), bg="#4682B4", fg="white", padx=20, pady=10, command=on_scan)
scan_btn.pack(pady=10)

root.mainloop()
