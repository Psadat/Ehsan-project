// This is my first Project

const myArr = [7, 5, 10, 5, "parisa", 5, 7, 3, 5]

function searchArr(arr,number){
    let flag = 0;
    for( let x of myArr){
        if( x === number){
            flag++
        }
    }
    return flag;
}

console.log(searchArr(myArr,7));