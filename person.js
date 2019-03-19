

const sayHello = name =>
    console.log(`Hi, ${name}!`);


const getOlder = age => { return age + 50 , console.log(age)
};







const multiply = (num1=5, num2=5) => console.log(num1 * num2);


const subtractFive = (num=10) => {
    const diff = 5 - num;
    console.log(diff)
};


const printName = name => {
    console.log(name)
}


module.exports = {
    sayHello: sayHello,
    getOlder: getOlder,
    subtractFive : subtractFive,
    multiply : multiply


};