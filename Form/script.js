const submit= document.querySelector('.btn')
const name=document.getElementById("name")


submit.addEventListener('click',()=>{
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    alert('Well Done!' + '\n' +"New User Name:"+name + '\n' +"User E-mail:"+email + '\n' +"Password:"+password+"Don't share your pasword.")
});