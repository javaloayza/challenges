// class Pokemon {}

//   constructor(nombre, tipo){
//   this.nombre = nombre;
//   this.tipo = tipo;
//   }

//   ataque () {
//     console.log(`Soy el pokemon ${this.nombre} y mi ataque es de tipo ${this.tipo}`);
//   }
// }

// const pokemon1 = new Pokemon('pikachu', 'electrico')
// const pokemon2 = new Pokemon('Charmander', 'fuego')

// pokemon1.ataque();
// pokemon2.ataque();

// class Animal {
//   constructor(name, specie, geolocation ) {
//     this.name = name;
//     this.specie = specie;
//     this.geolocation = geolocation;
//   }

//   whereIsMyHome() {
//     console.log(`I am a ${this.name}, I am a ${this.specie} and a live in ${this.geolocation}`);
//   }
// }

// const elephant = new Animal('Elephant', 'Mammal', 'Africa'); 

// elephant.whereIsMyHome();

// function stringReverse(str) {
//   let word = str.split('');
//   let reverseWord = [];

//   for ( i = word.length - 1; i >= 0; i--) {
//     reverseWord.push(word[i]);
//   }
//   return reverseWord.join('');
// }

// console.log(stringReverse('hello')) 

function findEelement(arr, target) {
  for (let i=0; i < arr.length; i++) {
    if (arr[i] == target) {
      return true;
    } 
  }
  return false;
}

console.log(findEelement([1,2,3,4,5], 2))