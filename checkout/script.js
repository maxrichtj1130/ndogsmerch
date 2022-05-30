if (localStorage.orderan == null) {
    localStorage.setItem('orderan', '[]')
}

var provdata
document.getElementsByClassName('totalangka')[0].innerHTML = hitungsubtotal().toLocaleString('id-ID')
const capitalize = (phrase) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};


async function loadprovinsi() {
    const provresponse = await fetch('https://raw.githubusercontent.com/ibnux/data-indonesia/master/propinsi.json');
    provdata = await provresponse.json();
    for (let i = 0; i < provdata.length; i++) {
        var newOption = document.createElement('option')
        newOption.value = provdata[i]['id']
        newOption.text = capitalize(provdata[i]['nama'].toLowerCase())
        document.getElementById('provinsi').appendChild(newOption)
    }


}
loadprovinsi()
var shipping = ''
var provsel = document.getElementById('provinsi')
var hargaship = 0
hargaship = hargaship = 33 + Math.floor((JSON.parse(localStorage.bag).length) / 3) * 10

document.getElementById('provinsi').onchange = function (e) {
    if (provsel.value == '31' ||
        provsel.value == '32' ||
        provsel.value == '33' ||
        provsel.value == '34' ||
        provsel.value == '35' ||
        provsel.value == '36') {
        hargaship = 20 + Math.floor((JSON.parse(localStorage.bag).length) / 3) * 8

    }
    else {
        hargaship = 33 + Math.floor((JSON.parse(localStorage.bag).length) / 3) * 10
    }

    if (shipping != '') {
        tampiltotal()
        document.getElementsByClassName('shipfee-angka')[0].innerHTML = hargaship + '.000'
    }

}




var shipbtn = document.getElementsByClassName('ship')

for (let i = 0; i < 3; i++) {
    shipbtn[i].addEventListener('click', e => {
        shipbtn[0].style['background-color'] = ''
        shipbtn[1].style['background-color'] = ''
        shipbtn[2].style['background-color'] = ''
        shipbtn[0].style['color'] = 'var(--secondary)'
        shipbtn[1].style['color'] = 'var(--secondary)'
        shipbtn[2].style['color'] = 'var(--secondary)'
        shipping = shipbtn[i].innerHTML
        shipbtn[i].style['background-color'] = 'var(--secondary)'
        shipbtn[i].style['color'] = 'var(--primary)'
        document.getElementsByClassName('shipfee-angka')[0].innerHTML = hargaship + '.000'
        if (shipping != '') {
            tampiltotal()
        }
    })
}

function scrolltop() {
    window.scrollTo(0, 133)
}

function validateMyForm() {

    if (JSON.parse(localStorage.bag).length == 0) {
        alert("Keranjang kosong!");
        return false;
    }
    else if (shipping == '') {
        alert("Pilih pengiriman");
        return false;
    }

    else if (confirm('Apakah anda yakin pemesanan sudah benar?')) {
        MAKEORDER();
        return true
    }
    else {
        return false
    }

}

var diskon = 0


document.getElementsByClassName('couponyes')[0].addEventListener('click', e => {
    if (document.getElementById('coupon').value == 'maxganteng') {
        diskon = 0.1 * hitungsubtotal()
        document.getElementById('coupon-hasil').innerHTML = '-IDR ' + diskon.toLocaleString('id-ID')
        alert('coupon berhasil')
        if (shipping != '') {
            tampiltotal()
        }
    }
})



function tampiltotal() {
    document.getElementsByClassName('totalangka')[0].innerHTML = (hitungsubtotal() + hargaship * 1000 - diskon).toLocaleString('id-ID')
}


document.getElementById('paymethod').onchange = function (e) {
    if (document.getElementById('paymethod').value == 'BCA') {
        document.getElementById('norek').innerHTML = '1234567890 a.n. Max'
    }
    if (document.getElementById('paymethod').value == 'Mandiri') {
        document.getElementById('norek').innerHTML = '0987654321123 a.n. Max'
    }

}

function toUnicodeVariant(str, variant, flags) {
    const offsets = {
        m: [0x1d670, 0x1d7f6],
        b: [0x1d400, 0x1d7ce],
        i: [0x1d434, 0x00030],
        bi: [0x1d468, 0x00030],
        c: [0x1d49c, 0x00030],
        bc: [0x1d4d0, 0x00030],
        g: [0x1d504, 0x00030],
        d: [0x1d538, 0x1d7d8],
        bg: [0x1d56c, 0x00030],
        s: [0x1d5a0, 0x1d7e2],
        bs: [0x1d5d4, 0x1d7ec],
        is: [0x1d608, 0x00030],
        bis: [0x1d63c, 0x00030],
        o: [0x24B6, 0x2460],
        p: [0x249C, 0x2474],
        w: [0xff21, 0xff10],
        u: [0x2090, 0xff10]
    }

    const variantOffsets = {
        'monospace': 'm',
        'bold': 'b',
        'italic': 'i',
        'bold italic': 'bi',
        'script': 'c',
        'bold script': 'bc',
        'gothic': 'g',
        'gothic bold': 'bg',
        'doublestruck': 'd',
        'sans': 's',
        'bold sans': 'bs',
        'italic sans': 'is',
        'bold italic sans': 'bis',
        'parenthesis': 'p',
        'circled': 'o',
        'fullwidth': 'w'
    }

    // special characters (absolute values)
    var special = {
        m: {
            ' ': 0x2000,
            '-': 0x2013
        },
        i: {
            'h': 0x210e
        },
        g: {
            'C': 0x212d,
            'H': 0x210c,
            'I': 0x2111,
            'R': 0x211c,
            'Z': 0x2128
        },
        o: {
            '0': 0x24EA,
            '1': 0x2460,
            '2': 0x2461,
            '3': 0x2462,
            '4': 0x2463,
            '5': 0x2464,
            '6': 0x2465,
            '7': 0x2466,
            '8': 0x2467,
            '9': 0x2468,
        },
        p: {},
        w: {}
    }
    //support for parenthesized latin letters small cases 
    for (var i = 97; i <= 122; i++) {
        special.p[String.fromCharCode(i)] = 0x249C + (i - 97)
    }
    //support for full width latin letters small cases 
    for (var i = 97; i <= 122; i++) {
        special.w[String.fromCharCode(i)] = 0xff41 + (i - 97)
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';

    var getType = function (variant) {
        if (variantOffsets[variant]) return variantOffsets[variant]
        if (offsets[variant]) return variant;
        return 'm'; //monospace as default
    }
    var getFlag = function (flag, flags) {
        if (!flags) return false
        return flags.split(',').indexOf(flag) > -1
    }

    var type = getType(variant);
    var underline = getFlag('underline', flags);
    var strike = getFlag('strike', flags);
    var result = '';

    for (var k of str) {
        let index
        let c = k
        if (special[type] && special[type][c]) c = String.fromCodePoint(special[type][c])
        if (type && (index = chars.indexOf(c)) > -1) {
            result += String.fromCodePoint(index + offsets[type][0])
        } else if (type && (index = numbers.indexOf(c)) > -1) {
            result += String.fromCodePoint(index + offsets[type][1])
        } else {
            result += c
        }
        if (underline) result += '\u0332' // add combining underline
        if (strike) result += '\u0336' // add combining strike
    }
    return result
}

function MAKEORDER() {
    orderan = JSON.parse(localStorage.orderan)
    let hasilform = {
        'id': Math.floor(Math.random() * 20000) + 10000,
        'status': "Menunggu Pembayaran",
        'firstName': document.getElementById('firstName').value,
        'lastName': document.getElementById('lastName').value,
        'email': document.getElementById('email').value,
        'alamat': document.getElementById('alamat').value,
        'negara': document.getElementById('negara').value,
        'provinsi': document.getElementById('provinsi').value,
        'kotakab': document.getElementById('kotakab').value,
        'kecamatan': document.getElementById('kecamatan').value,
        'desakel': document.getElementById('desa').value,
        'kodepos': document.getElementById('kodepos').value,
        'telepon': document.getElementById('telepon').value,
        'catatan': document.getElementById('catatan').value,
        'orderan': JSON.parse(localStorage.bag),
        'pengiriman': shipping,
        'hargaship': hargaship * 1000,
        'coupon': document.getElementById('coupon').value,
        'diskon': diskon,
        'payment': document.getElementById('paymethod').value,
        'total': hitungsubtotal() + hargaship * 1000 - diskon
    }
    alert('Pesanan telah dibuat!')
    alert('Your order number is : #' + hasilform['id'] + '     (Catat lima angka itu untuk tracking pesanan!)')
    orderan.push(hasilform)
    localStorage.setItem('orderan', JSON.stringify(orderan))
    localStorage.setItem('bag', '[]')
}
