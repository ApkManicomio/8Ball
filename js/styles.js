let quest = document.getElementById('quest');


const shakeBtn = document.getElementById('shake');

const replies = ["Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Better not tell you","Cannot predict now", "Ask again", "My sources say no", "Outlook not so good", "Very doubtful"]//14

let reply = replies[Math.floor(Math.random()* 13)];
console.log(reply)

function shakeIt() {
    if (quest.value == '') {
        alert("Please ask a question.")
    }else {
    document.getElementsByClassName('pic')[0].classList.add('ani');
    setTimeout(changeUp, 2000);
}}

function changeUp() {
    document.getElementsByClassName('pic')[0].classList.add('hidden');
    document.getElementsByClassName('pic2')[0].classList.remove('hidden');
     document.getElementsByClassName('typewriter')[0].classList.remove('hidden');
    document.getElementById('answer').innerText = `${reply}`;
    $('.questionBox').toggle(4000);
    shakeBtn.innerText = 'Play Again';
    shakeBtn.addEventListener("click", reload);
    setTimeout(5000, reset())
};

function reset(){
    $('.pic').toggle(8000);
};

function reload() {
    window.location.reload()
}


