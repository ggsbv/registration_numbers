//FUNCTION    : showRequestedRegNums
//PARAMETERS  : [1] listOfRegNumElems =>  list of DOM elements that contain text
//                                        representing registration numbers
//                # Type : Array
//              [2] id                =>  registration number identifier, that
//                                        identifies the origin/location where
//                                        the registration number was issued. Eg:
//                                        "CY" for Bellville, for reg number "CY 503-179"
//                # Type : String
//RETURN      : N/A
//DESCRIPTION : Takes a list of registration number elements, and an identifier string
//              and changes the display attribute of each element in the array
//              based on the identifier

function showRequestedRegNums(listOfRegNumElems, id){
  for(let i = 0; i < listOfRegNumElems.length; i++){
    var currentRegNum = listOfRegNumElems[i].textContent;
    if(id === 'All' || currentRegNum.startsWith(id)){
      listOfRegNumElems[i].style.display = 'block';
    }
    else{
      listOfRegNumElems[i].style.display = 'none';
    };
  };
};
