module.exports = function toReadable (number) {
  const objSimple = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }
  const objTeens = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }
  const objTens = {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  let hundreds = (number - number % 100) / 100;
  let tensForTens = number - number % 10;
  let singleNum = number % 10;
  let tensForHundreds = number % 100;
  let res, res2, res3;

  for (const key of Object.keys(objSimple)) {
    if (number === parseInt(key)) {
      res = objSimple[key];
    }
  }
  for (const key of Object.keys(objTeens)) {
    if (number === parseInt(key)) {
      res = objTeens[key];
    }
  }
  for (const key of Object.keys(objTens)) {
    if (number === parseInt(key)) {
      res = objTens[key];
    }
  }
  if (number > 20 && number < 100) {
    res2 = `${objTens[tensForTens]} ${objSimple[singleNum]}`
  }
  if (number >= 100 && number < 1000) {
    if (number % 100 === 0) {
      res3 = `${objSimple[hundreds]} hundred`;
    }
    let secondNum = '';
    for (const key of Object.keys(objTeens)) {
      if (tensForHundreds === parseInt(key)) {
        secondNum = objTeens[key];
      }
    }
    for (const key of Object.keys(objTens)) {
      if (tensForHundreds === parseInt(key)) {
        secondNum = objTens[key];
      }
    }
    if (secondNum !== '') {
      res2 = `${objSimple[hundreds]} hundred ${secondNum}`;
    } else {
      if (tensForHundreds === singleNum) {
        res2 = `${objSimple[hundreds]} hundred ${objSimple[singleNum]}`;
      } else {
        res2 = `${objSimple[hundreds]} hundred ${objTens[tensForHundreds - singleNum]} ${objSimple[singleNum]}`;
      }
    }
  }
  if (res3 !== undefined) {
    return res3;
  } else if (res !== undefined) {
    return res;
  } else {
    return res2;
  }
}
