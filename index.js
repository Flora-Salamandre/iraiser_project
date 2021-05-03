function validateName() {
    const input = $("#surname")[0];
    const inputMsg = $("#surname-msg")[0];
    inputMsg.hidden = !isEmpty(input.value);
}

function validateCoupleName() {
    const input = $("#surname-couple")[0];
    const inputMsg = $("#surname-couple-msg")[0];
    inputMsg.hidden = !isEmpty(input.value);
}

function validateEmail() {
    const input = $("#email")[0];
    const inputMsg = $("#email-msg")[0];
    inputMsg.hidden = !isEmpty(input.value) && isContainingAt(input.value);
}

function isEmpty(string) {
    return string.trim().length == 0; // La méthode trim() permet de retirer les espaces blancs. La longueur 0 permet de vérifier que le champs est vide //
}

function isContainingAt(string) {
    return string.includes("@");
}

function displayCoupleFields(display) {
    const element = $("#if-couple")[0];
    element.hidden = !display;
}
