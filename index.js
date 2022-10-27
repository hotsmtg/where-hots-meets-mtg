function generateGallery(gallery, commanders) {

    // Run thourgh array of commanders and generate a gallery card for each
    for (let i = 0; i < commanders.length; i++) {

        //create the card div
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

function getCommanderById(id) {
    return commanders.filter(
        function (commanders) {
            return commanders.id == id;
        }
    );
}

function getCommanderByName(name) {
    return commanders.filter(
        function (commanders) {
            return commanders.name == name;
        }
    );
}


function selectRandomCommanders(numberOfCommanders) {

    let selectedCommanders = [];

    for (let i = 0; i < numberOfCommanders; i++) {

        let candidate = getCommanderById(Math.round(Math.random() * 100));

        let validCandidate = (
            candidate[0] &&
            candidate[0].name != "Artanis" &&
            candidate[0].name != "ChoGall" &&
            candidate[0].name != "Hogger" &&
            candidate[0].name != "Mei" &&
            candidate[0].name != "Sgt. Hammer" &&
            candidate[0].name != "Tassadar" &&
            candidate[0].name != "The Lost Vikings"
        )

        if (validCandidate) {
            selectedCommanders.push(candidate[0]);
        }
        else {
            i--;
        }
    }
    return selectedCommanders;
}

function generateFeaturedGallery(gallery, numberOfCards) {

    let selectedCommanders = selectRandomCommanders(numberOfCards);

    // Run thourgh array of selected commanders and generate a gallery card for each
    for (let i = 0; i < selectedCommanders.length; i++) {

        //create the card li
        const galleryCard = document.createElement('li');
        galleryCard.setAttribute('id', 'hs-' + selectedCommanders[i].id)

        //set-up the variable for the onclick overlay
        const onClickVariable = "updateCardPreview(getCommanderById('" + selectedCommanders[i].id + "')[0])";
        galleryCard.setAttribute('onclick', onClickVariable);

        //create the img tag and append to gallery card div
        const image = document.createElement('img');
        image.setAttribute('src', selectedCommanders[i].front)
        galleryCard.appendChild(image);

        //create the footer of the gallery card and append it
        const footerSection = document.createElement('div');
        footerSection.classList.add('footer');

        const footerLink = document.createElement('a');
        //footerLink.setAttribute('href', '#');
        footerLink.textContent = selectedCommanders[i].name;
        footerSection.appendChild(footerLink);
        galleryCard.appendChild(footerSection);

        //append the gallery card
        gallery.appendChild(galleryCard);
    }

    return gallery;
}

function updateCardPreview(commander) {

    if (!commander.back) {

        //create the card-container div
        let cardContainer = document.createElement('div');
        cardContainer.setAttribute('class', "card-container");

        //create the img
        let image = document.createElement('img');
        image.setAttribute('src', commander.front);
        cardContainer.appendChild(image);

        document.getElementById("card-preview").replaceChildren(cardContainer);
    }

    else {

        //create the flip-card div
        let flipCard = document.createElement('div');
        flipCard.setAttribute('class', "flip-card");

        //create the flip-card-container div and append to flip-card div
        let flipCardContainer = document.createElement('div');
        flipCardContainer.setAttribute('class', "flip-card-container");
        flipCard.appendChild(flipCardContainer);

        //create the flip-card-front div and append to flip-card-container div
        let flipCardFront = document.createElement('div');
        flipCardFront.setAttribute('class', "flip-card-front");
        flipCardContainer.appendChild(flipCardFront);

        //create the image (front) and append to flip-card-front div
        let imageFront = document.createElement('img');
        imageFront.setAttribute('src', commander.front);
        flipCardFront.appendChild(imageFront);

        //create the flip-card-back div and append to flip-card-container div
        let flipCardBack = document.createElement('div');
        flipCardBack.setAttribute('class', "flip-card-back");
        flipCardContainer.appendChild(flipCardBack);

        //create the image (back) and append to flip-card-back div
        let imageBack = document.createElement('img');
        imageBack.setAttribute('src', commander.back);
        flipCardBack.appendChild(imageBack);

        document.getElementById("card-preview").replaceChildren(flipCard);

    }
}