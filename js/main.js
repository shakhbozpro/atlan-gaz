const faqs = document.querySelectorAll(".faq");


faqs.forEach(faq =>{
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
});
});


document.getElementById("popup_btn").addEventListener("click", function(){
   document.querySelector(".popup").style.display = "flex"
})
document.querySelector(".close").addEventListener("click", function(){
 document.querySelector(".popup").style.display = "none"
})