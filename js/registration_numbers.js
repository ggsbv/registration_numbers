"use strict";

const form = document.getElementById('regNumForm');
const input = form.querySelector('input');
const fromTownForm = document.getElementById('fromTown');
const town = fromTownForm.querySelector('select');
const ul = document.getElementById('oRegNums');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const oRegNum = input.value.toUpperCase();
  input.value = "";
  if(oRegNum !== ""){
    const li = document.createElement('li');
    li.textContent = oRegNum;
    ul.appendChild(li);
  };
});

fromTownForm.addEventListener('change', (event) => {
  const currentTown = event.target;
  const currentTownID = currentTown.value;
  var regNumElems = ul.getElementsByTagName('li');
  showRequestedRegNums(regNumElems, currentTownID);
});
