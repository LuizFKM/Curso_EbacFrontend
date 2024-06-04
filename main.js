function Instrumento(instrumento, tipo, material, marca){
    this.instrumento = instrumento;
    this.tipo = tipo;
    this.material = material;
    this.marca = marca;
}

function Guitarra(tipo, material, marca, modelo){
    Instrumento.call(this, "Eletrico", tipo, material, marca)
    this.modelo = modelo


}

function Saxofone (tipo, material, marca){
    Instrumento.call(this, "Acústico", tipo, material, marca)
}




const guitarra = new Guitarra("Corda", "Madeira", "Fender", "Sólida")
const saxofone = new Saxofone("Sopro", "Metal", "Selmer" )
const guitarra2 = new Guitarra("Corda", "Madeira", "Gibson", "Semi-Acústica")

console.log(guitarra)
console.log(saxofone)
console.log(guitarra2)