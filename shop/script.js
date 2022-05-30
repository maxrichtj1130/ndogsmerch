//const dp = [{"SKU":0,"namaproduk":"ceplogs original t-shirt","desc":"","harga":169000,"gbrproduk":"https://www.maxrichardo.com/ndogs/images/gbrproduk/ceplog original"},{"SKU":1,"namaproduk":"ceplogs original hoodie","desc":"","harga":199000,"gbrproduk":"https://www.maxrichardo.com/ndogs/images/gbrproduk/ceplogs original"},{"SKU":2,"namaproduk":"ceplogs vector t-shirt","desc":"","harga":169000,"gbrproduk":"https://www.maxrichardo.com/ndogs/images/gbrproduk/ceplog vector"},{"SKU":3,"namaproduk":"ceplogs vector hoodies","desc":"","harga":199000,"gbrproduk":"https://www.maxrichardo.com/ndogs/images/gbrproduk/ceplogs vector"},{"SKU":4,"namaproduk":"godogs boiled egg levels t-shirt","desc":"","harga":169000,"gbrproduk":"https://www.maxrichardo.com/ndogs/images/gbrproduk/godog minutes"}]


var jenis
var selsize = ['', '', '', '', '', '', '', '', '', ''];
var selclr = ['', '', '', '', '', '', '', '', '', ''];



var A = document.getElementsByClassName('addtocart')
var B = document.getElementsByClassName('itembot')
var S = document.getElementsByClassName('ssizeS')
var M = document.getElementsByClassName('ssizeM')
var L = document.getElementsByClassName('ssizeL')
var X = document.getElementsByClassName('ssizeXL')
var C = document.getElementsByClassName('cancel')
var N = document.getElementsByClassName('N1')
var N2 = document.getElementsByClassName('N2')
var lf = document.getElementsByClassName('layerfinal')
var layer3 = document.getElementsByClassName('layer3')



var clr1 = document.getElementsByClassName('scolor1')
var clr2 = document.getElementsByClassName('scolor2')
var clr3 = document.getElementsByClassName('scolor3')
var clr4 = document.getElementsByClassName('scolor4')
var clr5 = document.getElementsByClassName('scolor5')


var finalselsize = document.getElementsByClassName('finalselsize')
var finalselclr = document.getElementsByClassName('finalselclr')

var gc = document.getElementsByClassName('grid-container')



for (let i = 0; i < dp.length; i++) {


  //var items_namaproduk = dp[i]['namaproduk']
  gc[0].innerHTML += `<div class="griditem">
    <a href="`+'../product/'+i+'.html'+`" class="gbrproduk-container">
      <img class="gbrproduk" src="`+dp[i]['gbrproduk']+' white.webp'+`">
      <img class="gbrproduk" src="`+dp[i]['gbrproduk']+' black.webp'+`">
      <img class="gbrproduk" src="`+dp[i]['gbrproduk']+' skyblue.webp'+`">
      <img class="gbrproduk" src="`+dp[i]['gbrproduk']+' chocolate.webp'+`">
      <img class="gbrproduk" src="`+dp[i]['gbrproduk']+' yellowgreen.webp'+`">
    </a>
    <div class="itembot itembothov">
      <a href="#/" class="N1">>></a>
      <a class="cancel" href="#/">CANCEL</a>
      <div class="layer1">
        <h3 class="itemjudul">`+dp[i]['namaproduk']+`</h3>
        <span class="harga">`+dp[i]['harga']/1000+' K'+`</span>
      </div>
      <div class="layer2">
        <span class="ssz">Select Size :</span><br>
          <div class="ssize-cont">
            <a class="ssizeS" href="#/">S</a>
            <a class="ssizeM" href="#/">M</a>
            <a class="ssizeL" href="#/">L</a>
            <a class="ssizeXL" href="#/">XL</a>
          </div>
      </div>
      <div class="layer3">
        <span class="ssz">Select Color :</span><br>
          <div class="scolor-cont">
            <a class="scolor scolor1" href="#/">.</a>
            <a class="scolor scolor2" href="#/">.</a>
            <a class="scolor scolor3" href="#/">.</a>
            <a class="scolor scolor4" href="#/">.</a>
            <a class="scolor scolor5" href="#/">.</a>
          </div>
          <a href="#/" class="N2">>></a>


      </div>
      <div class="layerfinal-container">
        <div class="layerfinal">
          <div class="finalsize">Size
            <div class="finalselsize"></div>
          </div>
          <div class="finalclr">Color
            <div class="finalselclr"></div>
          </div>
          <a class="addtocart" "href="#/">
          <div class="marquee">
            <div class="mi">ADD TO BAG ADD TO BAG</div>
          </div>
        </a>

      </div>
    </div>


  </div>





</div > `
  //document.getElementsByClassName('gbrproduk')[i].src = dp[i]['gbrproduk']+' white.webp'
  

}

//item catalog di shop
for (let i = 0; i < dp.length; i++) {










  N2[i].addEventListener('click', e => {
    lf[i].style['margin-top'] = '0vw'
    lf[i].style['-webkit-margin-before'] = '.7vw'
    lf[i].style['visibility'] = 'visible'
    C[i].style['margin-left'] = '43vw'
    C[i].style['margin-bottom'] = '-4vw'
  })


  clr1[i].addEventListener('click', e => {
    selclr[i] = 'white'
    finalselclr[i].style['background-color'] = selclr[i]
    C[i].style['visibility'] = 'visible'
    N2[i].style['visibility'] = 'visible'
    clr1[i].style['border'] = '.3vw solid var(--secondary)'
    clr1[i].style['padding'] = '.28vw .65vw'
    clr2[i].style['border'] = ''
    clr3[i].style['border'] = ''
    clr4[i].style['border'] = ''
    clr5[i].style['border'] = ''
    document.getElementsByClassName('gbrproduk-container')[i].style['margin-left'] = '88vw'

  })
  clr2[i].addEventListener('click', e => {
    selclr[i] = 'black'
    finalselclr[i].style['background-color'] = selclr[i]
    C[i].style['visibility'] = 'visible'
    N2[i].style['visibility'] = 'visible'
    clr2[i].style['border'] = '.3vw solid white'
    clr2[i].style['padding'] = '.28vw .65vw'
    clr1[i].style['border'] = ''
    clr3[i].style['border'] = ''
    clr4[i].style['border'] = ''
    clr5[i].style['border'] = ''
    document.getElementsByClassName('gbrproduk-container')[i].style['margin-left'] = '44vw'

  })
  clr3[i].addEventListener('click', e => {
    selclr[i] = 'skyblue'
    finalselclr[i].style['background-color'] = selclr[i]
    C[i].style['visibility'] = 'visible'
    N2[i].style['visibility'] = 'visible'
    clr3[i].style['border'] = '.3vw solid var(--secondary)'
    clr3[i].style['padding'] = '.28vw .65vw'
    clr1[i].style['border'] = ''
    clr2[i].style['border'] = ''
    clr4[i].style['border'] = ''
    clr5[i].style['border'] = ''
    document.getElementsByClassName('gbrproduk-container')[i].style['margin-left'] = '0vw'

  })
  clr4[i].addEventListener('click', e => {
    selclr[i] = 'chocolate'
    finalselclr[i].style['background-color'] = selclr[i]
    C[i].style['visibility'] = 'visible'
    N2[i].style['visibility'] = 'visible'
    clr4[i].style['border'] = '.3vw solid var(--secondary)'
    clr4[i].style['padding'] = '.28vw .65vw'
    clr1[i].style['border'] = ''
    clr3[i].style['border'] = ''
    clr2[i].style['border'] = ''
    clr5[i].style['border'] = ''
    document.getElementsByClassName('gbrproduk-container')[i].style['margin-left'] = '-44vw'

  })
  clr5[i].addEventListener('click', e => {
    selclr[i] = 'yellowgreen'
    finalselclr[i].style['background-color'] = selclr[i]
    C[i].style['visibility'] = 'visible'
    N2[i].style['visibility'] = 'visible'
    clr5[i].style['border'] = '.3vw solid var(--secondary)'
    clr5[i].style['padding'] = '.28vw .65vw'
    clr1[i].style['border'] = ''
    clr3[i].style['border'] = ''
    clr4[i].style['border'] = ''
    clr2[i].style['border'] = ''
    document.getElementsByClassName('gbrproduk-container')[i].style['margin-left'] = '-88vw'

  })








  N[i].addEventListener('click', e => {
    C[i].style['margin-left'] = '51vw'
    B[i].style['margin-right'] = '57vw'
    B[i].classList.remove('itembothov')
    N[i].style['visibility'] = 'hidden'
    C[i].style['visibility'] = 'hidden'

    setTimeout(function () {
      layer3[i].style['visibility'] = 'visible'
    }, 250)

  })

  function cancelselection() {
    document.getElementsByClassName('gbrproduk-container')[i].style['margin-left'] = '88vw'
    lf[i].style['margin-top'] = '12vw'
    lf[i].style['-webkit-margin-before'] = '11vw'
    lf[i].style['visibility'] = 'hidden'
    B[i].style['margin-right'] = '-21vw'
    C[i].style['visibility'] = 'hidden'
    C[i].style['margin-bottom'] = '3vw'
    N[i].style['visibility'] = 'hidden'
    N2[i].style['visibility'] = 'hidden'
    S[i].style['background-color'] = ''
    M[i].style['background-color'] = ''
    L[i].style['background-color'] = ''
    X[i].style['background-color'] = ''
    S[i].style['color'] = 'var(--secondary)'
    M[i].style['color'] = 'var(--secondary)'
    L[i].style['color'] = 'var(--secondary)'
    X[i].style['color'] = 'var(--secondary)'
    clr5[i].style['border'] = ''
    clr1[i].style['border'] = ''
    clr3[i].style['border'] = ''
    clr4[i].style['border'] = ''
    clr2[i].style['border'] = ''
    layer3[i].style['visibility'] = 'hidden'
    C[i].style['margin-left'] = '30vw'
    setTimeout(function () {
      B[i].classList.add('itembothov')
    }, 696)
  }


  C[i].addEventListener('click', e => {
    cancelselection()

  })




  S[i].addEventListener('click', e => {

    selsize[i] = 'S'
    finalselsize[i].innerHTML = selsize[i]
    B[i].style['margin-right'] = '18vw'
    C[i].style['visibility'] = 'visible'
    N[i].style['visibility'] = 'visible'
    S[i].style['background-color'] = 'var(--secondary)'
    M[i].style['background-color'] = ''
    L[i].style['background-color'] = ''
    X[i].style['background-color'] = ''
    S[i].style['color'] = 'var(--primary)'
    M[i].style['color'] = 'var(--secondary)'
    L[i].style['color'] = 'var(--secondary)'
    X[i].style['color'] = 'var(--secondary)'
  })
  M[i].addEventListener('click', e => {

    selsize[i] = 'M'
    finalselsize[i].innerHTML = selsize[i]
    B[i].style['margin-right'] = '18vw'
    C[i].style['visibility'] = 'visible'
    N[i].style['visibility'] = 'visible'
    S[i].style['background-color'] = ''
    M[i].style['background-color'] = 'var(--secondary)'
    L[i].style['background-color'] = ''
    X[i].style['background-color'] = ''
    M[i].style['color'] = 'var(--primary)'
    S[i].style['color'] = 'var(--secondary)'
    L[i].style['color'] = 'var(--secondary)'
    X[i].style['color'] = 'var(--secondary)'

  })
  L[i].addEventListener('click', e => {

    selsize[i] = 'L'
    finalselsize[i].innerHTML = selsize[i]
    B[i].style['margin-right'] = '18vw'
    C[i].style['visibility'] = 'visible'
    N[i].style['visibility'] = 'visible'
    S[i].style['background-color'] = ''
    M[i].style['background-color'] = ''
    L[i].style['background-color'] = 'var(--secondary)'
    X[i].style['background-color'] = ''
    L[i].style['color'] = 'var(--primary)'
    M[i].style['color'] = 'var(--secondary)'
    S[i].style['color'] = 'var(--secondary)'
    X[i].style['color'] = 'var(--secondary)'
  })
  X[i].addEventListener('click', e => {

    selsize[i] = 'XL'
    finalselsize[i].innerHTML = selsize[i]
    B[i].style['margin-right'] = '18vw'
    C[i].style['visibility'] = 'visible'
    N[i].style['visibility'] = 'visible'
    S[i].style['background-color'] = ''
    M[i].style['background-color'] = ''
    L[i].style['background-color'] = ''
    X[i].style['background-color'] = 'var(--secondary)'
    X[i].style['color'] = 'var(--primary)'
    M[i].style['color'] = 'var(--secondary)'
    L[i].style['color'] = 'var(--secondary)'
    S[i].style['color'] = 'var(--secondary)'
  })


  A[i].addEventListener('click', e => {
    BAG.push({ "SKU": i, "color": selclr[i], "size": selsize[i] },)
    localStorage.setItem('bag', JSON.stringify(BAG))
    cartNumbers()
    cancelselection()
    showcart()
  })

}


console.log(BAG)


