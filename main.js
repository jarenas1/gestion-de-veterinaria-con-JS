//CREAMOS UNA VARIABLE CON LA FECHA ACTUAL
//CREAMOS EL ARRAY PRINCIAL Y CADA UNO DE LOS 10 OBJETOS DE ANIMALES CIN SU RESPECTIVA SESION DE DUENO(DUEÑO)
let actualDate = new Date()
const usuariosVeterinaria = [
    {
        nombre: "luna",
        especie: "perro",
        raza: "labrador retriever",
        fechaNacimiento: new Date(2018,5,15),
        edad: "6",
        peso: "20",
        estado: "estable",
        dueno: {
          nombre: "juan perez",
          documento: "12345678",
          telefono: "1234567890",
          correo: "juan@example.com"
      }
    },
    {
        nombre: "max",
        especie: "gato",
        raza: "siamés",
        fechaNacimiento: new Date(2020,2,20),
        edad : "4",
        peso: "5",
        estado: "critico",
        dueno: {
          nombre: "ana garcia",
          documento: "87654321",
          telefono: "0987654321",
          correo: "ana@example.com"
        }
    },
    {
        nombre: "bobby",
        especie: "perro",
        raza: "bulldog",
        fechaNacimiento: new Date(2019,9,10),
        edad:"4",
        peso: "25",
        estado: "estable",
        dueno: {
          nombre: "carlos ramirez",
          documento: "98765432",
          telefono: "0123456789",
          correo: "carlos@example.com"
     }
    },
    {
        nombre: "Milo",
        especie: "Gato",
        raza: "Persa",
        fechaNacimiento: new Date(2017,7,20),
        edad: "6",
        peso: "8",
        estado: "estable",
        dueno: {
          nombre: "María Fernandez",
          documento: "56789012",
          telefono: "5678901234",
          correo: "maria@example.com"
        }
    },
    {
        nombre: "Rocky",
        especie: "Perro",
        raza: "Golden Retriever",
        fechaNacimiento: new Date(2024,4,5),
        edad: "0",
        peso: "30",
        estado: "estable",
        dueno: {
          nombre: "Laura Gutierrez",
          documento: "34567890",
          telefono: "3456789012",
          correo: "laura@example.com"
        }
    },
    {
        nombre: "simba",
        especie: "gato",
        raza: "maine coon",
        fechaNacimiento: new Date(2019,1,30),
        edad: "5",
        peso: "10",
        estado: "critico",
        dueno: {
          nombre: "roberto martinez",
          documento: "23456789",
          telefono: "2345678901",
          correo: "roberto@example.com"
        }
    },
    {
        nombre: "lola",
        especie: "perro",
        raza: "poodle",
        fechaNacimiento: new Date(2020,10,15),
        edad: "3",
        peso: "15",
        estado: "estable",
        dueno: {
          nombre: "lucía lopez",
          documento: "45678901",
          telefono: "4567890123",
          correo: "lucia@example.com"
        }
    },
    {
       nombre: "whiskers",
        especie: "gato",
        raza: "siamese",
        fechaNacimiento: (2018,3,25),
        edad: "6",
        peso: "7",
        estado: "estable",
        dueno: {
          nombre: "sedro Sanchez",
          documento: "67890123",
          telefono: "6789012345",
          correo: "pedro@example.com"
        }
      
    },
    {
        nombre: "buddy",
        especie: "perro",
        raza: "bichón Frisé",
        fechaNacimiento: new Date(2019,12,10),
        edad: "4",
        peso: "12",
        estado: "estable",
        dueno: {
          nombre: "sofía rodriguez",
          documento: "89012345",
          telefono: "8901234567",
          correo: "sofia@example.com"
        }
    },
    {
        nombre: "snowball",
        especie: "gato",
        raza: "ragdoll",
        fechaNacimiento: new Date(2021,1,20),
        edad:"3",
        peso: "6",
        estado: "estable",
        dueno: {
          nombre: "jorge Martinez",
          documento: "01234567",
          telefono: "0123456789",
          correo: "jorge@example.com"
        }
      }
  ];


//LA FUNCION AÑADIR LE PIDE AL USUARIO LOS DATOS NECESARIOS, LOS TRANSOFORMA EN MINUSCULA Y LOS SUBE AL ARRAY POR MEDIO DEL OBJETO NUEVO
  function añadir (){
  let nuevo = {}
console.info("Seleccionaste la opcion de añadir animal")
nuevo.nombre = prompt("Ingrese el nombre del animal").toLocaleLowerCase()
nuevo.especie = prompt("Ingrese la especie del animal").toLocaleLowerCase()
nuevo.raza = prompt("Ingrese la raza del animal").toLocaleLowerCase()
let fechaDeNacimiento = new Date(prompt("Ingrese la fecha de nacimiento del animal", "YYYY/MM/DD"))
nuevo.fechaNacimiento = fechaDeNacimiento
nuevo.edad = Math.floor((new Date() - fechaDeNacimiento)/(1000*3600*24*365))
nuevo.peso = prompt("Ingrese el peso del animal")
nuevo.estado = prompt("Ingrese estado del animal: Estable/Critico").toLocaleLowerCase()

nuevo.dueno = {}
nuevo.dueno.nombre=prompt("Ingrese el nombre del dueño").toLocaleLowerCase()
nuevo.dueno.documento= prompt("Ingrese el documento del dueño")
nuevo.dueno.telefono= prompt("Ingrese el telefono del dueño")
nuevo.dueno.correo= prompt("Ingrese el correo del dueño")

usuariosVeterinaria.push(nuevo)
alert ("Animal añadidio con exito")
}
//LA FUNCION ELIMINAR PIDE AL USUARIO EL NOMBRE DEL ANIMAL Y LA CEDULA DE SU DUEÑO PARA EVITAR CONFUCIONES, Y POR MEEDIO DEL SPLICE CORTA EL ARRAY DEJANDO POR FUERA EL ANIMAL
function eliminar (){
  alert("Seleccionaste la opcion de eliminar un animal")
  let eliminar = prompt("Ingrese el nombre del animal que desea eliminar").toLocaleLowerCase()
  let cedula = prompt("Ingrese la cedula del dueño")
  let encontrado = false

  usuariosVeterinaria.forEach((animal,posicion) => {
    if (usuariosVeterinaria[posicion].nombre === eliminar && usuariosVeterinaria[posicion].dueno.documento === cedula) {
      usuariosVeterinaria.splice(posicion,1)
      encontrado = true
    } })
    
    if (encontrado) {
      alert("Eliminado con exito")
    }
    else {
      alert("No se encontro el animal en la base de datos")
    }
  }
  
  //EN LA FUNCION MODIFICAR TENEMOS EN CUENTA CADA UNO DE LOS PARAMETROS, MANEJANDO TODO EN MINUSCULAS Y OFRECIENDO OPCIONES COMO CAMBIAR DE ESYADO AUTOMATICAMENTE
  //POR MEDIO DE ESTA TAMBIEN PODEMOS ACCEDER A LOS DATOS DEL DUENO Y MODIFICARLOS
  function modificar (){
    alert("Seleccionaste la opcion de modificar un animal")
    let modificar = prompt("Ingrese el nombre del animal que desea modificar").toLocaleLowerCase()
    let cedula = prompt("Ingrese la cedula del dueño")
    let op = prompt("Ingrese el dato que desea modificar").toLocaleLowerCase()
    option = op.toLowerCase()
    let encontrado = true
    
    usuariosVeterinaria.forEach((animal,posicion) => {
      if (usuariosVeterinaria[posicion].nombre === modificar && usuariosVeterinaria[posicion].dueno.documento === cedula) {
      encontrado = true
          switch (option) {
  
          case "nombre":
            let nuevoNombre = prompt("Ingrese el nuevo nombre").toLocaleLowerCase()
            usuariosVeterinaria[posicion].nombre = nuevoNombre
            alert("cambio exitoso")
            break
  
          case "especie":
            let nuevaEspecie = prompt("Ingrese la nueva especie").toLocaleLowerCase()
            usuariosVeterinaria[posicion].especie = nuevaEspecie
            alert("cambio exitoso")
            break
  
            case "raza":
              let nuevaRaza = prompt("Ingrese la nueva raza").toLocaleLowerCase()
              usuariosVeterinaria[posicion].raza = nuevaRaza
              alert("cambio exitoso")
              break
  
            case "fecha de nacimiento":
              let nuevaFecha = prompt("Ingrese la nueva fecha de nacimiento", "YYYY/MM/DD")
              usuariosVeterinaria[posicion].fechaNacimiento = nuevaFecha
              alert("cambio exitoso")
              break
  
            case "especie":
            let nuevaPeso = prompt("Ingrese el nuevo peso")
            usuariosVeterinaria[posicion].peso = nuevaPeso
            alert("cambio exitoso")
            break

            case "estado":
            if( usuariosVeterinaria[posicion].estado == "estable"){
              usuariosVeterinaria[posicion].estado == "critico"
            }
            else{
              usuariosVeterinaria[posicion].estado == "estable"
            }
            alert("cambio exitoso")
            break
              //EN DUENO TENEMOS OTRO CONDICIONAL PARA MODIFICAR SUS DATOS
            case "dueno":
              let type = prompt("Ingrese el dato del deño que desea modificar").toLowerCase()
              if (type == "nombre"){
              newNombre = prompt("Ingrese el nuevo nombre").toLocaleLowerCase()
              usuariosVeterinaria[posicion].dueno.nombre = newNombre
              alert("cambio exitoso")}
  
              else if (type == "documento"){
                let newDocumento = prompt("Ingrese el nuevo documento")
                usuariosVeterinaria[posicion].dueno.documento=newDocumento
                alert("Cambio exitoso")
              }
  
              else if (type =="telefono"){
                newTelefono = prompt("Ingrese el nuevo numero de telefono")
                usuariosVeterinaria[posicion].dueno.telefono = newTelefono
                alert("Cambio exitoso")
              }
  
              else if (type == "correo"){
                newCorreo = prompt("Ingrese el nuevo correo")
                usuariosVeterinaria[posicion].dueno.correo = newCorreo
                alert("Cambio exitoso")
              }
              else{
                  alert("No se encontro el dato que desea modificar")
              }
              break
  
              default:
                  alert("No se encontro el dato que desea modificar")
                  break
        }
      }
      else{
          encontrado = false 
      }
     }
    )
    if (!encontrado) {
      alert("No se encontró el animal en la base de datos")
    }
  }
  
  //EN LISTAR VAMOS A MOSTRAR UNA LISTA DE LOS OBJETOS QUE CONTIENE EL ARRAY PRINCIPAL
  function listar (){
    console.info("Lista de animales")
    for (const i in usuariosVeterinaria) {
        console.info(usuariosVeterinaria[i])
            
        }
    }
//ESTE VA A LOSTAR LA SECCION DE DUENOS, DE CADA UNO DE LOS OBJETOS DEL ARRAY
function listarDueño(){
  console.info("Lista de dueños");
    for (const i of usuariosVeterinaria) {
        console.info(i.dueno);
    }
}
//ESTA FUNCION VAA BUSCAR LOS ANIMALES POR SU NOMBRE, RECORRIENDO EL ARRAY POR MEDIO DE FOR EACH
function buscarPorNombre(){
  console.info("Buscar por nombre");
    let buscar = prompt("Ingrese el nombre del animal que desea buscar").toLocaleLowerCase()
    let encontrado = false
    usuariosVeterinaria.forEach((animal,posicion) => {
        if (usuariosVeterinaria[posicion].nombre === buscar) {
            encontrado = true
            console.info(usuariosVeterinaria[posicion])
        }
    })
    if (!encontrado) {
        alert("No se encontró el animal en la base de datos")
    }
}
//ESTA FUNCION, BUSCA EN EL ARRAY LOS OBJETOS QUE COINCIDAN CON LA CEDULA INGRESADA PARA EVITAR 2 NOMBRES IGUALES Y LOS VA A MOSTRAR
function buscarMismoDueño(){
    let cedula = prompt("Ingrese la cedula del dueño")
    let encontrado = false
    usuariosVeterinaria.forEach((animal,posicion) => {
        if (usuariosVeterinaria[posicion].dueno.documento === cedula) {
            encontrado = true
            console.info(usuariosVeterinaria[posicion])
        }
    })
    if (!encontrado) {
        alert("No se encontró el animal en la base de datos")
    }
}
//ACA VAMOS A PREGUNTARLE AL USUARIO QUE OPCION DESEA REALIZAR, Y HASTA QUE NO PRESIONE LA OPCION DE SALIR A+VA A PODER CONTINUAR MANIPULANDO LOS DATOS
function menu(){ let opcion = prompt(`Ingrese la opcion que necesita:
1. Añadir animal
2 Eliminar animal
3. modificar animal
4. mostrar lista de animales
5. mostrar lista de dueños
6.busar animal por nombre
7. buscar animales por dueño
8. Salir`)
switch (opcion) {
    case "1":
        añadir()
        menu()
        break
    case "2":
        eliminar()
        menu()
        break
    case "3":
        modificar()
        menu()
        break;
    case "4":
        listar()
        menu()
        break
    case "5":
        listarDueño()
        menu()
        break
    case "6":
        buscarPorNombre()
        menu()
        break
    case "7":
        buscarMismoDueño()
        menu()
        break
    case "8":
      alert("Hasta pronto")
      console.info(("Hata pronto"));
        break
    default:
        alert("Opcion no valida")
        menu()
        
}}
   
menu()