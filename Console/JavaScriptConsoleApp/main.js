// Aplicación JavaScript en Consola - Proyecto de Aprendizaje
// Cubre lecciones 1-5: sintaxis básica, variables, condicionales, arreglos, funciones, objetos

// Lección 1: Introducción
console.log("¡Bienvenido a la aplicación de aprendizaje JavaScript!");
alert("Abre la consola para ver los mensajes. La aplicación comenzará ahora.");

// Variables globales
let historialOperaciones = []; // Arreglo para almacenar historial (Lección 3)
let usuario = { nombre: "Usuario", operacionesRealizadas: 0 }; // Objeto para datos del usuario (Lección 5)

// Función para validar entrada numérica (Validaciones)
function validarNumero(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        alert("Por favor, ingresa un número válido.");
        return null;
    }
    return num;
}

// Funciones para operaciones matemáticas (Lección 4)
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        alert("No se puede dividir por cero.");
        return null;
    }
    return a / b;
}

// Función para mostrar menú
function mostrarMenu() {
    return prompt(`Selecciona una opción:
1. Realizar operación matemática
2. Ver historial de operaciones
3. Trabajar con arreglos
4. Información del usuario
5. Salir
Ingresa el número de la opción:`);
}

// Función principal
function iniciarAplicacion() {
    let continuar = true;
    while (continuar) {
        const opcion = mostrarMenu();
        switch (opcion) {
            case "1":
                realizarOperacion();
                break;
            case "2":
                mostrarHistorial();
                break;
            case "3":
                trabajarConArreglos();
                break;
            case "4":
                mostrarInfoUsuario();
                break;
            case "5":
                continuar = false;
                console.log("¡Gracias por usar la aplicación!");
                alert("¡Hasta luego!");
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    }
}

// Función para realizar operación matemática (Lecciones 2, 4)
function realizarOperacion() {
    const num1Input = prompt("Ingresa el primer número:");
    const num1 = validarNumero(num1Input);
    if (num1 === null) return;

    const num2Input = prompt("Ingresa el segundo número:");
    const num2 = validarNumero(num2Input);
    if (num2 === null) return;

    const operacion = prompt("Selecciona operación: 1. Suma, 2. Resta, 3. Multiplicación, 4. División");

    let resultado;
    let operacionNombre;
    switch (operacion) {
        case "1":
            resultado = sumar(num1, num2);
            operacionNombre = "Suma";
            break;
        case "2":
            resultado = restar(num1, num2);
            operacionNombre = "Resta";
            break;
        case "3":
            resultado = multiplicar(num1, num2);
            operacionNombre = "Multiplicación";
            break;
        case "4":
            resultado = dividir(num1, num2);
            operacionNombre = "División";
            if (resultado === null) return;
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    console.log(`${operacionNombre} de ${num1} y ${num2} = ${resultado}`);
    alert(`${operacionNombre} de ${num1} y ${num2} = ${resultado}`);

    // Agregar al historial (Arreglo)
    historialOperaciones.push({ operacion: operacionNombre, num1, num2, resultado });
    usuario.operacionesRealizadas++; // Actualizar objeto
}

// Función para mostrar historial (Lección 3: Arreglos y ciclos)
function mostrarHistorial() {
    if (historialOperaciones.length === 0) {
        console.log("No hay operaciones en el historial.");
        alert("No hay operaciones en el historial.");
        return;
    }

    console.log("Historial de operaciones:");
    historialOperaciones.forEach((op, index) => {
        console.log(`${index + 1}. ${op.operacion}: ${op.num1} y ${op.num2} = ${op.resultado}`);
    });

    alert("Revisa la consola para ver el historial completo.");
}

// Función para trabajar con arreglos (Lección 3)
function trabajarConArreglos() {
    // Crear arreglo
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log("Arreglo original:", numeros);

    // Filtrar números pares usando función (Lección 4)
    const filtrarPares = (arr) => arr.filter(num => num % 2 === 0);

    const pares = filtrarPares(numeros);
    console.log("Números pares:", pares);

    // Recorrer con for
    console.log("Recorriendo con for:");
    for (let i = 0; i < pares.length; i++) {
        console.log(`Índice ${i}: ${pares[i]}`);
    }

    // Recorrer con while
    console.log("Recorriendo con while:");
    let j = 0;
    while (j < pares.length) {
        console.log(`Índice ${j}: ${pares[j]}`);
        j++;
    }

    alert("Revisa la consola para ver el trabajo con arreglos.");
}

// Función para mostrar info del usuario (Lección 5: Objetos)
function mostrarInfoUsuario() {
    console.log("Información del usuario:");
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Operaciones realizadas: ${usuario.operacionesRealizadas}`);

    // Método en objeto
    usuario.mostrarResumen = function() {
        return `Usuario ${this.nombre} ha realizado ${this.operacionesRealizadas} operaciones.`;
    };

    console.log(usuario.mostrarResumen());
    alert("Revisa la consola para ver la información del usuario.");
}

// Iniciar la aplicación
iniciarAplicacion();