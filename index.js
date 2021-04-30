function validateName() {
    const input = $("#surname")[0];
    const inputMsg = $("#surname-msg")[0];
    inputMsg.hidden = !isEmpty(input.value);
}

function validateEmail() {
    const input = $("#email")[0];
    const inputMsg = $("#email-msg")[0];
    inputMsg.hidden = !isEmpty(input.value) && isContainingAt(input.value);
}

function isEmpty(string) {
    return string.length == 0;
}

function isContainingAt(string) {
    return string.includes("@");
}
