function add(num1, num2 = 20){
    // if(num2== undefined){
    //     num2 = 0;
    // } eta ager niom a chilo ekhon nocher vabe o kora jai (= 20 ta hosse ES6 er jinis eta backap)
    // num2 = num2 || 0;
    return num1 + num2;
}

const total = add(15 , 1);
console.log(total);