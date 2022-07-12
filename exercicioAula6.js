// //=========================== PRÁTICA ===============================

// /*
//   Imaginem que temos uma Pet Shop, logo:
//   - precisamos ter nossos pets (class Pet);
//   - propriedades dos pets: nome, raca e peso;
//   - nossos pets vao poder latirOuMiar() // método que imprime `oi, meu nome é XXX, minha raça é YYY e meu peso é ZZZ`
// */



// /*
//   Imaginem agora que na Pet Shop vamos ter também os donos dos pets, logo:
//   - precisamos ter esses donos (class DonoDePet);
//   - propriedades dos donos: nome e pets (array de Pets);
//   - nossos donos vao poder saudar() // método que imprime o nome do dono e o nome de cada um de seus pets
// */

class Pet {
    constructor(nome, raca, peso) {
        this.nome = nome
        this.raca = raca
        this.peso = peso
    }
 
    latirOuMiar(){
        console.log(`oi, meu nome é ${this.nome}, minha raça é ${this.raca} e meu peso é ${this.peso}`)
    }
}

class DonoDePet  {
    constructor(nome, pets) {
        this.nome = nome;
        this.pets = pets;
    }
    saudar(){
        console.log(`O nome do dono é ${this.nome}`)
        this.pets.forEach(pet => pet.latirOuMiar())// posso chamar o atributo nome, raça ou peso  da Class Pet além do método latirOuMiar
    }
}

let cachorro1 = new Pet('Duda', 'linguicinha', 7.800)
let gato1 = new Pet('Branco', 'siames', 3.00)
let gato2 = new Pet('Preto', 'viralata', 4.00)

let dono1 = new DonoDePet('Adriana', [cachorro1, gato1, gato2])

dono1.saudar()


/* Material de reforço */

class Bolo { 
    constructor(ingredientes, nome, tempo){
      this.ingredientes = ingredientes;
      this.nome = nome;
      this.tempo = tempo;
    }

    fazerBolo(){
      console.log(`O bolo ${this.nome} estará pronto em ${this.tempo} min`)
    }
}

let bolo = new Bolo(['fermento', 'leite', 'ovos'], 'Bolo de chocolate', 10)

bolo.fazerBolo()

/* Material de reforço */


