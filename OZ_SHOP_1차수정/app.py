from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('Main_Page.html')

@app.route('/detail')
def detail_page():
    return render_template('Detail_Page.html')

@app.route('/registration_complete')
def registration_complete():
    return render_template('RegistrationComplete.html')

@app.route('/user')
def user_page():
    return render_template('User.html')

@app.route('/register', methods=['POST'])
def register():
    # 폼에서 전송된 데이터를 여기서 처리할 수 있습니다.
    # 예: username = request.form.get('username')
    # print(f"새로운 사용자: {username}")
    return redirect(url_for('registration_complete'))

if __name__ == '__main__':
    app.run(port=5001, debug=True)