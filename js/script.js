const menu = document.getElementById('menu-label');
const sidebar = document.getElementsByClassName('sidebar')[0];

menu.addEventListener('click',function() {
    sidebar.classList.toggle('hide');
})

const btn =document.getElementById('btn');

btn.addEventListener('click', function(){
    alert('Data Saved');
})