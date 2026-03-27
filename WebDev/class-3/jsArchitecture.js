// Link http://latenflip.com/loupe

// async

function callback(){
    console.log("callback called");
}
setTimeout(callback, 1000);
setTimeout(callback, 2000);
setTimeout(callback, 3000);

let a = 0;
for(let i = 0; i<10; i++){
    a = a + 1;
}
console.log(a);


