var state = 0;

export function slide(){

    checkState();
    
    function checkState(){
        if(state === 0){
            open();
        }
        else if(state === 1){
            close();
        }
    }
};

function close(){
    state = 0;
    document.body.style.overflowY = "scroll";
    document.getElementById("nav-links").style.opacity = 0;
}

function open(){
    state = 1;
    document.body.style.overflow = "hidden";    
    document.getElementById("nav-links").style.opacity = 1;
}

export function clickToggle(){
    if (state === 1 && window.innerWidth < 768){
        close();
    }
    else if (state === 0 && window.innerWidth < 768){
        open();
    }
}