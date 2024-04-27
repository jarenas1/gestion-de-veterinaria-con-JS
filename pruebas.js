let nuevo = {}
console.info("Seleccionaste la opcion de añadir animal")
nuevo.nombre = prompt("Ingrese el nombre del animal")
nuevo.especie = prompt("Ingrese la especie del animal")
nuevo.raza = prompt("Ingrese la raza del animal")
nuevo.fechaNacimiento =  new Date(prompt("Ingrese la fecha de nacimiento del animal", "YYYY/MM/DD"))
nuevo.edad = Math.floor((new Date() - fechaNacimiento)/(1000*3600*24*365))
nuevo.peso = prompt("Ingrese el peso del animal")
nuevo.estado = prompt("Ingrese el peso del animal")

nuevo.dueno = {}
nuevo.dueno.nombre=prompt("Ingrese el nombre del dueño")
nuevo.dueno.documento= prompt("Ingrese el documento del dueño")
nuevo.dueno.telefono= prompt("Ingrese el documento del dueño")
nuevo.dueno.correo= prompt("Ingrese el correo del dueño")
