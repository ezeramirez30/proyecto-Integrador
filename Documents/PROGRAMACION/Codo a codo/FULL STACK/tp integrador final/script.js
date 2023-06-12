window.addEventListener('load', function() {

	var precio = 200;
	var resumen = document.getElementById('resumen'); 
	var borrar = document.getElementById('borrar'); 
	var nombre = document.getElementById('nombre') 
	var apellido = document.getElementById('apellido') 
	var correo = document.getElementById('correo') 
	var cantidad = document.getElementById('cantidad'); 
	var seleccion = document.getElementById('inputState'); 
	var mostrar_total = document.getElementById('total'); 

	resumen.addEventListener('click', function() {

		let calcularTotal = function(descuento) {
			let total = ( (precio-(precio*descuento))* parseInt(cantidad.value) ).toFixed(2);
			return total;
		};

		switch (seleccion.value) {
			case "Estudiante":
				if (isNaN(parseInt(cantidad.value))) {
					window.alert('Cantidad ingresada incorrecta.\n Por favor ingrese una cantidad valida');
				} else {
					mostrar_total.value = 'Total a pagar: $' + calcularTotal(0.8);	
				}
				break;
			case "Trainee":
				if (isNaN(parseInt(cantidad.value))) {
					window.alert('Cantidad ingresada incorrecta.\n Por favor ingrese una cantidad valida');
				} else {
					mostrar_total.value = 'Total a pagar: $' + calcularTotal(0.5);	
				}
				break;
			case "Junior":
				if (isNaN(parseInt(cantidad.value))) {
					window.alert('Cantidad ingresada incorrecta.\n Por favor ingrese una cantidad valida');
				} else {
					mostrar_total.value = 'Total a pagar: $' + calcularTotal(0.15);	
				}
				break;
			default:
				mostrar_total.value = 'Seleccione una categoría.';
			break;
		};

	});

	borrar.addEventListener('click', function(){
		nombre.value = "";
		apellido.value = "";
		correo.value = "";
		cantidad.value = "";
		seleccion.value = "Seleccione una opción";
		mostrar_total.value = 'Total a pagar: $';
	});

});