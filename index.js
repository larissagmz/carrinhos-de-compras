const products = [
    {
        name: "Uva",
        price: 5.0,
    },
    {
        name: "Arroz",
        price: 10.0,
    },
    {
        name: "Banana",
        price: 6.5,
    },
    {
        name: "Manteiga",
        price: 8.0,
    },
    {
        name: "Morango",
        price: 15.0,
    },
];

const header = document.createElement("header");
const title = document.createElement("h1");
title.innerText = "Virtual Market";
const main = document.createElement("main");
const body = document.body;
let div = document.createElement("div");
div.className = "item";
let total = document.createElement("p");
total.innerText = "Item";
let valor = document.createElement("p");
valor.innerText = "Valor";
main.appendChild(div);
div.append(total, valor);
body.appendChild(header);
header.appendChild(title);

function addProducts(products) {
    body.appendChild(main);
    const ul = document.createElement("ul");
    ul.className = "product-list";
    main.appendChild(ul);
    for (let i = 0; i < products.length; i++) {
        let li = document.createElement("li");
        li.className = "product-details";
        let name = document.createElement("p");
        name.innerText = products[i].name;
        let price = document.createElement("p");
        const formatBr = products[i].price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        price.innerText = formatBr;
        ul.appendChild(li);
        li.append(name, price);
    }
    let sum = sumProducts(products);
    let button = document.createElement("button");
    button.className = "button-finish-purchase";
    button.innerText = "Finalizar compra";
    let section = document.createElement("section");
    section.className = "info";
    main.appendChild(section);
    let div = document.createElement("div");
    div.className = "value-total";
    let total = document.createElement("p");
    total.innerText = "Total";
    let span = document.createElement("span");
    span.innerText = sum;
    section.appendChild(div);
    div.append(total, span);
    section.appendChild(button);
}

function sumProducts(products) {
    let sum = 0;

    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    const formatBr = sum.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return formatBr;
}
addProducts(products);

sumProducts(products);
