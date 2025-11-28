from flask import Flask, render_template, request, redirect, url_for, flash
from datetime import datetime

app = Flask(__name__)
app.secret_key = "innovatehive-secret-key"  


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html", year=datetime.now().year)

@app.route("/blogs")
def blogs():
    return render_template("blogs.html", year=datetime.now().year)



@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    company = request.form.get("company")
    message = request.form.get("message")

    print("New contact message:")
    print(f"Name: {name}")
    print(f"Email: {email}")
    print(f"Company: {company}")
    print(f"Message: {message}")

    flash("Thank you for reaching out! We’ll get back to you shortly.")
    return redirect(url_for("home") + "#contact")


if __name__ == "__main__":
    app.run(debug=True)
