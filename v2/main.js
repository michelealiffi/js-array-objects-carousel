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

const items = document.querySelector('.items');
const thumbs = document.querySelector('.thumbs');
const title = document.querySelector('.content h2');
console.log(title);
const description = document.querySelector('.content p');
let currentImage = 0;

createElements('item', items);
createElements('thumb', thumbs);

setContent();
const allItems = document.querySelectorAll('.item');
const allThumbs = document.querySelectorAll('.thumb');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

thumbs.addEventListener('click', function (event) {
    const parentElement = event.target.parentElement;
    
    if(event.target.parentElement.classList.contains('thumb')){
        console.log('ho cliccato su immagine')
        console.log(parentElement);

        currentImage = parseInt(parentElement.dataset.index);
    }
});

prev.addEventListener('click', function () {
    allItems[currentImage].classList.remove('active');
    if(currentImage > 0) {
        currentImage--;
    } else {
        currentImage = allItems.length - 1;
    }
    setContent();
    allItems[currentImage].classList.add('active');
    allThumbs[currentImage].classList.add('active');
});

next.addEventListener('click', function () {
    allItems[currentImage].classList.remove('active');
    if(currentImage > 0) {
        currentImage++;
    } else {
        currentImage = allItems.length - 1;
    }
    setContent();
    allItems[currentImage].classList.add('active');
    allThumbs[currentImage].classList.add('active');
});

function createElements(className = 'item', parentElement) {
    images.forEach((element, index, arr) => {
        console.log(element);
    
        const div = document.createElement('div');
    
        div.classList.add(className);
        div.dataset.index = index;
    
        if(index === currentImage) {
            div.classList.add('active');
        }
    
        const image = document.createElement('img');
        image.src = element.image;
        image.alt = element.title;
    
        console.log(div);
        console.log(image);
    
        div.append(image);
        parentElement.append(div);
    });
}

function setContent() {
    title.innerText = images[currentImage].title;
    description.innerText = images[currentImage].text;
}