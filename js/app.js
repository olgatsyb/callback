'use strict'

function handleSubmit(evt) {
    evt.preventDefault();

    const phone = phoneInputEl.value.trim();
    const data = {
        phone,
    };

    messageEl.textContent = '';
    phoneErrorEl.textContent = '';
    phoneInputEl.textContent = '';

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:9999/api/hw14');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleSuccess;
    xhr.onerror = handleError;
    xhr.send(JSON.stringify(data));
}

function handleSuccess (evt) {
    if (evt.target.status !== 200){
        const data = JSON.parse(evt.target.responseText);
        phoneErrorEl.textContent = data.error;
        messageEl.textContent = 'Произошла ошибка';
        return;
    }

    const data = JSON.parse(evt.target.responseText);
    messageEl.textContent = 'Успешно отправлено! Наш менеджер перезвонит в течение 15 минут.';
}

function handleError (evt){
    if (evt.target.status === 400){
        const data = JSON.parse(evt.target.responseText);
        phoneErrorEl.textContent = data.error;
        messageEl.textContent = 'Произошла ошибка';
    }
}

const formEl = document.getElementById('callback-form');
formEl.addEventListener('submit', handleSubmit);

const messageEl = document.getElementById('message');
const phoneInputEl = document.getElementById('phone-input');
const phoneErrorEl = document.getElementById('phone-error');