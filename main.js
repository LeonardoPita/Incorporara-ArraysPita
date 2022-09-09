function getName(name) {
    name = prompt("Whats your name?");
    if (name != "") {
        return name
    } else {
        alert("Log a valid name");
        getName();
    }
}

const products = [
    {name:"T-Shirt", price:15},
    {name:"Sweater", price:30},
    {name:"Jacket", price:90},
    {name:"Shorts", price:20},
    {name:"Jeans", price:60},
    {name:"Sandals", price:40},
    {name:"Shoes", price:80},
    {name:"Boots", price:150}
]

let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;
let quantity4 = 0;
let quantity5 = 0;
let quantity6 = 0;
let quantity7 = 0;
let quantity8 = 0;
let subTotal = 0;
let howMany = 0;
let sumarized = `Hola ${getName()} your products are \n`;
let tax = 1.21;
let total = 0;

function selectProducts() {
    let selection = Number(prompt(`Select your product \n1. ${products[0].name} - price: ${products[0].price} \n2. ${products[1].name} - price: ${products[1].price} \n3. ${products[2].name} - price: ${products[2].price} \n4. ${products[3].name} - price: ${products[3].price} \n5. ${products[4].name} - price: ${products[4].price} \n6. ${products[5].name} - price: ${products[5].price} \n7. ${products[6].name} - price: ${products[6].price} \n8. ${products[7].name} - price: ${products[7].price} \n9. Stop shoping`));
    if (selection != 0) {
        switch (selection) {
            case 1:
                howMany = Number(prompt(`Select quantity.`));
                quantity1 += howMany;
                alert(`${products[0].name} whith a quantity of ${quantity1}\n`);
                subTotal += (products[0].price * quantity1);
                sumarized += `${products[0].name} quantity ${quantity1} \n`;
                selectProducts();
                break;
            case 2:
                howMany = Number(prompt(`Select quantity.`));
                quantity2 += howMany;
                alert(`${products[1].name} whith a quantity of ${quantity2}\n`);
                subTotal += (products[1].price * quantity2);
                sumarized += `${products[1].name} quantity ${quantity2} \n`;
                selectProducts();
                break;
            case 3:
                howMany = Number(prompt(`Select quantity.`));
                quantity3 += howMany;
                alert(`${products[2].name} whith a quantity of ${quantity3}\n`);
                subTotal += (products[2].price * quantity3);
                sumarized += `${products[2].name} quantity ${quantity3} \n`
                selectProducts();
                break;
            case 4:
                howMany = Number(prompt(`Select quantity.`));
                quantity4 += howMany;
                alert(`${products[3].name} whith a quantity of ${quantity4}\n`);
                subTotal += (products[3].price * quantity4);
                sumarized += `${products[3].name} quantity ${quantity4} \n`;
                selectProducts();
                break;
            case 5:
                howMany = Number(prompt(`Select quantity.`));
                quantity5 += howMany;
                alert(`${products[4].name} whith a quantity of ${quantity5}\n`);
                subTotal += (products[4].price * quantity5);
                sumarized += `${products[4].name} quantity ${quantity5} \n`;
                selectProducts();
                break;
            case 6:
                howMany = Number(prompt(`Select quantity.`));
                quantity6 += howMany;
                alert(`${products[5].name} whith a quantity of ${quantity6}\n`);
                subTotal += (products[5].price * quantity6);
                sumarized += `${products[5].name} quantity ${quantity6} \n`;
                selectProducts();
                break;
            case 7:
                howMany = Number(prompt(`Select quantity.`));
                quantity7 += howMany;
                alert(`${products[6].name} whith a quantity of ${quantity7}\n`);
                subTotal += (products[6].price * quantity7);
                sumarized += `${products[6].name} quantity ${quantity7} \n`;
                selectProducts();
                break;
            case 8:
                howMany = Number(prompt(`Select quantity.`));
                quantity8 += howMany;
                alert(`${products[7].name} whith a quantity of ${quantity8}\n`);
                subTotal += (products[7].price * quantity8);
                sumarized += `${products[7].name} quantity ${quantity8} \n`;
                selectProducts();
                break;
            case 9:
                alert(`Shoping ended.`);
                break;
            default:
                alert(`Option not avaliable, select again.`);
                selectProducts();
        }
    } else {
        alert(`Select a valid product option`);
        selectProducts();
    }

}

function totalized() {
    total = (subTotal * tax);
}

selectProducts();
totalized();
total=total.toFixed(2);
alert(`${sumarized} whith a subtotal of ${subTotal} and a total of ${total}`);


