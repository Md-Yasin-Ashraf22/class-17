// mathmatical operation

// sum

function sum(num1 , num2) {
    document.write(num1 + num2 + '<br>' + '<br>')
}

sum(100,200)
sum(500,1000)

function subtraction(num1 , num2) {
    document.write(num1 - num2 + '<br>' + '<br>')
}

subtraction(100 ,1)
subtraction(50 , 70)


function multiply(num1 , num2) {
    document.write(num1 * num2 + '<br>' + '<br>')
}

multiply(100 , 28)
multiply(16 , 4)

function division(num1 , num2) {
    document.write(num1 / num2 + '<br>' + '<br>')
}


division(40 , 20)
division(50 , 60)

function modulous(num1 , num2) {
    document.write(num1 % num2 + '<br>' + '<br>')
}


modulous(40 , 40)
modulous(70 , 80)

function power(num1 , num2 ) {
    document.write(num1 ** num2 +'<br>' + '<br>')
}

power(2 , 3)
power(3 , 3)

// students list create with array & for loop


var arr = ['Yasin' ,'Ashraf' , "Masud" , "Hero Alom" , 'Messi' , 'Ronaldo' , 'Sokina' , 'Jorina' , 'Telipotti' , 'Salam Vai']
for (var i=1;i <=10;i++) {
    document.write(arr).innerHTML = arr.toString();  
}

// select option create with function

function generateOption(selector,minValue, maxValue) {
    var jsSelector = document.getElementById(selector);
    
  
    for (var i = minValue; i <= maxValue; i++) {
      var option = document.createElement(option);
      var optionText = document.createTextNode(i);
  
      option.appendChild(optionText);
      jsSelector.appendChild(option);
    }
  }


  
  generateOption('day',1,31)
  generateOption('month',1,12)
  generateOption('year',2022, 2050)