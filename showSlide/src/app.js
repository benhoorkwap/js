let interval;




window.addEventListener('load', (e) => {
    e.preventDefault()


   const startSlideShow = () => {

    
    const images = [].slice.apply(document.querySelectorAll('div.item'));
    if(images !== null) {
        let currentSliderIndex;

        // Query images and retrieve index of the current image
        images.forEach((image, index, array) => {
            if(!image.classList.contains('nd')) {
                currentSliderIndex = index;
            }
        })
        let nextIndex = currentSliderIndex + 1;

        // Ensure index doesn't exceed available images.
        if(nextIndex > images.length - 1) {
            nextIndex = images.length - nextIndex;
        }
        let currentImage = images[currentSliderIndex]
        let nextImage =  images[nextIndex];

        // Show and Hide elements respectively
        currentImage.classList.add('nd')
        nextImage.classList.remove('nd')
    }
   }


   // Start Slide show after 4s
   setTimeout(() => {

    // Keep showing slides every 6s
    interval = setInterval(startSlideShow, 6000)
   }, 4000)
})




window.addEventListener('unload', (e) => {
    e.preventDefault()


    // Clear interval when window is unloaded
  clearInterval(interval)
})