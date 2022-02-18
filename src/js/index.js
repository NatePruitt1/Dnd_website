import InitiativeCharacter from "./InitiativeCharacter.js";

const iC = new InitiativeCharacter("Kai", 50, 50, 11, 12);

const iC2 = new InitiativeCharacter("Placo", 50, 50, 16, 12);

const InitiativeTrackerArr = document.getElementsByClassName('InitiativeTracker');
const InitiativeTracker = InitiativeTrackerArr[0];

InitiativeTracker.appendChild(iC.div);
InitiativeTracker.appendChild(iC2.div);
