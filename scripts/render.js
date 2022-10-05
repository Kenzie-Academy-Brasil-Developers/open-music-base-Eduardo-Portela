function state(initialValue){
    let value = initialValue

    function getValue(){
        return value
    }

    function setValue(newValue){
         value = newValue
    }

    return [getValue, setValue]
}

const [database,setDatabase] = state(products)

function renderProducts(products = database()){
    const productList = document.querySelector(".music-list")
    productList.innerHTML = ""
    products.forEach(product => {
        productList.insertAdjacentHTML("beforeend",
        ` <li class="card">
        <img src="${product.img}">
        <div class="description">
          <div class="band">
            <p >${product.band}</p>
            <p>${product.year}</p>
          </div>
          <h4>${product.title}</h4>
          <div class="buy-price">
            <p> ${product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <button>Comprar</button>
          </div>
        </div>
      </li>
        `
        )
    });
    return productList
}

renderProducts()