function search(id, fname, lname, email) {
    var source = JSON.parse(localStorage.orderan)
    var results = [];
    var index;
    var entry;

    for (index = 0; index < source.length; ++index) {
        entry = source[index];
        if (entry.id == id &&
            (entry.email == email ||
            entry.firstName == fname ||
            entry.lastName == lname)) {

            results.push(entry);
        }
    }

    return results;
}

var indexdata = []

function TRACK(){
    hasiltrack = search(document.getElementById('trackid').value,
        document.getElementById('fName').value,
        document.getElementById('lName').value,
        document.getElementById('email').value)
    
    if(hasiltrack == 0){
        alert('Data tidak ditemukan')
    }
    else{
        indexdata = hasiltrack
        cartNumbers2()
    }
    

}

function cartNumbers2() {
    document.getElementsByClassName('hasil-cont')[0].style['visibility'] = 'visible'
    document.getElementById('idhasil').innerHTML = indexdata[0].id
    document.getElementById('fnhasil').innerHTML = indexdata[0].firstName + ' '
    document.getElementById('lnhasil').innerHTML = indexdata[0].lastName
    document.getElementById('emailhasil').innerHTML = indexdata[0].email
    document.getElementById('alamathasil').innerHTML = indexdata[0].alamat + ', ' + indexdata[0].kecamatan + ', ' + indexdata[0].kotakab
    document.getElementById('teleponhasil').innerHTML = indexdata[0].telepon
    document.getElementById('paymenthasil').innerHTML = 'Bank ' + indexdata[0].payment
    document.getElementById('catatanhasil').innerHTML = indexdata[0].catatan

    document.getElementById('statushasil').innerHTML = indexdata[0].status
    document.getElementById('shippinghasil').innerHTML = indexdata[0].pengiriman + ' => IDR ' + indexdata[0].hargaship.toLocaleString('id-ID')
    document.getElementById('diskonhasil').innerHTML = 'IDR ' + indexdata[0].diskon.toLocaleString('id-ID')
    document.getElementById('totalhasil').innerHTML = 'IDR ' + indexdata[0].total.toLocaleString('id-ID')


    cartcont[1].innerHTML = ''



    for (let i = 0; i < indexdata[0].orderan.length; i++) {
        var SKUi = indexdata[0].orderan[i]['SKU']
        cartcont[1].innerHTML += `<div class="cartitem">
            <img src="`+ dp[SKUi]['gbrproduk'] + ' ' + indexdata[0].orderan[i]['color'] + '.webp' + `" class="cart-gbrproduk" alt="">
            <span class="cart-namaproduk">`+ dp[SKUi]['namaproduk'] + `</span>
            <span class="cart-size">size : </span>
            <span class="cart-sizecircle">`+ indexdata[0].orderan[i]['size'] + `</span>
            <span class="cart-color">color : </span>
            <div class="cart-colorcircle"></div>
            <span class="cart-itemharga">`+ dp[SKUi]['harga'] / 1000 + ' K' + `</span>
        </div>`

        document.getElementsByClassName('cart-colorcircle')[i + JSON.parse(localStorage.bag).length].style['background-color'] = indexdata[0].orderan[i]['color']
    }



}

