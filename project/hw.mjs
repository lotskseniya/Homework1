import fs from "fs";

const informationObject = {
	data1: "Hello",
	data2: "World",
	data3: "!"
}

function createTextFile(object) {
    let newArray = Object.values(object).join('').replace("W"," W");
    fs.writeFileSync("HomeWork1.txt", newArray, {encoding: "utf-8"});
}

createTextFile(informationObject);


