//VARIABLES

let producto1 = 15;
let precioProducto1 = 4000;
let producto2 = 10;
let precioProducto2 = 4200;
let producto3 = 18;
let precioProducto3 = 3700;
let producto4 = 5;
let precioProducto4 = 5600;
let precioFinal = 0;

//FUNCIONES

function bienvenida() {
  /* muestra el menu de bienvenida */
  return parseInt(
    prompt(
      "<----------> Bienvenido a E-Commerce <----------> \n\nSeleccione una opción: \n1- Consultar stock \n2- Realizar pedido \n0- Salir"
    )
  );
}
const restaStock = function (num1, num2) {
  /* descuenta la cantidad de producto que solicita el cliente */
  if (num1 <= num2 && num1 > 0) {
    num2 = num2 - num1;
  } else if (num1 <= 0) {
    alert("Cantidad no válida");
  } else {
    alert("No disponemos de stock. Stock disponible: " + num2);
  }
  return num2;
};

const calculaPrecio = function (num1, num2, num3) {
  if (num1 <= num3 && num1 >= 0) {
    precioFinal += num1 * num2;
  } else {
    precioFinal += 0;
  }
  return precioFinal;
};

/* LOGICA */

let opcion = bienvenida();

while (opcion != "0") {
  if (opcion == "1") {
    let stock = prompt(
      "Producto 1: " +
        producto1 +
        "\n" +
        "Producto 2: " +
        producto2 +
        "\n" +
        "Producto 3: " +
        producto3 +
        "\n" +
        "Producto 4: " +
        producto4 +
        "\n" +
        "Presiona cualquier tecla para volver"
    );
  } else if (opcion == "2") {
    let pedido = prompt(
      "Selecciona el numero de producto que desea comprar: \n 1- producto1 --> precio por unidad $" +
        precioProducto1 +
        "\n 2- producto2 --> precio por unidad $" +
        precioProducto2 +
        "\n 3- producto3 --> precio por unidad $" +
        precioProducto3 +
        "\n 4- producto4 --> precio por unidad $" +
        precioProducto4 +
        "\n\n presiona 0 para finalizar compra"
    );
    while (pedido != "0") {
      let cantidadCompra;
      switch (pedido) {
        case "1":
          cantidadCompra = parseInt(
            prompt("Cuantos desea comprar? Stock disponible: " + producto1)
          );
          precioFinal = calculaPrecio(
            cantidadCompra,
            precioProducto1,
            producto1
          );
          producto1 = restaStock(cantidadCompra, producto1);
          break;
        case "2":
          cantidadCompra = parseInt(
            prompt("Cuantos desea comprar? Stock disponible: " + producto2)
          );
          precioFinal = calculaPrecio(
            cantidadCompra,
            precioProducto2,
            producto2
          );
          producto2 = restaStock(cantidadCompra, producto2);
          break;
        case "3":
          cantidadCompra = parseInt(
            prompt("Cuantos desea comprar? Stock disponible: " + producto3)
          );
          precioFinal = calculaPrecio(
            cantidadCompra,
            precioProducto3,
            producto3
          );
          producto3 = restaStock(cantidadCompra, producto3);
          break;
        case "4":
          cantidadCompra = parseInt(
            prompt("Cuantos desea comprar? Stock disponible: " + producto4)
          );
          precioFinal = calculaPrecio(
            cantidadCompra,
            precioProducto4,
            producto4
          );
          producto4 = restaStock(cantidadCompra, producto4);
          break;
        default:
          alert("Opción no válida");
          break;
      }
      pedido = prompt(
        "Selecciona el numero de producto que desea comprar: \n 1- producto1 --> precio por unidad $" +
          precioProducto1 +
          "\n 2- producto2 --> precio por unidad $" +
          precioProducto2 +
          "\n 3- producto3 --> precio por unidad $" +
          precioProducto3 +
          "\n 4- producto4 --> precio por unidad $" +
          precioProducto4 +
          "\n\nTOTAL= $" +
          precioFinal +
          "\n\n Presiona 0 para finalizar compra"
      );
    }
    alert("Valor total de su compra: $" + precioFinal);
  } else {
    alert("Opción no válida");
  }

  opcion = bienvenida();
}
alert("Gracias por su compra.");
