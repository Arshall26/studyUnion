import { registration, updateAccountInfo } from "../API/firebaseMethods";

export function inputIsNotEmptyAndNext(nameField, field, nextscreen, {navigation}){
    if (!field) {
        alert(`Le champ est vide !`);
    } else {
        updateAccountInfo(nameField, field, nextscreen, {navigation})
    }
}

export function handlePressEmail(email, password, confirmPass, {navigation}){
    if (!email) {
        alert(`Le champ email est vide !`);
    } else if (password.length < 5 ) {
        alert(`le mot de passe doit contenir au moins 5 caracteres`);
    } else if ((email.search("@") < 0)) {
        alert(`L'email est incorrect`);
    }  else if (!confirmPass) {
        alert(`confirmez votre mot de passe !`);
    } else if (password !== confirmPass) {
        alert('Vous avez mal confirmé le mot de passe !');
    } else {
        registration(email, password, {navigation});
    }
}