var alreadyDone = false;
const checkForNames = () => {
  // Grabs all of the name elements with the class name "cS7aqe NkoVdd"
  let nameDivs = document.getElementsByClassName("cS7aqe NkoVdd");
  // Checks the length of the collection
  if (nameDivs.length > 0) {
    // Reverses the names
    if (!alreadyDone) {
      alreadyDone = true;
      for (let i = 0; i < nameDivs.length; i++) {
        let name = nameDivs[i].innerText;
        let splitName = name.split(" ");
        if (splitName.length == 2) {
          nameDivs[i].innerText = splitName[1] + ", " + splitName[0];
        } else continue;
      }
    }
  } else {
    alreadyDone = false;
  }
};

setInterval(checkForNames, 2000);
