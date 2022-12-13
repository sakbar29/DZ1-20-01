
//DZ 1!

const phoneInput = document.querySelector(".phoneInput");
const phoneCheck = document.querySelector(".phoneCheck");
const phoneResult = document.querySelector(".phoneResult");

console.log(phoneCheck, phoneInput, phoneResult);

const regExp = /[@|s|.com|d|0|3]/

phoneCheck.addEventListener("click", () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerText = "YES";
        phoneResult.style.color = "green";
    } else {
        phoneResult.innerText = "NOO";
        phoneResult.style.color = "red";
    }
});

//DZ 2!
let position = 0;

function recursionAnimation() {
    position = position + 5;
    if (position > 600) return;
    document.querySelector('.small-block').style.left = position + 'px';
    animation();
}

function animation() {
    setTimeout(recursionAnimation, 100);
}

animation();


