
// Form SignUp
function ValidateSignUp(formSelector) {

    const signUpBtn = document.getElementById('signUp');
    const signInBtn = document.getElementById('signIn');
    const containerRegister = document.getElementById('form-container');
    const userName = document.querySelector('.fullname');
    const emailSignup = document.querySelector('.email-signup');
    const pass = document.getElementById('password');

    // Animation Register
    signUpBtn.addEventListener('click', () => {
        containerRegister.classList.add('right-panel-active');
    });

    signInBtn.addEventListener('click', () => {
        containerRegister.classList.remove('right-panel-active');
    });

    /**
     * ======================================================================
     */

    // Lắng nghe 2 sự kiện của input
    var inputs = document.querySelectorAll('.form-register__input');
    for (var input of inputs) {
        input.onblur = handleValidate;
        input.oninput = handleClearError;
    }
    
    function handleValidate() {
        var userNameValue = userName.value;
        let emailSignupValue = emailSignup.value;
        let passV = pass.value;
        console.log(passV.length);

        if (userNameValue == '') {
            handleSetError(userName, 'Trường này không được để trống!');
        }

        if (emailSignupValue == '') {
            handleSetError(emailSignup, 'Trường này không được để trống!');
        } else if (!isEmail(emailSignupValue)) {
            handleSetError(emailSignup, 'Email không đúng định dạng!');
        }

        if (passV == '') {
            handleSetError(pass, 'Trường này không được để trống!');
        } else if (passV.length < 8) {
            handleSetError(pass, 'Mật khẩu cần ít nhất 8 ký tự!');
        }
    }

    function handleClearError(event) {
        let parentEle = event.target.parentElement;

        if (parentEle.classList.contains('invalid')) {
            parentEle.classList.remove('invalid');

            if (parentEle.querySelector('.form-message')) {
                parentEle.querySelector('.form-message').innerText = '';
            }
        }
    }

    function isEmail(email) {
        var checkEmail = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
        return checkEmail.test(email);
    }

    function handleSetError(ele, errorMessage) {
        let parentEle = ele.parentElement;
        if (parentEle) {
            parentEle.classList.add('invalid');

            let formMessage = parentEle.querySelector('.form-message');
            if (formMessage) {
                formMessage.innerText = errorMessage;
            }
        }

    }

    // Xử lý submit form
    var formElement = document.querySelector(formSelector);

    formElement.onsubmit = (event) => {
        event.preventDefault();

        let isValid = true;

        // Thông báo Error lỗi khi click 'submit' mà input chưa hợp lệ
        for(var input of inputs) {
            if(handleValidate(input)) {
                isValid = false;
            }
        }

        // Submit form khi khong co error
        if(isValid) {
            if(typeof this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');

                // Cover "enableInputs" qua array => để dùng reduce
                //  => lấy all value của "enableInputs"
                var formValues = Array.from(enableInputs).reduce((values, input) => {
                    values[input.name] = input.value;
                    return values;
                }, {});
                this.onSubmit(formValues);
            // Submit vs hành vi mặc định
            } else {
                formElement.submit();
            }
        }
    }
}

// ---------------------------------------------------------------------------------------------

// Form SignIn
function SignIn(formSelector) {
    const userName = document.querySelector('.username-signin');
    const pass = document.querySelector('.password-signin');
    const inputs = document.querySelectorAll('.form-signin__input');
    
    for(var input of inputs) {
        input.onblur = handleSignIn;
        input.oninput = handleClearError;
    }

    function handleSignIn() {
        const userNameValue = userName.value;
        const passValue = pass.value;

        var username = localStorage.getItem('userData');
        var userdata = JSON.parse(username);

        if(userNameValue !== userdata.username) {
            console.log('tsest 1');
            handleSetError(userName, 'Vui Lòng Nhập Tài Khoản Của Bạn')
            handleSetError(pass, 'Vui Lòng Nhập  Mật Khẩu Của Bạn')

        } else if(
            userNameValue == userdata.username && 
            passValue == userdata.password
        ) {
            window.location.href = "../index.html";
            

        } else {
            handleSetError(pass, 'Vui Lòng Kiểm Tra Lại Tài Khoản Và Mật Khẩu Của Bạn!')
        }
        

    } 

    function handleSetError(ele, errorMessage) {
        let parentEle = ele.parentElement;
        if (parentEle) {
            parentEle.classList.add('invalid');

            let formMessage = parentEle.querySelector('.form-message');
            if (formMessage) {
                formMessage.innerText = errorMessage;
            }
        }

    }

    function handleClearError(event) {
        let parentEle = event.target.parentElement;
        
        if (parentEle.classList.contains('invalid')) {
            parentEle.classList.remove('invalid');

            if (parentEle.querySelector('.form-message')) {
                parentEle.querySelector('.form-message').innerText = '';
            }
        }
    }

    const formElement = document.querySelector(formSelector);
    formElement.onsubmit = (event) => {
        event.preventDefault();

        let isValid = true;

        for(var input of inputs) {
            if(handleSignIn(input)) {
                isValid =false;
            }
        }
    }

}