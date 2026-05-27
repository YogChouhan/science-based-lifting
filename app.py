from flask import Flask, render_template, request, redirect, url_for, session, flash
import os

app = Flask(__name__)
app.secret_key = 'science_based_secret_key'

def load_users():
    users = {}
    if os.path.exists("credentials.txt"):
        with open("credentials.txt", "r") as f:
            for line in f:
                parts = line.strip().split(" ", 1)
                if len(parts) == 2:
                    users[parts[0]] = parts[1]
    return users

def save_user(username, password):
    with open("credentials.txt", "a") as f:
        f.write(f"{username} {password}\n")

@app.route('/')
def home_page():
    return render_template("index.html")

@app.route('/machine')
def machine_page():
    return render_template("machine.html")

@app.route('/signup', methods=['GET', 'POST'])
def signup_page():
    if request.method == "POST":
        username = request.form.get('username')
        password = request.form.get('password')
        
        users = load_users()
        
        if username in users:
            flash("Username already exists. Please choose a different one.")
            return redirect(url_for('signup_page'))
        else:
            save_user(username, password)
            flash("Account created successfully! Please log in.")
            return redirect(url_for('login_page'))
            
    return render_template("signup.html")

@app.route('/login', methods=['GET', 'POST'])
def login_page():
    if request.method == "POST":
        username = request.form.get('username')
        password = request.form.get('password')
        
        users = load_users()
        
        if username in users and users[username] == password:
            session['username'] = username  # Log the user in
            return redirect(url_for('home_page'))
        else:
            flash("Invalid username or password.")
            return redirect(url_for('login_page'))
            
    return render_template("login.html")

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('home_page'))

if __name__ == "__main__":
    app.run(debug=True)