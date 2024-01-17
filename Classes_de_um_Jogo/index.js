// Declarando as Classes
class Hero {
    constructor(name, idade, tipo){
        this.name = name;
        this.idade = idade;
        this.tipo = tipo;
    }
// Declarando uma Função e o Laço de Repetição
    atacar() {
        let ataque
        if (this.tipo === "Mago"){
            ataque = "Magia"
        }else if (this.tipo === "Guerreiro"){
            ataque = "Espada"
        }else if (this.tipo === "Monge"){
            ataque = "Artes Marciais"
        }else if (this.tipo === "Ninja"){
            ataque = "Shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }

}

// Declarando os tipos
let Mago =  new Hero ("Kakashi", 50, "Mago")
let Guerreiro = new Hero ("Sasuke", 40, "Guerreiro")
let Monge = new Hero ("Sakura", 35, "Monge")
let Ninja = new Hero ("Naruto", 21, "Ninja")

// Chamando a função
Mago.atacar()
Guerreiro.atacar()
Monge.atacar()
Ninja.atacar()