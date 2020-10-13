const checkForNames = () => {
  // Grabs all of the name elements with the class name "cS7aqe NkoVdd"
  let nameDivs = document.getElementsByClassName("cS7aqe NkoVdd");
  // Checks the length of the collection
  if (nameDivs.length > 0) {
    // Reverses the names
    alreadyDone = true;
    for (let i = 0; i < nameDivs.length; i++) {
      let name = nameDivs[i].innerText;
      if (!name.includes(',')) {
        let splitName = name.split(" ");
        if (splitName.length == 2) {
          nameDivs[i].innerText = splitName[1] + ", " + splitName[0];
        } else continue;
      }
    }
  }
};

setInterval(checkForNames, 1500);
