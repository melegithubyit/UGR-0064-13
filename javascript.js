var input_areas=document.getElementsByClassName("form-control")
function myfunction(){
    if(input_areas[0].value.length !== 0 && input_areas[1].value.length !== 0)
    {
        alert("Your comment is recorded!! we will send you an E-mail for further contact. Thank you for your feedback!") 
    }
}
document.addEventListener("click", function (e) {
        if (e.target.classList.contains("gallery-item")) {
            const src = e.target.getAttribute("src");
            document.querySelector(".modal-img").src = src;
            const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
            myModal.show();
        }
    })