const menuItens = document.querySelector('.menu-itens')
let myLi = ''


function formatCurrency(value) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}


// forEach 

function showMenu(productsArray) {
    myLi = ''

    productsArray.forEach(product => {
        myLi += `
            <li class="item">
                <img src="${product.src}" alt="foto do café">
                <h3 class="item-title">${product.name}</h3>
                <div class="item-price">${formatCurrency(product.price)} <span>${formatCurrency(product.oldPrice)}</span></div>
                <a href="#" class="btn">Adicionar ao carrinho</a>
            </li>
        `

        menuItens.innerHTML = myLi
    });
}


// Map 

function addDiscount() {
    const discountPrice = menuOptions.map(product => {
        return { ...product, price: product.oldPrice * 0.9 }
    })

    showMenu(discountPrice)
}


// Filter 

function filterItens() {
    const filterPrice = menuOptions.filter((product) => product.price < 18)

    showMenu(filterPrice)
}