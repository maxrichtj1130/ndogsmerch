
var gbr = document.getElementsByClassName('gbr')
var gbrcont = document.getElementsByClassName('gambar-cont')
var idx = document.getElementById('index').innerHTML
var color_arr = ['white', 'black', 'skyblue', 'chocolate', 'yellowgreen']
var selclr, selsize = ''

var S = document.getElementsByClassName('ssizeS')
var M = document.getElementsByClassName('ssizeM')
var L = document.getElementsByClassName('ssizeL')
var X = document.getElementsByClassName('ssizeXL')

var clr1 = document.getElementsByClassName('scolor1')
var clr2 = document.getElementsByClassName('scolor2')
var clr3 = document.getElementsByClassName('scolor3')
var clr4 = document.getElementsByClassName('scolor4')
var clr5 = document.getElementsByClassName('scolor5')

var A = document.getElementsByClassName('bag-btn')



for (let i = 0; i < 5; i++) {
    gbr[i].src = dp[idx]['gambarproduk'] + ' ' + color_arr[i] + '.webp'

}

document.getElementsByClassName('namaproduk')[0].innerHTML = dp[idx]['namaproduk']
document.getElementsByClassName('harga')[0].innerHTML = dp[idx]['harga']/1000+' K'
document.getElementsByClassName('descisi')[0].innerHTML = dp[idx]['desc']

S[0].addEventListener('click', e => {

    selsize = 'S'

    S[0].style['background-color'] = 'var(--secondary)'
    M[0].style['background-color'] = ''
    L[0].style['background-color'] = ''
    X[0].style['background-color'] = ''
    S[0].style['color'] = 'var(--primary)'
    M[0].style['color'] = 'var(--secondary)'
    L[0].style['color'] = 'var(--secondary)'
    X[0].style['color'] = 'var(--secondary)'
})
M[0].addEventListener('click', e => {

    selsize = 'M'

    S[0].style['background-color'] = ''
    M[0].style['background-color'] = 'var(--secondary)'
    L[0].style['background-color'] = ''
    X[0].style['background-color'] = ''
    M[0].style['color'] = 'var(--primary)'
    S[0].style['color'] = 'var(--secondary)'
    L[0].style['color'] = 'var(--secondary)'
    X[0].style['color'] = 'var(--secondary)'

})
L[0].addEventListener('click', e => {

    selsize = 'L'


    S[0].style['background-color'] = ''
    M[0].style['background-color'] = ''
    L[0].style['background-color'] = 'var(--secondary)'
    X[0].style['background-color'] = ''
    L[0].style['color'] = 'var(--primary)'
    M[0].style['color'] = 'var(--secondary)'
    S[0].style['color'] = 'var(--secondary)'
    X[0].style['color'] = 'var(--secondary)'
})
X[0].addEventListener('click', e => {

    selsize = 'XL'

    S[0].style['background-color'] = ''
    M[0].style['background-color'] = ''
    L[0].style['background-color'] = ''
    X[0].style['background-color'] = 'var(--secondary)'
    X[0].style['color'] = 'var(--primary)'
    M[0].style['color'] = 'var(--secondary)'
    L[0].style['color'] = 'var(--secondary)'
    S[0].style['color'] = 'var(--secondary)'
})

clr1[0].addEventListener('click', e => {
    selclr = 'white'
    clr1[0].style['border'] = '.6vw solid var(--secondary)'
    clr2[0].style['border'] = ''
    clr3[0].style['border'] = ''
    clr4[0].style['border'] = ''
    clr5[0].style['border'] = ''
    gbrcont[0].style['animation'] = 'xxxx 100s infinite'
    gbrcont[0].style['margin-left'] = '0vw'



})
clr2[0].addEventListener('click', e => {
    selclr = 'black'
    clr2[0].style['border'] = '.6vw solid white'
    clr1[0].style['border'] = ''
    clr3[0].style['border'] = ''
    clr4[0].style['border'] = ''
    clr5[0].style['border'] = ''
    gbrcont[0].style['animation'] = 'xxxx 100s infinite'
    gbrcont[0].style['margin-left'] = '-40vw'

})
clr3[0].addEventListener('click', e => {
    selclr = 'skyblue'
    clr3[0].style['border'] = '.6vw solid var(--secondary)'
    clr1[0].style['border'] = ''
    clr2[0].style['border'] = ''
    clr4[0].style['border'] = ''
    clr5[0].style['border'] = ''
    gbrcont[0].style['animation'] = 'xxxx 100s infinite'
    gbrcont[0].style['margin-left'] = '-80vw'


})
clr4[0].addEventListener('click', e => {
    selclr = 'chocolate'
    clr4[0].style['border'] = '.6vw solid var(--secondary)'
    clr1[0].style['border'] = ''
    clr3[0].style['border'] = ''
    clr2[0].style['border'] = ''
    clr5[0].style['border'] = ''
    gbrcont[0].style['animation'] = 'xxxx 100s infinite'
    gbrcont[0].style['margin-left'] = '-120vw'


})
clr5[0].addEventListener('click', e => {
    selclr = 'yellowgreen'
    clr5[0].style['border'] = '.6vw solid var(--secondary)'
    clr1[0].style['border'] = ''
    clr3[0].style['border'] = ''
    clr4[0].style['border'] = ''
    clr2[0].style['border'] = ''
    gbrcont[0].style['animation'] = 'xxxx 100s infinite'
    gbrcont[0].style['margin-left'] = '-160vw'

})

A[0].addEventListener('click', e => {
    if(selclr != undefined && selsize != ''){
        BAG.push({ "SKU": idx, "color": selclr, "size": selsize },)
        localStorage.setItem('bag', JSON.stringify(BAG))
        cartNumbers()
        showcart()
    }
    else{
        alert('Pilih warna dan/atau ukuran terlebih dahulu')
    }

})