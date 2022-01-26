// document.querySelector('#submit_form').onsubmit = function(e) {
//     e.preventDefault();

//     let msgOj = document.querySelector('.msg');

//     let fullNameOj = document.querySelector('input[name="fullname"]');
//     let emailOj = document.querySelector('input[name="email"]');
//     let messageOj = document.querySelector('input[name="message"]');

//     let fullName = fullNameOj.value;
//     let email = emailOj.value;
//     let message = messageOj.value;

//     let requiredOj = document.querySelectorAll('.required');
//     if (requiredOj.length>0){
//         requiredOj.forEach(function(item){
//             item.innerText = '';
//         });
//     }

//     let errors = {};

//     if (fullName.trim()==''){
//         errors['fullName'] = 'Họ và tên không được để trống';
//         fullNameOj.parentElement.querySelector('.required').innerText = errors['fullName'];
//     }

//     if (email.trim()==''){
//         errors['email'] = 'Email không được để trống';
//         emailOj.parentElement.querySelector('.required').innerText = errors['email'];
//     }

//     if (fullName.trim()==''){
//         errors['message'] = 'Lời nhắn không được để trống';
//         fullNameOj.parentElement.querySelector('.required').innerText = errors['message'];
//     }

//     if (Object.keys(errors).length==0){
//         msgOj,this.innerHTML = '<div class="arlert alert-danger text-center">Vui lòng kiểm tra dữ liệu</div>';
//     }

// }