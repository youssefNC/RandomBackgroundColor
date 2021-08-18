


let r = 0, g = 0, b = 0;

// create hexcolor array
let arr = ["a", "b", "c", "d", "e", "f"];
let redArr = [];
let counter = 0;

for (let x = 0; x <= 9; x++) {

    for (let y = 0; y <= 9; y++){
        // console.log(`${x}${y}`);
        redArr[counter++] = `${x}${y}`;
    }

    for (let z = 0; z < arr.length; z++){
        // console.log(`${x}${arr[z]}`);
        redArr[counter++] = `${x}${arr[z]}`;
    }
}

for (let a = 0; a < arr.length; a++){

    for (let b = 0; b <= 9; b++){
        // console.log(`${arr[a]}${b}`);
        redArr[counter++] = `${arr[a]}${b}`;
    }

    for (let c = 0; c < arr.length; c++){
        if (a < arr.length){
            // console.log(`${arr[a]}${arr[c]}`);
            redArr[counter++] = `${arr[a]}${arr[c]}`;
        }       
    }

}

// console.log(redArr)
// console.log(redArr.length)




function changeColor() {
    // random numbers between 0 to 255
    r = Math.floor((Math.random(r) * 255) + 1);
    g = Math.floor((Math.random(g) * 255) + 1);
    b = Math.floor((Math.random(b) * 255) + 1);

    /* 
    add rgb variable
    rgb = rgb(r, g, b)
    "r" and "g" and "b" is a random numbers 
    */
    let rgb = `rgb(${r}, ${g}, ${b})`;
    let hex = `#${redArr[r]}${redArr[g]}${redArr[b]}`;

    // change background color
    document.getElementById("bg").style.background = rgb;


    // set rgb value to input
    document.getElementById("rgb").value = rgb;
    // add color to input
    // document.getElementById("rgb").style.color = rgb;

    // hex color code
    document.getElementById("hex").value = hex;
    // backgound hexColor
    document.getElementById("hexColor").innerHTML = `Hex: ${hex}`;
    document.getElementById("hexColor").style.background = hex;

    

    if (r.toString().length == 2){
        r = `0${r}`;
    } else if (r.toString().length == 1){
        r = `00${r}`;
    }
    document.getElementById("red").innerHTML = `Red: ${r.toString()}`;
    document.getElementById("red").style.background = `rgb(${r},0,0)`;

    if (g.toString().length == 2){
        g = `0${g}`;
    } else if (g.toString().length == 1){
        g = `00${g}`;
    }
    document.getElementById("green").innerHTML = `Green: ${g.toString()}`;
    document.getElementById("green").style.background = `rgb(0,${g},0)`;

    if (b.toString().length == 2){
        b = `0${b}`;
    } else if (b.toString().length == 1){
        b = `00${b}`;
    }
    document.getElementById("blue").innerHTML = `Blue: ${b.toString()}`;
    document.getElementById("blue").style.background = `rgb(0,0,${b})`;

    

}

function copyRgb() {
    // select text 
    document.getElementById("rgb").select();
    // copy the text
    document.execCommand("copy");
    
    
}

function copyHex() {
    // select text 
    document.getElementById("hex").select();
    // copy the text
    document.execCommand("copy");
    
    
}




