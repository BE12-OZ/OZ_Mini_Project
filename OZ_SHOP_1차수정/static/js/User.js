document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const form = event.target;
    const username = form.username.value.trim();
    const userid = form.userid.value.trim();
    const password = form.password.value;
    const passwordConfirm = form['password-confirm'].value;
    const email = form.email.value.trim();
    const birthdate = form.birthdate.value;
    const gender = form.gender.value;
    const postcode = form.postcode.value.trim();
    const address = form.address.value.trim();

    let isValid = true;

    // Helper function to display error messages
    function displayError(elementId, message) {
        const element = document.getElementById(elementId);
        let errorElement = element.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error-message');
            element.parentNode.insertBefore(errorElement, element.nextSibling);
        }
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        isValid = false;
    }

    // Helper function to clear error messages
    function clearError(elementId) {
        const element = document.getElementById(elementId);
        const errorElement = element.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = '';
        }
    }

    // Username validation
    if (username === '') {
        displayError('username', '이름을 입력해주세요.');
    } else {
        clearError('username');
    }

    // User ID validation
    const useridRegex = /^[a-zA-Z0-9]{4,12}$/;
    if (userid === '') {
        displayError('userid', '아이디를 입력해주세요.');
    } else if (!useridRegex.test(userid)) {
        displayError('userid', '아이디는 4-12자의 영문, 숫자만 가능합니다.');
    } else {
        clearError('userid');
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (password === '') {
        displayError('password', '비밀번호를 입력해주세요.');
    } else if (!passwordRegex.test(password)) {
        displayError('password', '비밀번호는 8자 이상이며, 영문, 숫자, 특수문자를 포함해야 합니다.');
    } else {
        clearError('password');
    }

    // Password confirmation validation
    if (passwordConfirm === '') {
        displayError('password-confirm', '비밀번호 확인을 입력해주세요.');
    } else if (password !== passwordConfirm) {
        displayError('password-confirm', '비밀번호가 일치하지 않습니다.');
    } else {
        clearError('password-confirm');
    }

    // Email validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (email === '') {
        displayError('email', '이메일을 입력해주세요.');
    } else if (!emailRegex.test(email)) {
        displayError('email', '유효한 이메일 주소를 입력해주세요.');
    } else {
        clearError('email');
    }

    // Birthdate validation (not in the future)
    if (birthdate !== '') {
        const today = new Date();
        const birthDateObj = new Date(birthdate);
        if (birthDateObj > today) {
            displayError('birthdate', '미래 날짜는 입력할 수 없습니다.');
        } else {
            clearError('birthdate');
        }
    } else {
        clearError('birthdate'); // Optional: if birthdate is not required
    }

    // Gender validation
    if (!gender) {
        displayError('female', '성별을 선택해주세요.'); // Display error next to the last radio button
    } else {
        clearError('female');
    }

    // Postcode validation
    if (postcode === '') {
        displayError('postcode', '우편번호를 입력해주세요.');
    } else {
        clearError('postcode');
    }

    // Address validation
    if (address === '') {
        displayError('address', '주소를 입력해주세요.');
    } else {
        clearError('address');
    }

    if (isValid) {
        console.log('폼이 유효합니다. 제출합니다!');
        const formData = new FormData(form);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        // Here you would typically send the form data to a server
        window.location.href = 'RegistrationComplete.html';
    } else {
        console.log('폼 유효성 검사 실패.');
    }
});
