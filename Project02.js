
//---------function with if-------------------------//

function mycalc(num01,num02,opa){
    let result = 0;
    if (opa == "+"){
        result = num01+num02;
    }else if (opa == "-"){
        result = num01-num02;
    }else if (opa == "*"){
        result = num01*num02;
    }else if (opa == "/"){
        result = num01/num02;
    }
    else{
        console.log("Operators is not true");
    }
    return result
}
console.log(mycalc(10,2,"-"));

//---------function with swich case-------------------------//

function myCalcu(num01,num02,opa){
    let result = 0;
    switch (opa) {
        case "+" :
            result = num01 + num02;
        break;
        case "-" :
            result = num01 - num02;
        break;
        case "*" :
            result = num01 * num02;
        break;
        case "/" :
            result = num01 / num02;
        break;
        default:
            console.log(opa);
    }
    return result;
}
console.log(myCalcu(10,2,"*"));