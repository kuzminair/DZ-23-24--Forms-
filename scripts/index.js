const textRegex = /[^\sA-Zа-я]/i;

const forum = document.querySelector('#forum');
const history = document.querySelector('#history');
const submitBtn = document.querySelector('#forum-submit');
const nameInput = document.querySelector ('#forum-name');
const messageInput = document.querySelector ('#forum-message');

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    if(!textRegex.test(nameInput.value)){
    addMessage();
    //forum.submit();   
    }
    else alert('В поле "Your name" допустимы только буквы и пробелы');
});
function getHoursMy(date){
    date.getHours()<=9 ? result = `0`+`${date.getHours()}` : result = `${date.getHours()}`;
    return result;
}
function getMinutesMy(date){
    date.getMinutes()<=9 ? result = `0`+`${date.getMinutes()}` : result = `${date.getMinutes()}`;
    return result;
}
function getSecondsMy(date){
    date.getSeconds()<=9 ? result = `0`+`${date.getSeconds()}` : result = `${date.getSeconds()}`;
    return result;
}
function getDateMy(date){
    date.getDate()<=9 ? result = `0`+`${date.getDate()}` : result = `${date.getDate()}`;
    return result;
}
function getMonthMy(date){
    date.getMonth()<=8 ? result = `0`+`${date.getMonth()+1}` : result = `${date.getMonth()+1}`;
    return result;
}

function addMessage(){
    let date = new Date();;
    history.innerHTML += `<div class="nextHistory">
    <div class="nameHistory">
    <div class="name">${nameInput.value}</div>
    <div class="date">${getHoursMy(date)}:${getMinutesMy(date)}:${getSecondsMy(date)}  ${getDateMy(date)}.${getMonthMy(date)}.${date.getFullYear()}</div>
    </div>
    <div class="messageHistory">${messageInput.value}</div>
    </div>`;
    nameInput.value = '';
    messageInput.value = '';
}

nameInput.addEventListener ('input', () => {
    if(textRegex.test(nameInput.value))
        nameInput.style.backgroundColor = 'red';
    else
        nameInput.style.backgroundColor = 'white';
});


