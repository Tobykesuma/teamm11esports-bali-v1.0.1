document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.container-modals').style.display = 'none';
});

window.addEventListener('load', function(){
    setTimeout(
        function open(event) {
            document.querySelector('.section-modals').style.display = 'block';
        }, 6000
    )
})