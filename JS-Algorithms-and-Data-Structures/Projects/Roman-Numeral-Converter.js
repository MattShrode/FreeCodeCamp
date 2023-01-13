function convertToRoman(num) {
  let romanNum = "";
  while (num >= 1000) {
    romanNum += "M";
    num -= 1000;
  }
  if (num >= 100 && num < 1000) {
    switch (Math.floor(num / 100)) {
      case 1:
        romanNum += "C";
        num -= 100;
        break;
      case 2:
        romanNum += "CC";
        num -= 200;
        break;
      case 3:
        romanNum += "CCC";
        num -= 300;
        break;
      case 4:
        romanNum += "CD";
        num -= 400;
        break;
      case 5:
        romanNum += "D";
        num -= 500;
        break;
      case 6:
        romanNum += "DC";
        num -= 600;
        break;
      case 7:
        romanNum += "DCC";
        num -= 700;
        break;
      case 8:
        romanNum += "DCCC";
        num -= 800;
        break;
      case 9:
        romanNum += "CM";
        num -= 900;
        break;
    }
  }
  if (num >= 10 && num < 100) {
    switch (Math.floor(num / 10)) {
      case 1:
        romanNum += "X";
        num -= 10;
        break;
      case 2:
        romanNum += "XX";
        num -= 20;
        break;
      case 3:
        romanNum += "XXX";
        num -= 30;
        break;
      case 4:
        romanNum += "XL";
        num -= 40;
        break;
      case 5:
        romanNum += "L";
        num -= 50;
        break;
      case 6:
        romanNum += "LX";
        num -= 60;
        break;
      case 7:
        romanNum += "LXX";
        num -= 70;
        break;
      case 8:
        romanNum += "LXXX";
        num -= 80;
        break;
      case 9:
        romanNum += "XC";
        num -= 90;
        break;
    }
  }
  if (num >= 1 && num < 10) {
    switch (num) {
      case 1:
        romanNum += "I";
        num -= 1;
        break;
      case 2:
        romanNum += "II";
        num -= 2;
        break;
      case 3:
        romanNum += "III";
        num -= 3;
        break;
      case 4:
        romanNum += "IV";
        num -= 4;
        break;
      case 5:
        romanNum += "V";
        num -= 5;
        break;
      case 6:
        romanNum += "VI";
        num -= 6;
        break;
      case 7:
        romanNum += "VII";
        num -= 7;
        break;
      case 8:
        romanNum += "VIII";
        num -= 8;
        break;
      case 9:
        romanNum += "IX";
        num -= 9;
        break;
    }
  }
  return romanNum;
}

convertToRoman(10);
