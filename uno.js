// Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
// de cada una debo obtener los siguientes datos:
// el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
// Se debe Informar al usuario lo siguiente:
// a) El promedio de cantidad por tipo de producto
// b) El tipo de inflamable con más cantidad de unidades en total de la compra
// c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
// d) la marca y tipo del más caro de los productos

function mostrar()
{
	var nombre;
	var precio;
	var cantidad;
	var tipoInflamable;
	var marca;

	var flagTipo=false;
	var flagCaro=false;
	var tipoCaro;
	var marcaCaro;
	var precioCaro;
	var cantidadCombustible;
	var cantidadIgnifugo;
	var cantidadExplosivo;
	var promedioCombustible;
	var promedioIgnifugo;
	var promedioExplosivo;
	var promedioTotalIg;
	var promedioTotalEx;
	var promedioTotalCom;
	var contadorIac;

	for (var i=0;i<5;i++)
	{
		nombre=prompt("Ingrese el nombre del producto.");
		while (nombre!="alcohol"&&nombre!="iac"&&nombre!="guat")
		{
			nombre=prompt("Nombre invalido. Ingrese el nombre del producto.");
		}

		
		for (;;)
		{
			precio=prompt("Ingrese precio.");
			precio=parseInt(precio);

			if (precio<=300||precio>=100) 
			{
				break;
			}
		}


		cantidad=prompt("Ingrese la cantidad.");
		cantidad=parseInt(cantidad);
		while (cantidad<0||cantidad>1000)
		{
			cantidad=prompt("Cantidad invalida. Ingrese la cantidad.");
			cantidad=parseInt(cantidad);	
		}

		tipoInflamable=prompt("Ingrese le tipo de inflamable.");
		while (tipoInflamable!="ignifugo"&&tipoInflamable!="combustible"&&tipoInflamable!="explosivo")
		{
			tipoInflamable=prompt("Tipo inflamable invalido. Ingrese nuevamente el tipo");
		}

		marca=prompt("Ingrese la marca del producto.");
		while (isNaN(marca)==false&&marca==" ")
		{
			marca=prompt("Marca invalida. Ingrese la marca del producto.");
		}


		if (flagTipo==false) 
		{
			flagTipo=true;

			switch (tipoInflamable)
			{
				case "combustible":
					cantidadCombustible=cantidad;
					break;

				case "ignifugo":
					cantidadIgnifugo=cantidad;
					break;
					
				case "explosivo":
					cantidadExplosivo=cantidad;
					break;
			}
		}
		else if (tipoInflamable=="combustible")
		{
			cantidadCombustible=cantidad;
			promedioCombustible=promedioCombustible+cantidad;

			if (cantidadCombustible<cantidad)
			{
				
				cantidadCombustible=cantidad;
			}

		}
		else if (tipoInflamable=="ignifugo")	
		{
			
			promedioIgnifugo=promedioIgnifugo+cantidad;
			if (cantidadIgnifugo<cantidad)
			{
				
				cantidadIgnifugo=cantidad;
			}
		}
		else if (tipoInflamable=="explosivo"&&cantidadExplosivo<cantidad)	
		{
			promedioExplosivo=promedioExplosivo+cantidad;

			if (cantidadExplosivo<cantidad)
			{
				
				cantidadExplosivo=cantidad;
			}
			
		}
		
		if (nombre=="iac"&&precio<200)
		{
			contadorIac++
		}
		

		if (flagCaro==false||precioCaro<precioCaro)
		{
			precioCaro=precio;
			tipoCaro=tipoInflamable;
			marcaCaro=marca;
			flagCaro=true;
		}








	}


	if (cantidadExplosivo>cantidadIgnifugo&&cantidadExplosivo>cantidadCombustible)
	{
		alert("El tipo de inflamable con mayor cantidad es "+cantidadExplosivo);
	}
	else if (cantidadCombustible>cantidadIgnifugo&&cantidadCombustible>cantidadExplosivo)
	{
		alert("El tipo de inflamable con mayor cantidad es "+cantidadCombustible);
	}
	else 
	{
		alert("El tipo de inflamable con mayor cantidad es "+cantidadIgnifugo);
	}
	
	
	promedioTotalIg=promedioIgnifugo/cantidad;
	promedioTotalCom=promedioCombustible/cantidad;
	promedioTotalEx=promedioExplosivo/cantidad;

	if (promedioTotalIg>0)
	{
		alert("El promedio de productos ignifugos del total de su compra es de "+promedioTotalIg);
	}
	else if (promedioTotalEx>0)
	{
		alert("El promedio de productos explosivos del total de su compra es de "+promedioTotalEx);
	}
	else 
	{
		alert("El promedio de productos combustible del total de su compra es de "+promedioTotalCom);
	}
	
	if (contadorIac>0)
	{
		alert("La cantidad de producto IAC con precio menor a 200 es "+contadorIac);
	}


	alert("La marca más cara es "+marcaCaro+" y es un producto de tipo "+tipoCaro+" con un precio de "+precioCaro+" pesos.")

}
