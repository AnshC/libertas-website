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
    document.getElementById("nav-links").style.transform = 'translateX(100%)';
    document.body.style.overflowY = "scroll";
    document.getElementById("nav-links").style.display = 'hidden';
}

function open(){
    state = 1;
    document.getElementById("nav-links").style.transform = 'translateX(0%)';
    document.body.style.overflow = "hidden";    
}

export function clickToggle(){
    if (state === 1 && window.innerWidth < 768){
        close();
    }
    else if (state === 0 && window.innerWidth < 768){
        open();
    }
}