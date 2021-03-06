const productList = [
    {
        "id": "1",
        "name": "Black Dial Analog Watch",
        "productcode": "NN38042PP01",
        "description": "Fastrack Black Dial Analog Watch for Guysg",
        "price": 123,
        "imageurl": "w1.png"
    },
    {
        "id": "2",
        "name": "Brown Strap Watch",
        "productcode": "NN3165SL01",
        "description": "All Night Brown Dial Leather Strap Watch",
        "price": 111,
        "imageurl": "w2.png"
    },
    {
        "id": "3",
        "name": "Silver Dial Watch",
        "productcode": "NN38017PL02",
        "description": "Fastrack Silver Dial Analog Watch for Guys",
        "price": 222,
        "imageurl": "w3.png"
    },
    {
        "id": "4",
        "name": "Red Dial Watch",
        "productcode": "NN6078SL06",
        "description": "Fastrack Red Dial Analog Watch for Girls",
        "price": 333,
        "imageurl": "w4.png"
    },
    {
        "id": "5",
        "name": "Black Magic Analog Dial",
        "productcode": "55068PP02",
        "description": "Fastrack Impressive and trendy watch for boys",
        "price": 444,
        "imageurl": "w5.png"
    },



    {
        "id": "6",
        "name": "Dark grey watch",
        "productcode": "38058PP03",
        "description": "Fastrack Impressive and trendy watch for boys",
        "price": 555,
        "imageurl": "w6.png"
    },
    {
        "id": "7",
        "name": "Silver grey watch",
        "productcode": "38058PP04",
        "description": "Fastrack Impressive and trendy watch for boys",
        "price": 666,
        "imageurl": "w7.jpg"
    },
    {
        "id": "8",
        "name": "Black red watch",
        "productcode": "38058PP05",
        "description": "Fastrack Impressive and trendy watch for boys",
        "price": 777,
        "imageurl": "w8.jpg"
    },
    {
        "id": "9",
        "name": "Silver white watch",
        "productcode": "38058PP06",
        "description": "Fastrack Impressive and trendy watch for boys",
        "price": 888,
        "imageurl": "w9.jpg"
    },
    {
        "id": "10",
        "name": "Blue brown watch",
        "productcode": "38058PP07",
        "description": "Fastrack Impressive and trendy watch for boys",
        "price": 999,
        "imageurl": "w10.jpg"
    }
]

document.addEventListener("DOMContentLoaded", function () {

    const productdiv = document.getElementById(`products`)
    const productcount = document.getElementById(`productcount`)
    const fliterbox = document.getElementById(`search-bar`)

    const createbox = (product) => {
        return `<div class="box" id="box_${product.id}">
    	    <div class="panel marRight30">
                <a href="./product.html"><img src="images/${product.imageurl}" height="250px" width="100%"></a>
                <div class="title">
                    <h1 style="color:#000;"><b>${product.name}</b></h1>
                    <p style="color:#000;"><b>${product.productcode}</b><br/>${product.description}</p>
                    <div class="content">
                        <div class="button marTop30">
                            <a id="${product.id}" href="#">Add To Cart</a>
                            <img src="images/click.png" height="20px">
                        </div>                
                    </div>
                </div>            
             </div>
        </div>`
    }

    const assign_product_to_product_list = (products) => {
        productdiv.innerHTML = ``
        products.forEach(prod => {
            productdiv.innerHTML += createbox(prod)
        })
        if (products.length === 0)
            productdiv.innerHTML = `<p style="color: black; text-align: center;"><b>No Product Found</b></p>`

        productcount.innerHTML = `<b>Total Products: ${products.length}</b>`
    }

    const filterProducts = (event) => {
        const srch = event.target.value
        const prodcts = productList.filter((prod) => prod.name.toLowerCase().includes(srch.toLowerCase().trim()))
        assign_product_to_product_list(prodcts)

    }

    fliterbox.addEventListener(`keyup`, filterProducts)

    assign_product_to_product_list(productList)

})