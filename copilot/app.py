from flask import Flask
import time

app = Flask(__name__)

@app.route("/")
def seconds():
    def seconds_since_epoch():
        epoch = time.time()
        return int(epoch)
    
    return str(seconds_since_epoch())  # Call the function and return its result as a string

@app.route("/hours")
def hours():
    def hours_since_epoch():
        epoch = time.time()
        return int(epoch / 3600)
    
    return str(hours_since_epoch())  # Call the function and return its result as a string
