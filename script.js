
main = {
    header : document.getElementById("main-header"),
    card : document.getElementById("main-cards"),
    vp : document.getElementById("view-profile"),
    mc : document.getElementById("mc")
}

cards = {
    pc1 : document.getElementById("pc-1"),
    pc2 : document.getElementById("pc-2"),
    pc3 : document.getElementById("pc-3"),
}

profiles = {
    1 : document.getElementById("profile-1"),
    2 : document.getElementById("profile-2"),
    3 : document.getElementById("profile-3"),
    current : 0
}

const fadeOut = (e,delay) => {
    e.style.animationDelay = delay
    e.style.animation = "fadeOutUp 1s ease-in-out forwards"
    setTimeout(()=>{e.style.display = "none"},1000)
}

const fadeIn = e => {
    e.style.display = "flex"
    e.style.animation = "fadeInUp 1s ease-in-out forwards"
}

const fadeOutThese = obj => {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            fadeOut(element)
        }
    }
}

const fadeInThese = obj => {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            fadeIn(element)
        }
    }
}

const switchToProfile = index => {
    fadeOutThese(main)
    setTimeout(() => {
    const secondContainer = document.getElementsByClassName('container')[1];
    secondContainer.classList.remove('hidden')
        fadeIn(profiles[index])
    }, 1000);
    profiles.current = index
}

const switchToMain = () => {
    const secondContainer = document.getElementsByClassName('container')[1];
    fadeOut(profiles[profiles.current])
    setTimeout(() => {
        secondContainer.classList.add('hidden')
        fadeInThese(main)
    }, 1000);
    profiles.current = 0
}


cards.pc1.addEventListener("click",()=>{switchToProfile(1)})
cards.pc2.addEventListener("click",()=>{switchToProfile(2)})
cards.pc3.addEventListener("click",()=>{switchToProfile(3)})

backButtons = Array.from(document.getElementsByClassName("back"));
backButtons.map(element => element.addEventListener("click",switchToMain))