const slidebarhtr = document.querySelector('.slidebar')
const btnslidebar = document.querySelector('.btn-slidebar')
const txthtr = document.querySelector('.txt-history')
const btnclosesb = document.querySelector('.btn-slidebar-close')

function openslidebar(){
    slidebarhtr.classList.add('open')
    txthtr.classList.add('open')
}

btnslidebar.addEventListener('click', openslidebar)

function closeslidebar(){
    slidebarhtr.classList.remove('open')
    txthtr.classList.remove('open')
}

btnclosesb.addEventListener('click', closeslidebar)

