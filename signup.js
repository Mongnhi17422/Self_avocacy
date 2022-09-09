function Validator(formSelector) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }


    var formRules = {};
    var validatorRules = {
        required: function (value) {
            return value ? undefined: 'Vui lòng nhập thông tin của bạn!';
        },

        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined: 'Vui lòng nhập email!';
        },

        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : 'Vui lòng nhập tối thiểu 8 kí tự';
            }
        },
    };


    var formElement =document.querySelector(formSelector);

    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if (isRuleHasValue) {
                    ruleInfo =rule.split(':');
                    rule = ruleInfo[0];

                }

                var ruleFunc = validatorRules[rule];

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }

            input.onblur = handleValidate;
            
        }

            function handleValidate(event) {
                var rules = formRules[event.target.name];
                var errorMessage;
                rules.find(function(rule) {
                    errorMessage = rule(event.target.value);
                    return errorMessage;
                });

                if (errorMessage) {
                    var formGroup = getParent(event.target, '.form-group');

                    if (formGroup) {
                        var formMessage = formGroup.querySelector('.form-message');
                        if (formMessage) {
                            formMessage.innerText = errorMessage;
                        }
                    }
                }


            }

            
    
    }
}



if (!localStorage.userList) {
    localStorage.userList = JSON.stringify([])
}
 let fullname = document.getElementById("fullname");
 let email = document.getElementById("email");
 let password = document.getElementById("password");
 let signup = document.getElementById("signup");
 let login = document.getElementById("btn");

 

 signup.addEventListener ("click", ()  => {
    let userList = JSON.parse(localStorage.userList);
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].email == email.value) {
            alert('Tài khoản đã tồn tại!');
            return;
        }

    }
    


    userList.push({
        email: email.value,
        password: password.value
    });
    localStorage.userList = JSON.stringify(userList);
    alert('Chúc mừng bạn đã đăng ký thành công!');

 }); 

 


 













