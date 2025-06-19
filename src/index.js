const {Alumno} = require('./clases/alumno');
const {Profesor} = require('./clases/profesor');
const {Curso} = require('./clases/curso');
const {Reporte} = require('./clases/reporte');

const reporte = new Reporte();

// Creamos los objetos alumnos.
var alumno1 = new Alumno("Juan", 43, 29665422);
var alumno2 = new Alumno("Damian", 44, 28442653);
var alumno3 = new Alumno("Pepe", 24, 1111111);
var alumno4 = new Alumno("Luis", 34, 32432432432);

// Creamos los objetos profesores.
var nicolas = new Profesor("Nicolas", 32, 112121221);
var juanLedesma = new Profesor("Juan", 35, 11221312)

//Creamos los objetos cursos.
var programacion = new Curso(2025, 1, nicolas);
var estadistica = new Curso(2025, 2, juanLedesma);

//Agregamos 3 alumnos al curso programacion.
programacion.agregarAlumno(alumno1);
programacion.agregarAlumno(alumno2);
programacion.agregarAlumno(alumno3);
programacion.agregarAlumno(alumno4);

//Agregarmos 3 alumnos al curso logica.
estadistica.agregarAlumno(alumno1);
estadistica.agregarAlumno(alumno2);
estadistica.agregarAlumno(alumno3);
estadistica.agregarAlumno(alumno4);


//Buscamos por DNI en el curso de programación (un caso que devuelve resultado y uno que no).
console.log(programacion.buscarPorDni(29636848));

console.log(programacion.buscarPorDni(2963543453544536848));

//Ordenamos alfabeticamente la lista del curso programacion.
programacion.ordenarAlfabeticamente("Programación");
estadistica.ordenarAlfabeticamente("Estadística");

//Eliminamos de la lista de programación por DNI.
programacion.eliminarPorDni(1111111);

//Cargamos la nota en el curso elegido y por DNI.
programacion.cargarNota(29665422, 9, 9, 8, 8, 9);
estadistica.cargarNota(29665422, 10, 10, 9, 9, 9);

programacion.cargarNota(28442653, 8, 9, 6, 7, 9);
estadistica.cargarNota(28442653, 7, 8, 6, 7, 8);

//Buscamos los aprobados según el curso.
programacion.obtenerAprobados("Programación");
estadistica.obtenerAprobados("Estadística");

//Buscamos las mejores notas del curso.
programacion.mejoresNotas("Programación");
estadistica.mejoresNotas("Estadística");

//Buscamos el promedio general
reporte.promedioGeneral(programacion);
reporte.promedioGeneral(estadistica);
reporte.cantidadDeEstudiantes(programacion);
reporte.cantidadDeEstudiantes(estadistica);