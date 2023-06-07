var valid = true

function checkName() {
    var name = document.getElementById("name").value;
    var regex = /^[a-zA-Z\s]+$/;
    var warningMessage = " ";
    if (name === "null" || name === "") {
        document.getElementById("errorMessages").innerHTML += "<p style='color: red'>A firstname is required</p>";
        valid = false
    } else if (regex.test(name) === false) {
        document.getElementById("errorMessages").innerHTML += "<p style='color: red'>The firstname has to be alphabetical</p>";
        valid = false
    } 
}


function checkEmail() {
    var email = document.getElementById("email").value;

    if (email === "null" || email === "") {
        document.getElementById("errorMessages").innerHTML += "<p style='color: red'>An email is required</p>";
        valid = false
    } else {
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            document.getElementById("errorMessages").innerHTML += "<p style='color: red'>Invalid email</p>";
            valid = false
        }
    }
}

function checkComment() {
    var comment = document.getElementById("email").value;

    if (comment === "null" || comment === "") {
        document.getElementById("errorMessages").innerHTML += "<p style='color: red'>A comment is required</p>";
        valid = false
    } 
}


function validateForm() {
    document.getElementById("errorMessages").innerHTML = "";
    valid = true;
    checkName();
    checkEmail();
     checkComment();
    return (valid);
}
