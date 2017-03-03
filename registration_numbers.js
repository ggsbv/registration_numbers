const form = document.getElementById('regNumForm');
const input = form.querySelector('input');
const fromTownForm = document.getElementById('fromTown');
const town = fromTownForm.querySelector('select');
const ul = document.getElementById('oRegNums');
//comment

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
  var li = ul.getElementsByTagName('li');
  for(var i = 0; i < li.length; i++){
    var currentListItem = li[i].textContent;
    console.log(currentListItem);
    if(currentTownID === 'All' || currentListItem.startsWith(currentTownID)){
      li[i].style.display = 'block';
    }
    else{
      li[i].style.display = 'none';
    };
  };
});
