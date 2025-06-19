class Curso {
    constructor(anio, cuatrimestre, profesor) {
        this.alumnos = [];
        this.anio = anio;
        this.cuatrimestre = cuatrimestre;
        this.profesor = profesor;
    }
    /*Agregamos el alumno a la lista con el método push*/
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    /*Con el método sort, ordenamos alfabéticamente*/
    ordenarAlfabeticamente(nombreCurso) {
        var lista2 = this.alumnos.sort((a, b) => (a.nombre > b.nombre) - (a.nombre < b.nombre));
        console.log(`Los alumnos del curso ${nombreCurso} son:`);
        console.log(lista2);
    }

    /*Recorremos con un for la lista de alumnos y comparamos el parametro DNI, si coincide,
     devuelve el alumno, si no, arroja un error*/
    buscarPorDni(dni) {
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].dni === dni) {
                return this.alumnos[i];
            }
        }
        console.log("No se encontró ningún alumno con DNI: " + dni);
    }

    /*Creamos alumnoEliminado y usamosel método find, luego le damos la condición de
     que si está lo elimine, si no existe, muestra un mensaje */
    eliminarPorDni(dni) {
        const alumnoEliminado = this.alumnos.find(alumno => alumno.dni === dni);

        if (alumnoEliminado) {
            this.alumnos = this.alumnos.filter(alumno => alumno.dni !== dni);
            console.log("Se eliminó al alumno: " + alumnoEliminado.nombre);
        } else {
            console.log("No se encontró ningún alumno con ese DNI.");
        }
    }

    /*Creamos cargarNota con sus parametros, comprobamos que estén en el rango y asignamos en un array
      los resultados. Si las notas no están entre 1 y 10, arroja un error */
    cargarNota(dni, primPar, recPrim, secPar, recSec, notaFinal) {
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].dni === dni) {
                if (
                    primPar >= 1 && primPar <= 10 &&
                    recPrim >= 1 && recPrim <= 10 &&
                    secPar >= 1 && secPar <= 10 &&
                    recSec >= 1 && recSec <= 10 &&
                    notaFinal >= 1 && notaFinal <= 10
                ) {
                    const alumno = this.alumnos[i];

                    alumno.notas = {
                        parcial1: primPar,
                        recup1: recPrim,
                        parcial2: secPar,
                        recup2: recSec,
                        final: notaFinal
                    };

                    console.log("Notas cargadas con éxito para " + alumno.nombre);
                    return;
                } else {
                    console.log("Una o más notas están fuera del rango válido (1–10).");
                    return;
                }
            }
        }

        console.log("Alumno no encontrado con DNI: " + dni);
    }

    /*Guardamos en un array aquellos alumnos que sus notas sean iguales o mayoes a 7,
       si los hay, muestra cada uno de ellos, si no, indica lo contrario*/
    obtenerAprobados(nombreCurso) {
        const aprobados = this.alumnos.filter(alumno =>
            alumno.notas && alumno.notas.final >= 7
        );

        if (aprobados.length > 0) {
            console.log(`Los alumnos aprobado del curso ${nombreCurso} son:`);
            aprobados.forEach(alumno => {
                console.log("- " + alumno.nombre);
            });
        } else {
            console.log("No hay alumnos aprobados aún.");
        }
    }

    /*En el array mejores recorremos a los alumnos y analizamos sus notas, luego ordenamos de mayor a menor
      con el método sort, posteriormente con slice, mostramos los primeros 3 indices para el top,
      después, con un condicional recorremos y mostramos cada uno del top 3*/
    mejoresNotas(nombreCurso) {
        const mejores = this.alumnos
            .filter(alumno => alumno.notas && alumno.notas.final >= 0)
            .sort((a, b) => b.notas.final - a.notas.final)
            .slice(0, 3);

        if (mejores.length > 0) {

            console.log(`Top 3 alumnos con mejores notas finales del curso ${nombreCurso} son:`);
            mejores.forEach(alumno => {
                console.log(`- ${alumno.nombre}: ${alumno.notas.final}`);
            });
        } else {
            console.log("No hay alumnos con nota final registrada.");
        }
    }

}

module.exports = { Curso };