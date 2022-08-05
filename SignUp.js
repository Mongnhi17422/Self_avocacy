function signup() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById ("email").value;
    var password = document.getElementById( "password").value;
    var user = {
        username: username,
        email: email,
        password: password,
    };

    var json =JSON.stringify(user);
    localStorage.setItem(username, json);
    alert('Chúc mừng, bạn đã đăng ký thành công!');
};