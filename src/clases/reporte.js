class Reporte {

/*Creamos un array de cantidad y almacenamos su largo para mostrarlo*/
cantidadDeEstudiantes(curso){
    var cantidad = curso.alumnos.length;

    console.log("El total de alumnos es: " + cantidad);
}

/*Creamos dos array para los diferentes estados y con un for recorremos la lista de alumnos, con un
  condicional verificamos sus notas finales si es mayor o igual a 7 se almacena en aprobados, si no
  en desaprobados. Luego se muestra en pantalla */
aprobadosODesaprobados(curso) {
    var aprobados = [];
    var desaprobados = [];

    for (var i = 0; i < curso.alumnos.length; i++) {
        var alumno = curso.alumnos[i];

        if (
            alumno.notas &&
            alumno.notas.final >= 1 &&
            alumno.notas.final <= 10
        ) {
            var notaFinal = alumno.notas.final;

            if (notaFinal >= 7) {
                aprobados.push(alumno);
            } else {
                desaprobados.push(alumno);
            }
        }
    }

    console.log("Aprobados:");
    for (var j = 0; j < aprobados.length; j++) {
        console.log("- " + aprobados[j].nombre);
    }

    console.log("Desaprobados:");
    for (var k = 0; k < desaprobados.length; k++) {
        console.log("- " + desaprobados[k].nombre);
    }
}

/*Creamos las variables para hacer el promedio, luego con un for recorremos las notas finales y las sumamos.
  Con un condicional vemos que si es mayor a 0 haga el promedio y lo muestre. De lo contrario indica que
  no hay notas aún*/
promedioGeneral(curso) {
    var suma = 0;
    var cantidad = 0;

    for (var i = 0; i < curso.alumnos.length; i++) {
        var alumno = curso.alumnos[i];

        if (alumno.notas && alumno.notas.final >= 1 && alumno.notas.final <= 10) {
            suma += alumno.notas.final;
            cantidad++;
        }
    }

    if (cantidad > 0) {
        var promedio = suma / cantidad;
        console.log("El promedio de las notas finales es: " + promedio.toFixed(2));
    } else {
        console.log("No hay notas finales cargadas en este curso.");
    }
}

/*Creamos la variable generarRanking, recorremos los alumnos, luego los ordenamos y con un for vamos mostrando
  las notas en orden descendente*/
generarRanking(curso) {
    var ranking = [];

    // Recorremos todos los alumnos
    for (var i = 0; i < curso.alumnos.length; i++) {
        var alumno = curso.alumnos[i];

        // Verificamos que tenga una nota final válida
        if (
            alumno.notas &&
            alumno.notas.final >= 1 &&
            alumno.notas.final <= 10
        ) {
            var entrada = {
                nombre: alumno.nombre,
                promedio: alumno.notas.final
            };

            ranking.push(entrada);
        }
    }

    // Ordenamos de mayor a menor
    ranking.sort(function(a, b) {
        return b.promedio - a.promedio;
    });

    // Mostramos el ranking
    console.log("Ranking de estudiantes por promedio:");
    for (var j = 0; j < ranking.length; j++) {
        var puesto = j + 1;
        console.log(puesto + ". " + ranking[j].nombre + " → " + ranking[j].promedio);
    }
}

}

module.exports = { Reporte };