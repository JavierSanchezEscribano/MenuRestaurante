//items
const menu = [
  {
    id: 1,
    title: "tortitas americanas",
    category: "Desayuno",
    price: 6.75,
    img: "./images/item-1.jpg",
    desc: `Tortitas americanas que tienen bastante buena pinta. Yo no se que es la salsilla
    esa que tienen, pero no tiene pinta de estar mal. Yo me las comía. `,
  },
  {
    id: 2,
    title: "hamburguesa completa",
    category: "Almuerzo",
    price: 11.25,
    img: "./images/item-2.avif",
    desc: `Hamburguesa de ternera con bacon, queso, huevo, tomate, lechuga... y acompañada
    de patatas fritas, vayamos a que te quedes con hambre. `,
  },
  {
    id: 3,
    title: "Batido 'Adiós aorta'",
    category: "Batidos",
    price: 6.99,
    img: "./images/item-3.jpg",
    desc: `Batido a elegir entre fresa, vainilla y chocolate, con un donut y chocolatinas varias por encima,
    recubierto de nata montada. Una merienda light.`,
  },
  {
    id: 4,
    title: "Desayuno completo",
    category: "Desayuno",
    price: 7.99,
    img: "./images/item-4.jpg",
    desc: `Cafecito, tostadica de tomate y para completar las vitaminas, un zumito de naranja recién exprimido. `,
  },
  {
    id: 5,
    title: "hamburguesa vegana",
    category: "Almuerzo", 
    price: 12.99,
    img: "./images/item-5.jpg",
    desc: `Hamburguesa vegana mu rica, y encima no ha sufrido ningún animal. 10/10. Y viene con pataticas mu ricas también.`,
  },
  {
    id: 6,
    title: "oreo que te veo",
    category: "Batidos",
    price: 4.99,
    img: "./images/item-6.jpg",
    desc: `Probablemente el mejor batido que existe en el mundo, no nos vamos a engañar. Batido de chocolate de oreo, que mas quieres.`,
  },
  {
    id: 7,
    title: "churros con chocolate",
    category: "Desayuno",
    price: 2.99,
    img: "./images/item-7.jpg",
    desc: `Los mejores churros y chocolate del mundo entero, los de la Desi, poco mas que decir. `,
  },
  {
    id: 8,
    title: "Perrito 'paso, que voy ardiendo'",
    category: "Almuerzo",
    price: 9.99,
    img: "./images/item-8.jpg",
    desc: `Perrito caliente a la mexicana, vaya, que pica mas que los mosquitos en el Amazonas.`,
  },
  {
    id: 9,
    title: "batidos de frutas",
    category: "Batidos",
    price: 3.99,
    img: "./images/item-9.jpg",
    desc: `Batidos hechos con leche de soja o almendras. De fresa, platano, piña, kiwi, mango, maracuyá, sandía, melón y tomate, porque si, el tomate es una fruta.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const containerBtn = document.querySelector('.btn-container');


window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
  displayMenuButtons();
  //console.log(menu[4]);
});

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p>${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
  displayMenuItems(menu);
  const categories = menu.reduce(
    function(values, item){
      if(!values.includes(item.category)){
        values.push(item.category);
      }
      return values;
    },
    ["Todo"]
  );
  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  containerBtn.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');
  //filter items
  filterBtns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const category= e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
      if(menuItem.category === category){
        return menuItem;
      }
    });
    if(category === 'Todo'){
      displayMenuItems(menu);
    }else {
      displayMenuItems(menuCategory);
    }
  });
});
}

const numeros = [2, 3, 4, 5];
let cuadradoNumeros = numeros.map(numeros => numeros * 2);
let cuadradoNumerosDos = numeros.map(function(numeros){
  return numeros * 2;
});
console.log(cuadradoNumerosDos);
let sumaNumeros = numeros.reduce((acumulado, suma) => acumulado + suma);
let sumaNumerosDos = numeros.reduce(function(acumulado, suma){
  return acumulado + suma;
})
console.log(sumaNumerosDos);