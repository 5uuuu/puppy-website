from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# 允许从 templates 目录直接读取图片（非常规做法，但适合你的情况）
@app.route('/templates/<path:filename>')
def serve_template_file(filename):
    return send_from_directory(app.template_folder, filename)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)