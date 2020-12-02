function changePosition(i, j){
    setTimeout(() => {
        mole.style.backgroundPosition = i + "px " + j + "px";
        console.log(i+" "+j);
        i-=190;
        j=0;
        if(i == -950) return;
        changePosition(i, j);
    }, 100);
}

function secondFunction(i, j) {
    setTimeout(() => {
        mole.style.backgroundPosition = i + "px " + j + "px";
        console.log(i+" "+j);
        i-=190;
        j= -1008;
        if(i == -570) return;
        secondFunction(i, j);
    }, 600);
    // , 500
}

function func() {
    // debugger;
    let mole = document.getElementById('mole');
    mole.className = "moleClass";
    mole.style.backgroundImage = "url(sprites.png)";
    
    changePosition(0, 0);
    secondFunction(0, -1008);
    mole.style.backgroundPosition = "0px 0px";
}