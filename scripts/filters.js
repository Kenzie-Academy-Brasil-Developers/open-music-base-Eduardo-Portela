    const inputValue = document.getElementById('Price')
    const price = document.querySelector(".final-price > p")
    inputValue.addEventListener("mousemove", (event) => {
        let NinputValue = inputValue.value
        price.innerHTML = NinputValue
        let currentPrice = Number(price.innerHTML)
        let productPrice = products.filter((element) =>{
            return element.price <= currentPrice
        })
        renderProducts(productPrice)
    })




function eventFilters(){
    const typeButtons = [...document.querySelectorAll(".type-button")]
    const productList = document.querySelector(".music-list")

    typeButtons.forEach((button) => {
        button.addEventListener("click", ()=> {
            if(button.id == 0){
                renderProducts()
            }else if(button.id > 4 ){
                productList.innerHTML =""
            }
            
            else{
            const filteredMusics = filterMusic(button)
            renderProducts(filteredMusics)
        }
        })
    })
    
}

eventFilters()

function filterMusic(button){
    const musicFiltered = products.filter((music) =>{
        return music.category == button.id && music.price < Number(price.innerHTML) ? music :"" 
    })

    return musicFiltered
}




