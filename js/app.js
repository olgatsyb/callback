'use strict'

function handleSubmit(evt) {
    evt.preventDefault();

    const phone = phoneInputEl.value.trim();

    const data = {
        phone,
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:9999/api/lection/cards');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleSuccess;
    xhr.onerror = handleError;
    xhr.send(JSON.stringify(data));
}

function handleSuccess (evt) {
    if (evt.target.status !== 200){
        // TODO: handle error
        return;
    }

    const data = JSON.parse(evt.target.responseText);
    // TODO: work with data
}

function handleError (evt){
    // TODO: handle error
}

const formEl = document.getElementById('card-form');
formEl.addEventListener('submit', handleSubmit);

const phoneInputEl = document.getElementById('phone-input');
const phoneErrorEl = document.getElementById('phone-error');