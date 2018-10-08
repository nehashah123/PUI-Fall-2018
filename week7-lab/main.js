function chipmunk(name, age) {
  this.name = name;
  this.age = age;
  this.type = chipmunk;
  this.image = "chipmunk.jpg";
}

function guineapig(name, age) {
  this.name = name;
  this.age = age;
  this.type = guineapig;
  this.image = "guineapig.jpg";
}


function chinchilla(name, age) {
  this.name = name;
  this.age = age;
  this.type = chinchilla;
  this.image = "chincilla.jpg";
}

var animals=[new chipmunk(), new guineapig(), new chinchilla()];
var animalNames = ['chucky', 'gunther', 'charlie'];

function generateRandomIndex(maxIndex){
return Math.floor(Math.random()*maxIndex);
}
