let one = document.querySelector('.one');
let two = document.querySelector('.two');
let balloon = document.querySelector('.balloon')
let balloon2 = document.querySelector('.balloon2')


let button = document.querySelector('button');
let baap = document.querySelector('.baap');
let audio = new Audio('Funny happy birthday song.mp3');
let bdy = document.querySelector('body')


let happy = function() {

    audio.play();
    one.setAttribute('src', "happy-birthday-neon-light-500x500.webp");
    button.style.fontSize = "50px"
    button.innerText = "Wishing you wealth health and happiness"
    bdy.style.backgroundColor = "pink"
    button.style.backgroundColor = "pink"
    button.style.color = "red";

    setTimeout(() => {
        button.style.color = "purple";
    }, 1000);

    two.setAttribute('src',"10872549.png")
    two.style.height = "200"
    balloon.setAttribute('src','balloona.png')
    balloon2.setAttribute('src','balloona.png')
    // setTimeout(() => {
    //     baap.classList.remove('hidden');  
    // }, 1000); 


};

button.addEventListener('click', happy);
