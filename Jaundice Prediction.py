#!/usr/bin/env python
# coding: utf-8

# In[1]:




# In[2]:





# In[3]:




# In[7]:


# Import necessary libraries
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib
import tkinter as tk
from tkinter import ttk

# Create synthetic data for jaundice prediction and train the model
np.random.seed(42)
data = {
    "Total_Bilirubin": np.random.normal(1.2, 0.5, 1000),
    "Direct_Bilirubin": np.random.normal(0.3, 0.1, 1000),
    "Indirect_Bilirubin": np.random.normal(0.9, 0.4, 1000),
    "Albumin": np.random.normal(3.5, 0.4, 1000),
    "Alkaline_Phosphotase": np.random.normal(120, 30, 1000),
    "SGPT": np.random.normal(25, 10, 1000),
    "SGOT": np.random.normal(30, 10, 1000),
    "Total_Proteins": np.random.normal(6.8, 0.5, 1000),
}
data["Jaundice"] = np.where(data["Total_Bilirubin"] > 1.5, 1, 0)
df = pd.DataFrame(data)

# Train the model
X = df.drop("Jaundice", axis=1)
y = df["Jaundice"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
print(f"Model accuracy: {accuracy_score(y_test, y_pred) * 100:.2f}%")

# Save the model
joblib.dump(model, "jaundice_model.pkl")

# Load the model
model = joblib.load("jaundice_model.pkl")

# Function to predict jaundice and display result in the label
def predict_jaundice():
    try:
        features = {
            "Total_Bilirubin": float(total_bilirubin_entry.get() or 1.2),
            "Direct_Bilirubin": float(direct_bilirubin_entry.get() or 0.3),
            "Indirect_Bilirubin": float(indirect_bilirubin_entry.get() or 0.9),
            "Albumin": float(albumin_entry.get() or 3.5),
            "Alkaline_Phosphotase": float(alkaline_phosphatase_entry.get() or 120),
            "SGPT": float(sgpt_entry.get() or 25),
            "SGOT": float(sgot_entry.get() or 30),
            "Total_Proteins": float(total_proteins_entry.get() or 6.8),
        }
        
        user_data = pd.DataFrame([features])
        prediction = model.predict(user_data)[0]

        if prediction == 1:
            result_label.config(text="Result: Likely to have jaundice", fg="red")
        else:
            result_label.config(text="Result: Unlikely to have jaundice", fg="green")
    except ValueError:
        result_label.config(text="Please enter valid numbers.", fg="orange")

# Tkinter GUI setup
root = tk.Tk()
root.title("Jaundice Prediction System")
root.geometry("500x600")
root.configure(bg="#f2f2f2")

# Header
header = tk.Label(root, text="Jaundice Prediction System", font=("Helvetica", 18, "bold"), bg="#4CAF50", fg="white")
header.pack(fill="x")

# Form Frame
form_frame = tk.Frame(root, bg="#f2f2f2", padx=20, pady=10)
form_frame.pack(pady=20)

# Fields with labels and entries
fields = {
    "Total Bilirubin": ("Enter Total Bilirubin (mg/dL):", None),
    "Direct Bilirubin": ("Enter Direct Bilirubin (mg/dL):", None),
    "Indirect Bilirubin": ("Enter Indirect Bilirubin (mg/dL):", None),
    "Albumin": ("Enter Albumin (g/dL):", None),
    "Alkaline Phosphatase": ("Enter Alkaline Phosphatase (U/L):", None),
    "SGPT": ("Enter SGPT (U/L):", None),
    "SGOT": ("Enter SGOT (U/L):", None),
    "Total Proteins": ("Enter Total Proteins (g/dL):", None),
}

# Entry widgets for each field
for idx, (key, (text, var)) in enumerate(fields.items()):
    label = tk.Label(form_frame, text=text, bg="#f2f2f2", font=("Helvetica", 12))
    label.grid(row=idx, column=0, sticky="w", pady=5)
    entry = ttk.Entry(form_frame, font=("Helvetica", 12))
    entry.grid(row=idx, column=1, pady=5)
    fields[key] = (text, entry)

# Reference each entry for use in prediction
total_bilirubin_entry = fields["Total Bilirubin"][1]
direct_bilirubin_entry = fields["Direct Bilirubin"][1]
indirect_bilirubin_entry = fields["Indirect Bilirubin"][1]
albumin_entry = fields["Albumin"][1]
alkaline_phosphatase_entry = fields["Alkaline Phosphatase"][1]
sgpt_entry = fields["SGPT"][1]
sgot_entry = fields["SGOT"][1]
total_proteins_entry = fields["Total Proteins"][1]

# Predict Button
predict_button = tk.Button(root, text="Predict Jaundice", command=predict_jaundice, bg="#4CAF50", fg="white", font=("Helvetica", 14, "bold"), padx=20, pady=10)
predict_button.pack(pady=20)

# Result Label to display the prediction result
result_label = tk.Label(root, text="", font=("Helvetica", 14), bg="#f2f2f2", fg="black")
result_label.pack(pady=10)

# Run the app
root.mainloop()


# In[ ]:




