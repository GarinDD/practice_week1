const obj = {
    name : `asd`,
    age: 20,
    surename : undefined
}

const arr = [`name`, `age`]

obj[`name`] == obj.name

obj[`surname`]

console.log(`surname` in obj)

console.log(`surename1` in obj)


for (let el of arr) {
    console.log(el, obj[el])
}