'use strict'

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);

const prev = document.querySelector('prev');
const next = document.querySelector('next');

const image = document.querySelector('.item img');
const title = document.querySelector('.content h2');
const description = document.querySelector('.content p')

console.log(image);

let currentImage = 0;

setCurrentImage();

image.src = images[currentImage].image;

prev.addEventListener('click', function () {
    console.log('ho cliccato su prev');

    console.log(currentImage);
    console.log(currentImage > 0);

    if(currentImage > 0) {
        currentImage--;
    } else {
        currentImage = images.lenght - 1;
    }

    setCurrentImage();  
});

next.addEventListener('click', function () {
    console.log('ho cliccato su next');

    console.log(currentImage);
    console.log(currentImage > 0);

    if(currentImage < images.length - 1) {
        currentImage++;
    } else {
        currentImage = 0;
    }
    
    setCurrentImage();
});

function setCurrentImage() {
    const currentElement = images[currentImage];

    image.src = currentElement.image;
    image.alt = currentElement.title;
    title.innerText = currentElement.title;
    description.innerText= currentElement.text;
}