class Profesor {
    constructor(nombre, edad, dni){
    this.nombre = Profesor.capitalizar(nombre);
    this.edad = edad;
    this.dni = dni
    }

    static capitalizar(nombre){
       return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    }
}

module.exports = {Profesor};