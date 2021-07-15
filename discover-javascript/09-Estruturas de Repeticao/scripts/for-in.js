// for...in

let person = {
    name: 'Jhon',
    age: 30,
    weight: 99.4
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}