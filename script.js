// string methods
// array methods
// math methods




function backgroundClr(){
    x=Math.random()*1000000
    y=Math.floor(x)
    if (y<100000){
        y+=100000
    }
    console.log(`otp is ${y}`)
    document.body.style.backgroundColor=`#${y}`
    document.getElementById("otp").innerText=y
    // document.getElementById("otp").style.color=`#${z}`
    document.getElementById("otp").style.color="white"

}