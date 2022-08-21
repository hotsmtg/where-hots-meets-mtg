function generateGallery(gallery, commanders) {

    // Run thourgh array of commanders and generate a gallery card for each
    for (let i = 0; i < commanders.length; i++) {

        //create the gallery card div
        const galleryCard = document.createElement('div');
        galleryCard.setAttribute('id', 'hs-' + commanders[i].id)
        galleryCard.classList.add("gallery-container");

        //set-up the variable for the onclick overlay
        const onClickVariable = "overlayOn('" + commanders[i].id + "')";
        galleryCard.setAttribute('onclick', onClickVariable);

        //create the img tag and append to gallery card div
        const image = document.createElement('img');
        image.setAttribute('src', commanders[i].front)
        galleryCard.appendChild(image);

        //create the footer of the gallery card and append it
        const footerSection = document.createElement('div');
        footerSection.classList.add('footer');

        const footerLink = document.createElement('a');
        footerLink.setAttribute('href', '#');
        footerLink.textContent = commanders[i].name;
        footerSection.appendChild(footerLink);
        galleryCard.appendChild(footerSection);

        //append the gallery card
        gallery.appendChild(galleryCard);

    }

    return gallery;
}