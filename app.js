var randomValue = "qwertyuioplkjhgfdsazxcvbnm123456789<>?:}{|+_)(*&^%$#@!~/*-+,./';[]\=-`"

function randompasswordgenerate(){
    var RandomPassword='';
    for(var i=0; i<10;i++){
        var randomnum=Math.floor(Math.random()*randomValue.length)
        RandomPassword+=randomValue[randomnum]
        
    }
    
    document.getElementById("passvalue").innerHTML=`<span>${RandomPassword}</span>`
    console.log(RandomPassword)
}
randompasswordgenerate()