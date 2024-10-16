let showError = document.getElementById('error');



document.getElementById('submit_btn').addEventListener('click', (e) => {
    e.preventDefault();
    let allInput = document.querySelectorAll('.input');

    allInput.forEach((sinInput) => {
        let errorItem = sinInput.previousElementSibling;
        if(sinInput.value === ""){
            errorItem.classList.add('show')
            sinInput.style.border = "2px solid red";
            showError.innerText = "Please fill out the form.";
        }
        else{
            errorItem.classList.remove('show');
            showError.innerText = "";
            sinInput.style.border = "2px solid black"
        }

    })
})