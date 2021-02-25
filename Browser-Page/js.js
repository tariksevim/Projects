  
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const tab= document.querySelector('.tab-container')

btn.addEventListener('mouseover', () => {
    search.classList.toggle('active')
    input.focus()
    tab.classList.toggle('active')
    //tab.classList.toggle('active')
    
})