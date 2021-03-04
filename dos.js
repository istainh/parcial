// Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
// nombre
// Tipo curasada("libre";"presencial";"remota")
// cantidad de materias( mas de cero y menos de 8)
// Sexo ( femenino , masculino , no binario)
// Nota promedio (entre 0 y 10)
// edad (validar)
// se debe informar de existir, o informar que no existe , en el caso que corresponda.
// a) El nombre del mejor promedio que no sea masculino
// b) El nombre del mas joven de los alumnos entre los que la dan libre
// d) El promedio de nota por sexo
// f) La edad y nombre del que cursa mas materias que no sean en forma remota


function mostrar()
{
  var nombre;
  var materias;
	var cursada;
	var sexo;
	var edad;
	var nota;
	var repetir;

  var flagNombre=false;
  var flagJoven=false;
  var notaPromedio;
  var nombrePromedio;
  var edadJoven;
  var nombrej;
  var notaFemenino;
  var notaMasculino;
  var promedioFemenino;
  var promedioMasculino;
  var contadorFemenino;
  var contadorMasculino;
  var materiasNombre;
  var materiasEdad;
  var materiasMaxima;
  var flagMaterias=false;
  
  do 
	{
		nombre=prompt("Ingrese el nombre del alumno.");
		while (isNaN(nombre)==false&&nombre==" ")
		{
			nombre=prompt("Nombre invalido. Ingrese el nombre del alumno.");
		}

		cursada=prompt("Ingrese el tipo de cursada de la carrera.");
		while (cursada!="libre"&&cursada!="presencial"&&cursada!="remota")
		{
			cursada=prompt("La cursada es invalida. Ingrese la cursada de la carrera.");
		}

    for (;;)
		{
			materias=prompt("Ingrese la cantidad de materias.");
			materias=parseInt(materias);
			if (materias>0&&materias<8) 
			{
				break;
			}
			else 
			{
				alert("Edad invalida.");
			}

		}

		sexo=prompt("Ingrese el sexo.");
		while (sexo!="femenino"&&sexo!="masculino"&&sexo!="nobinario")
		{
			sexo=prompt("Sexo invalido. Ingrese el sexo.");
		}

		for (;;)
		{
			edad=prompt("Ingrese la edad.");
			edad=parseInt(edad);
			if (edad>16&&edad<50) 
			{
				break;
			}
			else 
			{
				alert("Edad invalida.");
			}

		}

		for (;;)
		{
			nota=prompt("Ingrese la nota.");
			nota=parseInt(nota);
			if (nota>0&&nota<=10) 
			{
				break;
			}
			else 
			{
				alert("Nota invalida.");
			}
		}
		
    
    if (flagNombre==false||notaPromedio<nota)
		{
			notaPromedio=nota;
			nombrePromedio=nombre;
			flagNombre=true;
		}

    if (cursada=="libre")
    {
      if (flagJoven==false||edadJoven<edad)
      {
        edadJoven=edad;
        nombrej=nombre;
        flagJoven=true;
      }
    }
    else if (cursada=="remota")
    {
      if(flagMaterias==false||materiasMaxima<materias)
      {
        materiasMaxima=materias;
        materiasNombre=nombre;
        materiasEdad=edad;
        flagMaterias=true;
      }
    }
    
    if (sexo=="femenino")
    {
      notaFemenino=notaFemenino+nota;
      contadorFemenino=contadorFemenino+1;
    }
    else if (sexo=="masculino")
    {
      notaMasculino=notaMasculino+nota;
      contadorMasculino=contadorMasculino+1;
    }

		repetir=confirm("¿Desea añadir a otro alumno?");
	}while (repetir==true)


  alert("El nombre de la mejor nota de la cursada es "+nombrePromedio+" con una nota de "+notaPromedio);

  alert("El nombre del más joven de los alumnos es "+nombrej+" que hace la cursada libre");
  
  promedioMasculino=notaMasculino/contadorMasculino;
  alert("El promedio de la nota de los alumnos con sexo masculino es "+promedioMasculino);

  promedioFemenino=notaFemenino/contadorFemenino;
  alert("El promedio de la nota de los alumnos con sexo femenino es "+promedioFemenino);

  if (materiasMaxima>0)
  {
    alert("La persona que más materias ve de manera remota se llama "+materiasNombre+" y su edad es "+materiasEdad);
  }

}
