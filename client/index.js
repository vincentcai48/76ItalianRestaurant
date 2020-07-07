document.querySelector("#toggler-icon").addEventListener('click',toggleNav)

function toggleNav(){
    const navElements = document.querySelector("#nav")
    if (navElements.style.display==="none"){
        navElements.style.display="flex"
    }else{
        navElements.style.display="none"   
    }
}

document.querySelector('.alert span.fa-times').addEventListener("click",()=>{
    event.target.parentElement.style.display = "none";
})

fetch('/api/alert')
    .then(res=>res.json())
    .then((data)=>{
        const alertDiv = document.querySelector('.alert')
        console.log(data);
        data.alert?alertDiv.style.display="block":alertDiv.style.display="none"
        alertDiv.querySelector('.alert-text').textContent = data.alerttext;
    })