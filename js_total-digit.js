function totalDigitRekursif(angka) {
    // you can only write your code here!
    var str_angka = angka.toString();

    if (str_angka.length === 0) {
      return 0
    } else {
      var sub_str_angka = str_angka.substring(1)
      
      return Number(str_angka[0]) + totalDigitRekursif(sub_str_angka)
    }

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5