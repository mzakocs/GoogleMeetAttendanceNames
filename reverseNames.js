const checkForNames = () => {
  // get the Meeting details > Participants container node
  const participantsContainer = document.querySelector('[aria-label="Participants"]');
  
  // Ends if the participantsContainer doesn't exist
  if (!participantsContainer) return;

  // convert the HTMLCollection to an iterable
  const participantsElements = Array.from(participantsContainer.children ?? []);

  participantsElements.forEach((participantElement, i) => {
    // find the img element as it should be the previousSibling to the name container
    const [imageElement] = participantElement.getElementsByTagName('img');
    const nameContainer = imageElement?.nextSibling;
    
    if (nameContainer) {
      // get the actual element that contains the participant's name
      const [nameElement] = nameContainer.getElementsByTagName('span');
                                          
      if (nameElement) {
        // cater for participants with more than 1 last name
        if (!nameElement.textContent.includes(',')) {
          const [fName, lName, ...names] = nameElement.textContent.split(' ');
          nameElement.textContent = `${lName}${names.length ? ' ' + names.join(' ') : ''}, ${fName}`;
          // Sorts the array of students by last name on the final iteration
          if (i == (participantElement.length - 1)) {
            participantsElements.sort(function(a, b) {
              var nameA = a.children[0].children[1].children[0].innerText.split(",")[0].toUpperCase(); // grabs last name from child div
              var nameB = b.children[0].children[1].children[0].innerText.split(",")[0].toUpperCase(); // grabs last name from child div
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            });
          }
          // Removes elements to replace them in sorted order
          // This is really janky but it works 
          participantsElements.forEach(function(element) {
            element.remove();
            participantsContainer.append(element);
          });
        } 
      }
    }
  });
};

setInterval(checkForNames, 1500);
