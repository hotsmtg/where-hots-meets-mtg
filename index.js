// Crop given image (from relative path) to a div element with card format
function cropToCard(image) {

    //create the image path string to be used as variable in the css
    const imagePath = " --imageUrl:url(\'" + image + "\')";
    
    //create the inner div for the cropped card
    const content = document.createElement('div');
    content.classList.add("cropped-card");
    content.style = imagePath;
    
    //create the outer div to crop the content
    const card = document.createElement('div');    
    card.classList.add("crop-container");
    
    //insert the inner div into the outer div
    card.appendChild(content);
    
    return card;
}