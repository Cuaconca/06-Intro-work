document.addEventListener('DOMContentLoaded', function() {
    
    var btnFAQ = document.querySelectorAll(".faq-group_btn")
    
    btnFAQ.forEach(btn => {
        btn.onclick = function() {
    
            if (!btn.parentElement.parentElement.parentElement.querySelector(`#${btn.getAttribute("for")}`).checked) {
                btn.innerText = "+"
            } else {
                btn.innerText = "-"
            }
            
        }
    });

    // Apply on mobile
    if (screen.width <= 991.98) {

        document.querySelector(".specialities").querySelector(".row").classList.add("carousel-container")
        document.querySelector(".specialities").querySelector(".row").classList.remove("row")

        const specialitiesCol = document.querySelector(".specialities").querySelector(".carousel-container").querySelectorAll(".col")
        
        specialitiesCol.forEach(element => {
            element.classList.add("carousel-slide")
        });
        

        const slides = document.querySelector(".specialities").querySelector(".carousel-container").querySelectorAll(".carousel-slide")

        let currentIndex = 0;

        function showSlide(index) {

            if (currentIndex == 0) {
                slides.forEach((slide, i) => {
                    slide.style.transform = `translateX(0%)`;
                });
                
            } else {
                slides.forEach((slide, i) => {
                    slide.style.transform = `translateX(${-100 * index}%)`;
                });
            }
            
        }
      
        function nextSlide() {
            if (currentIndex < slides.length - 1) {
                currentIndex+=1
            } else {
                currentIndex = 0
            }

            showSlide(currentIndex);
        }

        setInterval(nextSlide, 3000); // Tự động chuyển ảnh sau mỗi 5 giây

        showSlide(currentIndex);

    } 
})
