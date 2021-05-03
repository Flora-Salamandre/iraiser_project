function validateName() {
    const input = $("#surname")[0];
    const inputMsg = $("#surname-msg")[0];
    const isValid = !isEmpty(input.value);
    inputMsg.hidden = isValid;
    return isValid;
}

function validateCoupleName() {
    const input = $("#surname-couple")[0];
    const inputMsg = $("#surname-couple-msg")[0];
    const isValid = !isEmpty(input.value);
    inputMsg.hidden = isValid;
    return isValid;
}

function validateAge() {
    const input = $("#age")[0];
    const inputMsg = $("#age-msg")[0];
    const isValid = !isEmpty(input.value) && input.value >= 0 && input.value <= 120;
    inputMsg.hidden = isValid;
    return isValid;
}

function validateEmail() {
    const input = $("#email")[0];
    const inputMsg = $("#email-msg")[0];
    const isValid = !isEmpty(input.value) && isContainingAt(input.value);
    inputMsg.hidden = isValid;
    return isValid;
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

function redirect() {
    const name = $("#name")[0].value;
    if (!validateName()) {
        return;
    }
    const surname = $("#surname")[0].value;
    const age = $("#age")[0].value;
    if (!validateAge()) {
        return;
    }
    const email = $("#email")[0].value;
    if (!validateEmail()) {
        return;
    }
    const telephone = $("#telephone")[0].value;

    let url = `?name=${name}&surname=${surname}&age=${age}&email=${email}&telephone=${telephone}`;

    if ($("#couple")[0].checked) {
        if (!validateCoupleName()) {
            return;
        }
        const nameCouple = $("#name-couple")[0].value;
        const surnameCouple = $("#surname-couple")[0].value;
        url = `${url}&card-type=couple&name-couple=${nameCouple}&surname-couple=${surnameCouple}`;
    } else if ($("#individuelle")[0].checked) {
        url = `${url}&card-type=individuelle`;
    } else {
        url = `${url}&card-type=premium`;
    }

    if (age < 18) {
        window.location.href = `formulaireA.html${url}`;
    } else {
        window.location.href = `formulaireB.html${url}`;
    }
}
