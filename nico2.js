const hola = require("./nico");

console.log(hola);

const obj = {
    saludo: require("./nico"),
    cambiarSaludo: saludo => {
        this.saludo = saludo;
    }
}