const checkForNames = () => {
  // get the Meeting details > Participants container node
  const participantsContainer = document.querySelector('[aria-label="Participants"]');
  
  // convert the HTMLCollection to an iterable
  const participantsElements = Array.from(participantsContainer.children ?? []);

  participantsElements.forEach((participantElement) => {
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
        } 
      }
    }
  });
};

setInterval(checkForNames, 1500);
