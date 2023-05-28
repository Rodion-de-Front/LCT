function nextCardStep1() {
    document.getElementById('content').innerHTML = document.getElementById('tmpl_test').innerHTML;
}

function nextCardStep2() {
    document.getElementById('content').innerHTML = document.getElementById('tmpl_champ').innerHTML;
}

function nextCardStep3() {
    document.getElementById('content').innerHTML = document.getElementById('tmpl_student').innerHTML;
}

function nextCardStep4() {
    document.getElementById('content').innerHTML = document.getElementById('tmpl_school').innerHTML;
}

function showProfile() {
    document.getElementById('content').innerHTML = document.getElementById('tmpl_profile').innerHTML;
}

function showMain() {
    document.getElementById('content').innerHTML = document.getElementById('tmpl_school').innerHTML;
}

function renderWelcome(){
    document.getElementById('first-page').innerHTML = document.getElementById('welcome-page').innerHTML;
}

function renderFirst() {
    document.getElementById('first-page').innerHTML = document.getElementById('first_paper').innerHTML;
}

function auth() {
    document.getElementById('enter-form').classList.toggle('enter-form-active');
}

function enter() {
    document.getElementById('first-page').innerHTML = document.getElementById('tmpl_entered').innerHTML;
    document.getElementById('enter-form').classList.toggle('enter-form-active');
}

function lol() {
    document.getElementById('enter-form').classList.toggle('enter-form-active');
}

function registrate() {
    document.getElementById('first-page').innerHTML = document.getElementById('tmpl_registr').innerHTML;
}

function registrated() {
    document.getElementById('first-page').innerHTML = document.getElementById('tmpl_entered').innerHTML;
}

function registrateFromAuth() {
    document.getElementById('enter-form').classList.toggle('enter-form-active');
    document.getElementById('first-page').innerHTML = document.getElementById('tmpl_registr').innerHTML;
}