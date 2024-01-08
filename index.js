

function mostrarResultado(a,b){
    const numero1 = a
    const numero2 = b
    
    return `la resta es ${restar(numero1,numero2)} y la suma ${add(numero1,numero2)}`
}
console.log(mostrarResultado(5,3))

function add(a,b) {

    return a+b
}
function restar(a,b) {

    return a-b
}
/*
Pedro y  Lucas quieren comparar su índice de masa corporal, que se calcula mediante  la fórmula IMC =  peso / (altura x altura) (masa en kg y altura en metros).

1. Guarda el  peso  y la altura de Pedro y Lucas  en  variables
2. Calcula el IMC de ambos.
3. Guarda en una variable booleana llamada PedroMayorIMC el resultado.

TEST DATA 1: Pedro pesa 78 kg y mide 1.69.  Lucas pesa 92 kg y mide 1.95.
TEST DATA 2: Pedro pesa 95 kg y mide 1.88.  Lucas pesa 85 kg y mide 1.76.
*/

/*
function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function compararIMC(data1, data2) {
    const IMC1 = calcularIMC(data1.peso, data1.altura)
    const IMC2 = calcularIMC(data2.peso, data2.altura)

    const PedroMayorIMC = IMC1 > IMC2

    return PedroMayorIMC
}

console.log(compararIMC({peso: 78, altura: 1.69}, {peso: 92, altura: 1.95}))
console.log(compararIMC({peso: 95, altura: 1.88}, {peso: 85, altura: 1.76}))

console.log(`cadena con
             varias
            líneas`)
*/
const fecha=new Date()
const año= fecha.getFullYear()
const añoNacimiento=2003
const edad= año-añoNacimiento
const esMayorDeEdad=año-añoNacimiento>=18

if (esMayorDeEdad) {
    console.log(`eres mayor de edad,tienes ${edad},puedes beber alcohol`)
    
}else{
    console.log(`no puedes beber alcohol,tienes ${edad}`)
}