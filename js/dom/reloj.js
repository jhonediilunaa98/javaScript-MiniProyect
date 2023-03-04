const d = document;

export function digitalClock(clock, btnplay, btnstop){
    let clockTempo;
    d.addEventListener("click", e=>{
        if(e.target.matches(btnplay)){
            clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            },1000);
            e.target.disabled = true;
        }

        if(e.target.matches(btnstop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnplay).disabled = false;
        }

    })
}


export function alarm(){

}