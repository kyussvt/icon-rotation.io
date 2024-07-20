document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById('randomImage');
    
    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            if (images.length > 0) {
                const randomIndex = Math.floor(Math.random() * images.length);
                imageElement.src = images[randomIndex];
            } else {
                console.error("No images found in the JSON file.");
            }
        })
        .catch(error => console.error("Error loading images:", error));
});
