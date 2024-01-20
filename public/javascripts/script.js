let create = document.getElementById('Create')
let background = document.getElementById('background')
let register = document.getElementById('register')
let cancel = document.getElementById('cancel')

create.addEventListener('click', function toogle(event){
    event.preventDefault();
    background.style.display="block"
    register.style.display="block"
})

cancel.addEventListener('click',function toogle(event){
    event.preventDefault();
    background.style.display="none"
    register.style.display="none"
})