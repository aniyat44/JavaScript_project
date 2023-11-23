// ========== ///// ========== left menu bar section ========== ///// ========== >>

let left_side_button = document.querySelector('.left_side_button');
let left_aside = document.querySelector(".left_aside");

left_side_button.addEventListener('click', ()=>{
    left_aside.classList.toggle('left_aside_off');
})

// ========== ///// ========== Search section ========== ///// ========== >>

let Search_open = document.querySelector('#search');
let Search_box = document.querySelector('.search_box ');
let search_close_btn = document.querySelector('#search_close_btn');

Search_open.addEventListener('click', ()=>{
    Search_box.style = 'transform: scale(1);';
})

search_close_btn.addEventListener('click', ()=>{
    Search_box.style = 'transform: scale(0)';
})

// ========== ///// ========== login section ========== ///// ========== >>

let login = document.querySelector('#login');
let main_login = document.querySelector('.main_login');
let back_btn = document.querySelector('.back_btn');
let eye_btn = document.querySelector('#eye_btn');
let password = document.querySelector('#password');

login.addEventListener('click', ()=>{
    main_login.style = 'transform: scaleY(1)'
})

back_btn.addEventListener('click', ()=>{
    main_login.style = 'transform: scaleY(0)'
})

eye_btn.addEventListener('click', ()=>{
    if (password.type == "password" ){
        password.type = "text";
        eye_btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }else{
        password.type = "password";
        eye_btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});

// ========== ///// ========== Pack section ========== ///// ========== >>

let bag = document.querySelector('#bag');
let right_aside = document.querySelector('.right_aside');
let pack_close_btn = document.querySelector('#pack_close_btn');

bag.addEventListener('click', ()=>{
    right_aside.style = 'transform: scaleX(1)'
});

pack_close_btn.addEventListener('click', ()=>{
    right_aside.style = 'transform: scaleX(0)'
});