const char=document.getElementById("textarea")
let total_count=document.getElementById('total-character')
let remaining_count=document.getElementById('remaining-character')
let data=''

char.addEventListener('input',(e)=>{
    let lengt= (e.target.value)
    let count=lengt.length
    data=lengt
    
total_count.innerText=count
remaining_count.innerText=150-count
})

const copytext=()=>{
    char.select();
    char.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(char.value)
}

