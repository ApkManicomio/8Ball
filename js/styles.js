
const shakeBtn = document.getElementById('shake');

const replies = ["Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Better not tell you","Cannot predict now", "Ask again", "My sources say no", "Outlook not so good", "Very doubtful"]//14

let reply = replies[Math.floor(Math.random()* 13)];
console.log(reply)

function shakeIt() {
    document.getElementsByClassName('pic')[0].classList.add('ani');
    setTimeout(changeUp, 2000)
}

function changeUp() {
    document.getElementsByClassName('pic')[0].classList.add('hidden');
    document.getElementsByClassName('pic2')[0].classList.remove('hidden');
     document.getElementsByClassName('typewriter')[0].classList.remove('hidden');
    document.getElementById('answer').innerText = `${reply}`;
    shakeBtn.innerText = 'Play Again';
    shakeBtn.addEventListener("click", reset);
};

function reset() {
    window.location.reload()
}


