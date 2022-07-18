const obj = {
    out: {
        in :{
            key: 'value'
        }
    }
};

console.log( obj);
console.log( obj["out"]);
console.log(obj["out"]["in"]);


console.time("시간");

console.error("에러!");
console.trace("Error");

console.table([{name: 'abc', birth:1990},{name:'def',birth:1980}]);

console.dir(obj, {color: true, depth:2 });
console.dir(obj, {color: false, depth:1 });

console.timeEnd("시간");
