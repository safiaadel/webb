function checkPassword(form) {
    if (form.pass.value.length != 8) {
        alert("Error: password must contain 8 characters! Check the password title, please.");
        return false;
    }

    if (form.pass.value.charAt(0) != form.pass.value.charAt(0).toUpperCase() ||
        Number(form.pass.value.charAt(0)) || form.pass.value.charAt(0) == "-" ||
        form.pass.value.charAt(0) == "_" || form.pass.value.charAt(0) == "*" ||
        form.pass.value.charAt(0) == "#" || form.pass.value.charAt(0) == "&" ||
        form.pass.value.charAt(0) == " ") {
        alert("Error: password must start with uppercase letter (A-Z)! Check the password title, please.");
        return false;

    }
    var i = "1";
    while (!Number(form.pass.value.charAt(i))) {
        i++;
        if (i == 8) {
            alert("Error: password must include at least one digit (0-9)! Check the password title, please.");
            return false;
            break;
        } else continue;
    }
    var i = "1";
    while (form.pass.value.charAt(i) != "-" && form.pass.value.charAt(i) != "_" &&
        form.pass.value.charAt(i) != "#" && form.pass.value.charAt(i) != "&" &&
        form.pass.value.charAt(i) != "*" || form.pass.value.charAt(i) == " ") {
        i++;
        if (i == 8) {
            alert("Error: password must include a special character and no spaces! Check the password title, please.");
            return false;
            break;
        } else continue;
    }
    alert("Thanks , your acount created succefily");
    return true;
}