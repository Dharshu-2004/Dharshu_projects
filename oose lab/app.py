from flask import Flask, render_template, request, redirect, url_for, session, flash
from pymongo import MongoClient
import os
from werkzeug.utils import secure_filename
from bson.objectid import ObjectId

app = Flask(__name__)
app.secret_key = "super_secret_key"

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client["course_reservation"]
users = db["users"]
courses = db["courses"]
registrations = db["registrations"]

# Folder to store uploaded payment screenshots
UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# Allowed image extensions
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# ---------------- Home ----------------
@app.route("/")
def home():
    return render_template("home.html")

# ---------------- Register ----------------
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        if users.find_one({"username": username}):
            flash("Username already exists.")
            return redirect(url_for("register"))
        users.insert_one({"username": username, "password": password, "courses_registered": []})  # Add courses_registered field
        flash("Registration successful. Please login.")
        return redirect(url_for("login"))
    return render_template("register.html")

# ---------------- Login ----------------
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        user = users.find_one({"username": username, "password": password})
        if user:
            session["username"] = username
            return redirect(url_for("catalogue"))
        else:
            flash("Invalid credentials.")
            return redirect(url_for("login"))
    return render_template("login.html")

# ---------------- Logout ----------------
@app.route("/logout")
def logout():
    session.pop("username", None)
    return redirect(url_for("home"))

# ---------------- Catalogue ----------------
@app.route("/catalogue")
def catalogue():
    if "username" not in session:
        return redirect(url_for("login"))
    all_courses = list(courses.find())
    return render_template("catalogue.html", courses=all_courses)

# ---------------- Course Details & Registration ----------------
@app.route("/course/<course_id>", methods=["GET", "POST"])
def course_detail(course_id):
    if "username" not in session:
        return redirect(url_for("login"))

    try:
        course = courses.find_one({"_id": ObjectId(course_id)})
    except:
        flash("Course not found.")
        return redirect(url_for("catalogue"))

    registered_count = registrations.count_documents({"course_id": course_id})

    if request.method == "POST":
        txn_id = request.form["txn_id"]
        file = request.files["screenshot"]

        if registered_count >= 10:
            flash("Registration Closed for this course.")
            return redirect(url_for("catalogue"))

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
            file.save(filepath)

            # Insert registration data into the 'registrations' collection
            registrations.insert_one({
                "username": session["username"],
                "course_id": course_id,
                "txn_id": txn_id,
                "screenshot": filename
            })

            # Update the 'users' collection to include the registered course
            users.update_one(
                {"username": session["username"]}, 
                {"$push": {"courses_registered": course_id}}
            )

            flash("Successfully registered for the course!")
            return redirect(url_for("catalogue"))
        else:
            flash("Invalid file. Please upload a JPG/PNG screenshot.")

    return render_template("course_detail.html", course=course, registered_count=registered_count)

# ---------------- Run the App ----------------
if __name__ == "__main__":
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    app.run(debug=True)
    
