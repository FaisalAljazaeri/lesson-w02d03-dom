console.log('It Works!');

// // Select The h1
// const heading = document.querySelector('h1');
// console.log(heading);

// // Select the paragraph
// const pargraph = document.querySelector('p');
// console.log(pargraph);

// // Select the img with a class selector
// const image = document.querySelector('.bill');
// console.log(image);

// // Select the first and second list items
// const firstListItem = document.querySelector('li');
// const secondListItem = document.querySelector('li#second');

// console.log(firstListItem, secondListItem);

// Select all list items from a UL
// const allListItems = document.querySelectorAll('li');
// console.log(allListItems);

// console.log('Strating loop...');
// for (let i = 0; i < allListItems.length; i++) {
//     const currentListItem = allListItems[i];

//     console.log(currentListItem);
// }
// console.log('Ending loop...');


// elemnt.getAttribute('ATTRIBUTE NAME');

// const img = document.querySelector('.bill');

// const src = img.getAttribute('src');
// const alt = img.getAttribute('alt');

// console.log(src, alt);

// // console.log(document.querySelector('.bill').getAttribute('src'));


// // Find the 'a' tag, and log out the 'href' attribute
// const aTag = document.querySelector('a');
// const href = aTag.getAttribute('href');
// console.log(href);



// elm.setAttribute('ATTRIBUTE NAME', 'DESIRED VALUE');

// const img = document.querySelector('img');
// const oldSrc = img.getAttribute('src');

// img.setAttribute('src', 'https://www.placecage.com/400/400');


// // Find a tag
// // And change its href attribute 
// const aTag = document.querySelector('a');
// const oldLink = aTag.getAttribute('href');

// aTag.setAttribute('href', 'https://github.com/FaisalAljazaeri');

// // Try setting the target attribute to be '_blank'
// aTag.setAttribute('target', '_blank');


// Find the h1
// const heading = document.querySelector('h1');

// // Print the current text of h1
// console.log(heading.innerText);

// // Change h1 text to "Changed by JS"
// heading.innerText = "Changed by JS";



// const input = document.querySelector('input');
// console.log(input.value);
// input.value = "Usman";

// // This is only for form-related data
// // input, textarea, dropdowns, checkboxes


// // Styles
// heading.style.color = "hotpink";
// heading.style.fontSize = "120px";
// heading.style.backgroundColor = "green";

// console.log('Heading Color', heading.style.color);


/*
    Create Elements

    1. Create the element and store 
        it in a JS varibale.
    2. Chnage it (using things like .innerText, .style, .setAttribute)
    3. Put it on the page.

*/

const newHeading = document.createElement('h1');
newHeading.innerText = 'Created by JavaScript!';

const targetDiv = document.querySelector('.dynamic');
targetDiv.appendChild(newHeading);

const aTag = document.querySelector('a');
targetDiv.prepend(aTag);

// Make 
const newImg = document.createElement('img');
// Change
newImg.setAttribute('src', 'https://www.placecage.com/300/300');
newImg.style.border = '4px dashed purple';
// Add it to the page
document.querySelector('body').appendChild(newImg);