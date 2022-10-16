//modal edit

let modalShow = document.querySelector('.modal-showw');
let modalHide = document.querySelector('.modal-hidee');
let modalContainer = document.querySelector('.modal-containerr');
modalShow.addEventListener('click',function(){
    modalContainer.style.display = 'block';

})

modalHide.addEventListener('click',function(){
    modalContainer.style.display = 'none';

})

//modal delete
let modalShow2 = document.querySelector('.modal-show2');
let modalHide2 = document.querySelector('.modal-close');
let modalContainer2 = document.querySelector('.modal-container-delete');
modalShow2.addEventListener('click',function(){
    modalContainer2.classList.add('active');

})

modalHide2.addEventListener('click',function(){
    modalContainer2.classList.remove('active');

})

const borrow = document.getElementById('borrow')
borrow.addEventListener('click',function(){
    alert('Borrowed Successfully :D');
})