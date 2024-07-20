document.addEventListener("DOMContentLoaded", function() {
    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            if (images.length > 0) {
                const randomIndex = Math.floor(Math.random() * images.length);
                const randomImage = images[randomIndex];
                const imageUrl = `https://kyussvt.github.io/${randomImage}`;
                
                const randomImageElement = document.getElementById('randomImage');
                randomImageElement.src = imageUrl;
            } else {
                console.error("No images found in the JSON file.");
            }
        })
        .catch(error => console.error("Error loading images:", error));
});
