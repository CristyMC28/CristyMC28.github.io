document.addEventListener('DOMContentLoaded', function() {
    const bannerImage = document.getElementById('bannerImage');
    const images = ['../images/image1.png', '../images/image2.png', '../images/image3.png']; // Lista de imágenes
    
    
    let currentImageIndex = 0;
    
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        bannerImage.src = images[currentImageIndex];
    }
    
    // Cambiar la imagen cada 5 segundos (5000 ms)
    setInterval(changeImage, 5000);
});








