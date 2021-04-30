function validateName() {
    const input = $("#surname")[0];
    const inputMsg = $("#surname-msg")[0];
    inputMsg.hidden = !isEmpty(input.value);
}

function isEmpty(string) {
    return string.length == 0;
}
