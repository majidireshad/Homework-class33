'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

const bodyFont = document.querySelector('body');
bodyFont.style.fontFamily = 'Arial, sans-serif';
const nickName = document.querySelector('#nickname');
const favFood = document.querySelector('#fav-food');
const hometown = document.querySelector('#hometown');
nickName.textContent = 'Reshad';
favFood.textContent = 'Pizza';
hometown.textContent = 'Rotterdam';
const listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].setAttribute('class', 'list-item');
}
