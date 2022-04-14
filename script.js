const nebo = document.getElementById('nebo');
const plaviOblak = document.getElementById('plavioblak');
const sunce = document.getElementById('sunce');
const zutiOblak = document.getElementById('zutioblak');
const galeb1 = document.getElementById('galeb1');
const galeb2 = document.getElementById('galeb2');
const more = document.getElementById('more');
const odraz = document.getElementById('odraz');
const plaza = document.querySelector('plaza');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const galebovi = document.getElementById('galebovi');
const sound = document.getElementById('sound');

window.addEventListener('scroll', e => {
    let value = window.scrollY;  
    sunce.style.top = value * 1.3 + 'px';
    odraz.style.top = value * 1.3 + 'px';
    more.style.top = value * 0.5 + 'px';
    plaza.style.top = value * 0.7 + 'px';
    brdo.style.top = value * 0 + 'px'; 
    
})    

window.addEventListener('scroll', e => {
    let value = window.scrollY;
    text.style.marginRight = value * 2 + 'px';
    text.style.marginTop = value * 1.2 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    galeb1.style.marginLeft = value * .5 + 'px';  
    galeb2.style.marginLeft = value * .3 + 'px'; 
    galeb1.style.marginBottom = value * .5 + 'px';  
    galeb2.style.marginBottom = value * .3 + 'px'; 
})



sound.addEventListener('click', e => {
    if(galebovi.paused) {
        galebovi.play();
        sound.innerHTML = 'off'
    } else {
        galebovi.pause();
        sound.innerHTML = 'on'
    }
})
