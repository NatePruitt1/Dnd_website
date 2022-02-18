class InitiativeCharacter {
  //this class represents a character that is on the initiative screen as an
  //instance

  constructor(name, maxhealth, health, ac, init){
    this.name = name;
    this.maxHealth = maxhealth;
    this.health = health;
    this.ac = ac;
    this.initiative = init;

    //now create a div based off of the these variables
    this.div = this.createDiv();
  }

  createDiv(){
    //this function returns a div that has all of the character stuff.
    var mainDiv = document.createElement('div');
    mainDiv.className = "InitiativeCharacter";

    //create the characters string representation


    var nameP = document.createElement('p');
    nameP.className = "nameP";
    nameP.innerHTML = "- Name: ";

    var editableNameP = document.createElement('p');
    editableNameP.contentEditable = true;
    editableNameP.innerHTML = " " + this.name;



    mainDiv.append(nameP);
    mainDiv.append(editableNameP);
    return mainDiv;
  }

}

export default InitiativeCharacter;
