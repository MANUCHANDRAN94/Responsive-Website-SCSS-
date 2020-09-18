let toggleButton1 = document.querySelectorAll('.toggle1');
let toggleButton2 = document.querySelectorAll('.toggle2');
let paragraph = document.querySelectorAll('.toggle-para');

for( let i=0; i< 7; i++){

    toggleButton1[i].addEventListener("click", function() {
        toggleButton2[i].classList.add("active");
        toggleButton1[i].classList.remove("active");
        paragraph[i].classList.add("active");
    })
    toggleButton2[i].addEventListener("click", function() {
        toggleButton1[i].classList.add("active");
        toggleButton2[i].classList.remove("active");
        paragraph[i].classList.remove("active");
    })
}