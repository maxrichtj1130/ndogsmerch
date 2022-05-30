var sectcont = document.getElementsByClassName('sect-cont')

for(let i = 0; i < 4; i++){
    sectcont[0].innerHTML += `
    <div class="sect">
    <img class="gbrproduk" src="`+dp[i]['gbrproduk']+' white.webp'+`">
      <img class="gbrproduk" src="`+dp[i]['gbrproduk']+' black.webp'+`">
      <img class="gbrproduk" src="`+dp[i]['gbrproduk']+' skyblue.webp'+`">
      <img class="gbrproduk" src="`+dp[i]['gbrproduk']+' chocolate.webp'+`">
      <img class="gbrproduk" src="`+dp[i]['gbrproduk']+' yellowgreen.webp'+`">
  </div>`
}

sectcont[0].innerHTML += `
<div class="sect">
<img class="gbrproduk" src="`+dp[0]['gbrproduk']+' white.webp'+`">
  <img class="gbrproduk" src="`+dp[0]['gbrproduk']+' black.webp'+`">
  <img class="gbrproduk" src="`+dp[0]['gbrproduk']+' skyblue.webp'+`">
  <img class="gbrproduk" src="`+dp[0]['gbrproduk']+' chocolate.webp'+`">
  <img class="gbrproduk" src="`+dp[0]['gbrproduk']+' yellowgreen.webp'+`">
</div>`
