document.addEventListener("DOMContentLoaded", function() {
    console.log('Document loaded, starting script...');
    
    fetch('assets-prd.ignimgs.com/images.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(images => {
            console.log('Fetched images:', images);
            
            if (images.length > 0) {
                const randomIndex = Math.floor(Math.random() * images.length);
                const randomImage = images[randomIndex];
                const baseUrl = 'https://kyussvt.github.io/assets-prd.ignimgs.com/images/';
                const imageUrl = `${baseUrl}${randomImage}`;
                console.log('Random image URL:', imageUrl);

                // Change the image src
                const randomImageElement = document.getElementById('randomImage');
                randomImageElement.src = imageUrl;

                // Change the URL without reloading the page
                history.pushState(null, '', imageUrl);
            } else {
                console.error("No images found in the JSON file.");
            }
        })
        .catch(error => console.error("Error loading images:", error));
});
