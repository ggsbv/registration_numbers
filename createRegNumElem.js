//FUNCTION    : createRegNumElem
//PARAMETERS  : [1] parentElem    =>  element that child will be appended to
//                # Type : Unordered List element
//              [2] regNum        =>  input registration number that will be appended
//                # Type : String
//RETURN      : N/A
//DESCRIPTION : Creates a list item element, and inserts the regNum as text content
//              of that element. This newly created element is then appended to the
//              parent element supplied as the parentElem argument
function createRegNumElem(parentElem, regNum){
  const li = document.createElement('li');
  li.textContent = regNum;
  parentElem.appendChild(li);
};
