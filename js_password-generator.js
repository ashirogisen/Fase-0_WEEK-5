function changeVocals (str) {
    //code di sini
    var arr_change_vocals = ['a', 'b', 'b', 'i', 'j', 'j', 'u', 'v', 'v', 'e', 'f', 'f', 'o', 'p', 'p', 'A', 'B', 'B', 'I', 'J', 'J', 'U', 'V', 'V', 'E', 'F', 'F', 'O', 'P', 'P']
    var arr_str = [];

    for (var i = 0; i < str.length; i++) {
        arr_str.push(str[i]);
    }

    for (var i = 0; i < arr_str.length; i++) {
        for (var j = 0; j < arr_change_vocals.length; j++) {
            if (arr_str[i] === arr_change_vocals[j]) {
                arr_str[i] = arr_change_vocals[j+1];
                break;
            }
        }
    }
    var changeVocals_output = arr_str.join('')
    return changeVocals_output
  }
  
  function reverseWord (str) {
    //code di sini
    var reverse = ''
    for (var i = str.length-1; i >=0; i--) {
        reverse = reverse + str[i];
    }
    return reverse
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var arr_str = [];

    for (var i = 0; i < str.length; i++) {
        arr_str.push(str[i])
    }

    for (var i = 0; i < arr_str.length; i++) {
        if (arr_str[i] === arr_str[i].toUpperCase()) {
            arr_str[i] = arr_str[i].toLowerCase();
        } else if (arr_str[i] === arr_str[i].toLowerCase()) {
            arr_str[i] = arr_str[i].toUpperCase();
        }
    }

    var setLowerUpperCase_output = arr_str.join('')
    return setLowerUpperCase_output
  }
  
  function removeSpaces (str) {
    //code di sini
    var arr_str= []
    for (var i = 0; i < str.length; i++) {
        arr_str.push(str[i]);
    }

    for (var i = 0; i < arr_str.length; i++) {
        if (arr_str[i] === ' ') {
            arr_str.splice(i, 1);
        }
    }

    var removeSpaces_output = arr_str.join('')
    return removeSpaces_output
  }
  
  function passwordGenerator (name) {
    //code di sini
    var cv = changeVocals(name)
    var r = reverseWord(cv)
    var sluc = setLowerUpperCase(r)
    var rs = removeSpaces(sluc)
    
    if (name.length >=5 ) {
        return rs;
    } else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
  }

//   console.log(changeVocals('Sergei Dragunov'));
//   console.log(reverseWord('Sergei Dragunov'));
//   console.log(setLowerUpperCase('Sergei Dragunov'));
//   console.log(removeSpaces('Sergei Dragunov'));
  
  
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'