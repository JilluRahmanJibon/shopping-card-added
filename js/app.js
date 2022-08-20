const cardArray = []

function displayCard(recive) {

    let totalPrice = 0;
    const tBody = document.getElementById('card-product');
    tBody.innerHTML = '';

    for (let i = 0; i < recive.length; i++) {
        const name = cardArray[i].productName;
        const price = cardArray[i].productPrice;
        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
    
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>
    
    `
        tBody.appendChild(tr)
    }


    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td></td>
    <td>Total Price : </td>
    <td> ${totalPrice} </td>
`

    tBody.appendChild(tr)

}
function addToCard(element) {

    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObject = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    cardArray.push(productObject);


    document.getElementById('total-product-added').innerText = cardArray.length;
    displayCard(cardArray)

}
