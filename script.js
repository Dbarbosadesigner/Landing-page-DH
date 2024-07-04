var btn = document.querySelector('.ocultar');
var container = document.querySelector('.barra');

btn.addEventListener('click', function(){
    if (container.style.display === 'block') {
        container.style.display = 'none'
    }
    else{
        container.style.display = 'block'
    }
})


