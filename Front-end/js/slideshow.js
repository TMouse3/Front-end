/*let slides = document.querySelectorAll("#slideshow img");
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 2000);

    function nextSlide() {
        slides[currentSlide].className = "";
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = "active";
    } */
  
    let slides = document.querySelectorAll('#slider img');
    let currentSlide = 0;
    genButtonSlide();
    nextSlide();
    //let slideInterval = setInterval(nextSlide, 2000);
    
    document.getElementById('previous').addEventListener('click', previousSlide);
    document.getElementById('next').addEventListener('click', nextSlide);
    
    function genButtonSlide() {
        let divSlide = document.getElementById('buttonSlide');
        for(var i = 0 ;i < slides.length ; i++){
            divSlide.innerHTML += "<button onclick='selectSlide(" + i + ")'>" + i + "</button>";
        }
    }
    function selectSlide(index) {
        slides[currentSlide].className = '';
        currentSlide = index;
        slides[currentSlide].className = 'active';
    }
    
    function previousSlide() {
        slides[currentSlide].className = '';
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        slides[currentSlide].className = 'active';
    }
    
    function nextSlide() {
        slides[currentSlide].className = '';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'active';
    }