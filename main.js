let actualDate = new Date()
const usuariosVeterinaria = [
    {
        nombre: "Luna",
        especie: "Perro",
        raza: "Labrador Retriever",
        fechaNacimiento: new Date(2018,5,15),
        edad: "6",
        peso: "20",
        estado: "estable",
        dueno: {
          nombre: "Juan Perez",
          documento: "12345678",
          telefono: "1234567890",
          correo: "juan@example.com"
      }
    },
    {
        nombre: "Max",
        especie: "Gato",
        raza: "Siamés",
        fechaNacimiento: new Date(2020,2,20),
        edad : "4",
        peso: "5",
        estado: "critico",
        dueno: {
          nombre: "Ana Garcia",
          documento: "87654321",
          telefono: "0987654321",
          correo: "ana@example.com"
        }
    },
    {
        nombre: "Bobby",
        especie: "Perro",
        raza: "Bulldog",
        fechaNacimiento: new Date(2019,9,10),
        edad:"4",
        peso: "25",
        estado: "estable",
        dueno: {
          nombre: "Carlos Ramirez",
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
        nombre: "Simba",
        especie: "Gato",
        raza: "Maine Coon",
        fechaNacimiento: new Date(2019,1,30),
        edad: "5",
        peso: "10",
        estado: "critico",
        dueno: {
          nombre: "Roberto Martinez",
          documento: "23456789",
          telefono: "2345678901",
          correo: "roberto@example.com"
        }
    },
    {
        nombre: "Lola",
        especie: "Perro",
        raza: "Poodle",
        fechaNacimiento: new Date(2020,10,15),
        edad: "3",
        peso: "15",
        estado: "estable",
        dueno: {
          nombre: "Lucía Lopez",
          documento: "45678901",
          telefono: "4567890123",
          correo: "lucia@example.com"
        }
    },
    {
       nombre: "Whiskers",
        especie: "Gato",
        raza: "Siamese",
        fechaNacimiento: (2018,3,25),
        edad: "6",
        peso: "7",
        estado: "estable",
        dueno: {
          nombre: "Pedro Sanchez",
          documento: "67890123",
          telefono: "6789012345",
          correo: "pedro@example.com"
        }
      
    },
    {
        nombre: "Buddy",
        especie: "Perro",
        raza: "Bichón Frisé",
        fechaNacimiento: new Date(2019,12,10),
        edad: "4",
        peso: "12",
        estado: "estable",
        dueno: {
          nombre: "Sofía Rodriguez",
          documento: "89012345",
          telefono: "8901234567",
          correo: "sofia@example.com"
        }
    },
    {
        nombre: "Snowball",
        especie: "Gato",
        raza: "Ragdoll",
        fechaNacimiento: new Date(2021,1,20),
        edad:"3",
        peso: "6",
        estado: "estable",
        dueno: {
          nombre: "Jorge Martinez",
          documento: "01234567",
          telefono: "0123456789",
          correo: "jorge@example.com"
        }
      }
  ];


function añadir (){
  let nuevo = {}
    console.info("Seleccionaste la opcion de añadir animal")
    let nombre = prompt("Ingrese el nombre del animal")
    nuevo.especie = nombre
    let especie = prompt("Ingrese la especie del animal")
    nuevo.raza = especie
    let raza = prompt("Ingrese la raza del animal")
    nuevo.raza = raza
    let fechaNacimiento = Date(prompt("Ingrese la fecha de nacimiento del animal", "YYYY/MM/DD"))
    nuevo.fechaNacimiento = fechaNacimiento
    let peso = prompt("Ingrese el peso del animal")
    nuevo.peso = peso
    let estado = prompt("Ingrese el estado del animal")
    nuevo.estado = estado
    nuevo.dueno
    let nombreDueno = prompt("Ingrese el nombre del dueño")
    nuevo.dueno.nombre=nombreDueno
    let documento = prompt("Ingrese el documento del dueño")
    nuevo.dueno.documento=documento
    let telefono = prompt("Ingrese el telefono del dueño")
    nuevo.dueno.telefono=telefono
    let correo = prompt("Ingrese el correo del dueño")
    nuevo.dueno.correo=correo
}

console.info(nuevo)