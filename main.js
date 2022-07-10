//================Bienvenida al usuario=====================

let nombreUsuario = prompt(`Bienvenido a l'escabio. \n Ingresa tu nombre`);
let saludar = alert(`Hola ${nombreUsuario}`);

//==================ARRAY DE PRODUCTOS=====================

const cervezas = [
  { id: 10, nombre: "Patagonia", precio: 200, cantidad: 1 },
  { id: 11, nombre: "Miller", precio: 250, cantidad: 1 },
  { id: 12, nombre: "Heineken", precio: 300, cantidad: 1 },
];

const champagnes = [
  { id: 1, nombre: "Veuve Clicquot", precio: 20000, cantidad: 1 },
  { id: 2, nombre: "Veuve Clicquot Rose", precio: 30000, cantidad: 1 },
  { id: 3, nombre: "Chandon", precio: 4500, cantidad: 1 },
];

const vodkas = [
  { id: 7, nombre: "Sky", precio: 1000, cantidad: 1 },
  { id: 8, nombre: "Absolut", precio: 2500, cantidad: 1 },
  { id: 9, nombre: "Smirnoff", precio: 800, cantidad: 1 },
];
const vinos = [
  { id: 4, nombre: "Almanegra Alchimia", precio: 500, cantidad: 1 },
  { id: 5, nombre: "Cabernet Iral", precio: 600, cantidad: 1 },
  { id: 6, nombre: "Malbec Iral", precio: 300, cantidad: 1 },
];

//-----------LOS 4 JUNTOS---------------

const productos = cervezas.concat(champagnes, vinos, vodkas);

//===============CARROWN=============

const carrito = [];

//====================MENU DEL USUARIO================

let opcion;

const mostrar = carrito.forEach((item) =>
  console.log(item.nombre, `$`, item.precio)
);

do {
  opcion = parseInt(
    prompt(
      "Que estas buscando?\n\n1 - Cervezas\n2 - Vinos\n3 - Vodka\n4 - Champagnes\n5 - Ver Carrito\n6 - Eliminar ultimo producto agregado\n7 - Concretar compra\n8 - Salir"
    )
  );
  //------------FUNCION--CALCULAR-PRECIO-DEL-CARROWN----
  const total = carrito
    .map((item) => item.precio)
    .reduce((acc, el) => acc + el, 0);

  //--------VARIABLE-PRODUCTO-----

  let producto;

  switch (opcion) {
    //---------------------CERVEZAS----------------------//

    case 1:
      producto = Number(
        prompt(
          `\n\n1 - Patagonia $200\n\n2 - Miller $250\n\n3 - Heineken $300\n\n4 - Ninguno`
        )
      );
      //----------------MINI-MENU----------------------
      if (producto == 1) {
        carrito.push(cervezas[0]);
        break;
      } else if (producto == 2) {
        carrito.push(cervezas[1]);
        break;
      } else if (producto == 3) {
        carrito.push(cervezas[2]);
        break;
      }

      break;
    //---------------------VINOS----------------------//

    case 2:
      producto = Number(
        prompt(
          `\n\n1 - Almanegra Alchmia $500\n\n2 - Cabernet Iral $600\n\n3 - Malbec Iral $300\n\n4 - Ninguno`
        )
      );
      //---------MINI--MENU-----------------------
      if (producto == 1) {
        carrito.push(vinos[0]);
        break;
      } else if (producto == 2) {
        carrito.push(vinos[1]);

        break;
      } else if (producto == 3) {
        carrito.push(vinos[2]);
        break;
      }
      break;
    //---------------------VODKAS----------------------//

    case 3:
      producto = Number(
        prompt(
          `\n\n1 - Sky $1000\n\n2 - Absolut $2500\n\n3 - Smirnoff $800\n\n4 - Ninguno`
        )
      );
      //------------MINI-MENU--------------//
      if (producto == 1) {
        carrito.push(vodkas[0]);
        break;
      } else if (producto == 2) {
        carrito.push(vodkas[1]);

        break;
      } else if (producto == 3) {
        carrito.push(vodkas[2]);
        break;
      }
      break;

    //---------------------CHAMPAGNE----------------------//

    case 4:
      producto = Number(
        prompt(
          `\n\n1 - Veuve Clicquot $2000\n\n2 - Veuve Clicquot Rose $3000\n\n3 - Chandon $4500\n\n4 - Ninguno`
        )
      );
      //------------MINI-MENU--------------//
      if (producto == 1) {
        carrito.push(champagnes[0]);
        break;
      } else if (producto == 2) {
        carrito.push(champagnes[1]);
        break;
      } else if (producto == 3) {
        carrito.push(champagnes[2]);
        break;
      }
      break;
    //------------MOSTRAR CARRO--------------//

    case 5:
      console.log(`Lo que tenes ahora en tu carrito es:\n`);
      carrito.forEach((item) => console.log(item.nombre, `$`, item.precio));
      console.log(`Te estaria saliendo $${total}`);
      alert(`Podes ver los productos que vas agregando en la consola`);
      break;

    //----------ELIMINAR ULTIMO PRODUCTO----------------//

    case 6:
      carrito.pop();

      console.log(
        `Eliminaste el ultimo producto que agregaste\n - Ahora tenes esto:`
      );
      carrito.forEach((item) => console.log(item.nombre, `$`, item.precio));

      //------------COMPRAR-TOTAL--------------//
      break;
    case 7:
      alert(
        `\n - El total de tu compra es: $${total}\n - Pasa a retirarlo por la consola`
      );
      console.log(`Compraste estos productos:`, carrito);
      console.log(`Por un total de $${total}`);

      break;
    case 8:
      alert(`Chau`);
      break;

    //------------DEFAULT-------------//
    default:
      alert(`no bro, te re equivocaste`);
      break;
  }
} while (opcion <= 6);
