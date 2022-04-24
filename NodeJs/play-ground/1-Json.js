// 18.Storing Data with Json
// const obj = {
//     name:"hello world",
//     age:998
// }
// const stringify = JSON.stringify(obj);
// const parsed = JSON.parse(stringify);
// console.log(stringify); //{"name":"hello world","age":998}
// console.log(parsed); //{ name: 'hello world', age: 998 }
// console.log(parsed.name); //hello world

// const fs = require('fs');
// const geography = {
//     name:"Andrew",
//     planet:"Earth",
//     age:27
// }
// const stringify_data = JSON.stringify(geography);
// fs.writeFileSync('1-Json.json',stringify_data);

// const buffer_ata = fs.readFileSync('1-Json.json');
// const result_stringify_data = buffer_ata.toString();
// const result_parsed_data = JSON.parse(result_stringify_data);
// console.log(result_parsed_data.name);
// console.log(result_parsed_data.planet);
// console.log(result_parsed_data.age);

// //task:change the age and name property using your info
// result_parsed_data.name = "vignesh";
// result_parsed_data.age = 23;

// const stringify_data2 = JSON.stringify(result_parsed_data);
// fs.writeFileSync('1-Json.json',stringify_data2);


