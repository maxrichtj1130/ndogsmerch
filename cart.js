if (localStorage.bag == null) {
    localStorage.setItem('bag', '[]')
  }
  
var BAG = JSON.parse(localStorage.bag)

var CART = document.getElementById('carticon')
var carto = document.getElementsByClassName('cartoverlay')
var cartm = document.getElementsByClassName('cartmenu')
var cartcont = document.getElementsByClassName('cartitems-container')
const dp = [
    {
      "SKU": 0,
      "namaproduk": "ceplogs original t-shirt",
      "desc": "<p>CEPLOGS edition is one of our collections on NDOGS merch. The word 'ceplogs' originated from the Javanese word for sunny-side-up egg (endok ceplok). So, this whole collection has the design of a sunny-side-up egg on top of it. sunny-side-up is also one of the simplest and most popular ways to process an egg around the world. This collection consists of two kinds of product : t-shirts and hoodies </p>",
      "harga": 169000,
      "gbrproduk": "https://www.maxrichardo.com/ndogs/images/gbrproduk/ceplog original",
      "gambarproduk": "https://www.maxrichardo.com/ndogs/images/gambarproduk/ceplog original"
    },
    {
      "SKU": 1,
      "namaproduk": "ceplogs original hoodie",
      "desc": "<p>CEPLOGS edition is one of our collections on NDOGS merch. The word 'ceplogs' originated from the Javanese word for sunny-side-up egg (endok ceplok). So, this whole collection has the design of a sunny-side-up egg on top of it. sunny-side-up is also one of the simplest and most popular ways to process an egg around the world. This collection consists of two kinds of product : t-shirts and hoodies </p>",
      "harga": 199000,
      "gbrproduk": "https://www.maxrichardo.com/ndogs/images/gbrproduk/ceplogs original",
      "gambarproduk": "https://www.maxrichardo.com/ndogs/images/gambarproduk/ceplogs original"
    },
    {
      "SKU": 2,
      "namaproduk": "ceplogs vector t-shirt",
      "desc": "<p>CEPLOGS edition is one of our collections on NDOGS merch. The word 'ceplogs' originated from the Javanese word for sunny-side-up egg (endok ceplok). So, this whole collection has the design of a sunny-side-up egg on top of it. sunny-side-up is also one of the simplest and most popular ways to process an egg around the world. This collection consists of two kinds of product : t-shirts and hoodies </p>",
      "harga": 169000,
      "gbrproduk": "https://www.maxrichardo.com/ndogs/images/gbrproduk/ceplog vector",
      "gambarproduk": "https://www.maxrichardo.com/ndogs/images/gambarproduk/ceplog vector"
    },
    {
      "SKU": 3,
      "namaproduk": "ceplogs vector hoodie",
      "desc": "<p>CEPLOGS edition is one of our collections on NDOGS merch. The word 'ceplogs' originated from the Javanese word for sunny-side-up egg (endok ceplok). So, this whole collection has the design of a sunny-side-up egg on top of it. sunny-side-up is also one of the simplest and most popular ways to process an egg around the world. This collection consists of two kinds of product : t-shirts and hoodies </p>",
      "harga": 199000,
      "gbrproduk": "https://www.maxrichardo.com/ndogs/images/gbrproduk/ceplogs vector",
      "gambarproduk": "https://www.maxrichardo.com/ndogs/images/gambarproduk/ceplogs vector"
    },
    {
      "SKU": 4,
      "namaproduk": "godogs boiled egg levels t-shirt",
      "desc": "<p>GODOGS edition is one of our collections on NDOGS merch. The word 'godogs' originated from the Javanese word for boiled egg (endok godok). So, this whole collection has the design of boiled egg on top of it. Boiling egg is the easiest way to proccess an egg without cooking oil. Due to the rise of cooking oil price in Indonesia, this method is one of the choice to proccess an egg. This collection consists of two kinds of product : t-shirts and hoodies</p>",
      "harga": 169000,
      "gbrproduk": "https://www.maxrichardo.com/ndogs/images/gbrproduk/godog minutes",
      "gambarproduk": "https://www.maxrichardo.com/ndogs/images/gambarproduk/godog minutes"
    },
    {
      "SKU": 5,
      "namaproduk": "godogs boiled egg levels hoodie",
      "desc": "<p>GODOGS edition is one of our collections on NDOGS merch. The word 'godogs' originated from the Javanese word for boiled egg (endok godok). So, this whole collection has the design of boiled egg on top of it. Boiling egg is the easiest way to proccess an egg without cooking oil. Due to the rise of cooking oil price in Indonesia, this method is one of the choice to proccess an egg. This collection consists of two kinds of product : t-shirts and hoodies</p>",
      "harga": 199000,
      "gbrproduk": "https://www.maxrichardo.com/ndogs/images/gbrproduk/godogs minutes",
      "gambarproduk": "https://www.maxrichardo.com/ndogs/images/gambarproduk/godogs minutes"
    },
    {
      "SKU": 6,
      "namaproduk": "godogs original t-shirt",
      "desc": "<p>GODOGS edition is one of our collections on NDOGS merch. The word 'godogs' originated from the Javanese word for boiled egg (endok godok). So, this whole collection has the design of boiled egg on top of it. Boiling egg is the easiest way to proccess an egg without cooking oil. Due to the rise of cooking oil price in Indonesia, this method is one of the choice to proccess an egg. This collection consists of two kinds of product : t-shirts and hoodies</p>",
      "harga": 169000,
      "gbrproduk": "https://www.maxrichardo.com/ndogs/images/gbrproduk/godog original",
      "gambarproduk": "https://www.maxrichardo.com/ndogs/images/gambarproduk/godog original"
    },
    {
      "SKU": 7,
      "namaproduk": "godogs original hoodie",
      "desc": "<p>GODOGS edition is one of our collections on NDOGS merch. The word 'godogs' originated from the Javanese word for boiled egg (endok godok). So, this whole collection has the design of boiled egg on top of it. Boiling egg is the easiest way to proccess an egg without cooking oil. Due to the rise of cooking oil price in Indonesia, this method is one of the choice to proccess an egg. This collection consists of two kinds of product : t-shirts and hoodies</p>",
      "harga": 199000,
      "gbrproduk": "https://www.maxrichardo.com/ndogs/images/gbrproduk/godogs original",
      "gambarproduk": "https://www.maxrichardo.com/ndogs/images/gambarproduk/godogs original"
    }
  ]

var itemX = document.getElementsByClassName('cart-removeitem')


if(document.getElementsByClassName('checkout-btn')[0].href.slice(-2) == "#/"){
    document.getElementsByClassName('checkout-btn')[0].href = '../checkout/index.html'
}




function showcart() {
    carto[0].style['display'] = 'flex'
    setTimeout(function () {
        carto[0].style['opacity'] = '1'
        cartm[0].style['margin-right'] = '0vw'
        document.body.style.overflow = 'hidden'
    }, 0)
}

function closecart() {
    cartm[0].style['margin-right'] = '-40vw'
    carto[0].style['opacity'] = '0'
    document.body.style.overflow = 'auto'
    setTimeout(function () {
        carto[0].style['display'] = 'none'
    }, 300)
}

function hitungsubtotal(){
    var subt = 0
    for (let i = 0; i < JSON.parse(localStorage.bag).length; i++) {
        var SKUi = JSON.parse(localStorage.bag)[i]['SKU']
        subt += dp[SKUi]['harga']

    }
    return subt
}



function cartNumbers() {
    cartcont[0].innerHTML = ''
    CART.innerHTML = 'CART (' + (JSON.parse(localStorage.bag).length) + ')'
    document.getElementsByClassName('totalitem')[0].innerHTML = (JSON.parse(localStorage.bag).length)+' item(s)'
    document.getElementsByClassName('subtotal-angka')[0].innerHTML = hitungsubtotal().toLocaleString('id-ID');

    for (let i = 0; i < JSON.parse(localStorage.bag).length; i++) {
        var SKUi = JSON.parse(localStorage.bag)[i]['SKU']
        cartcont[0].innerHTML += `<div class="cartitem">
            <a href="#/" onclick="`+'cartremoveitem('+i+')'+`" class="cart-removeitem">x</a>
            <img src="`+ dp[SKUi]['gbrproduk'] + ' ' + JSON.parse(localStorage.bag)[i]['color'] + '.webp' + `" class="cart-gbrproduk" alt="">
            <span class="cart-namaproduk">`+ dp[SKUi]['namaproduk'] + `</span>
            <span class="cart-size">size : </span>
            <span class="cart-sizecircle">`+ JSON.parse(localStorage.bag)[i]['size'] + `</span>
            <span class="cart-color">color : </span>
            <div class="cart-colorcircle"></div>
            <span class="cart-itemharga">`+ dp[SKUi]['harga'] / 1000 + ' K' + `</span>
        </div>`

        document.getElementsByClassName('cart-colorcircle')[i].style['background-color'] = JSON.parse(localStorage.bag)[i]['color']
    }



}





function cartremoveitem(cartindex){
    BAG.splice(cartindex, 1)
    localStorage.setItem('bag', JSON.stringify(BAG))
    cartNumbers()

}



cartNumbers()



window.onscroll=function(){
    for(let i = 0; i<document.getElementsByClassName('menu-cont').length; i++ ){
        if(window.pageYOffset>60){
            document.getElementsByClassName('menu-cont')[i].style['height'] = '22px'
        }
        else{
            document.getElementsByClassName('menu-cont')[i].style['height'] = '44px'
        }
    }
    
 }



 document.getElementsByClassName('sosmed')[0].href = 'https://youtu.be/6BJCf_ObwyU'


