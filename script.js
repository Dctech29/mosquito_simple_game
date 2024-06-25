let mosquito = document.getElementById("mosquito");
let totalcount = 0;
let maxScore = 0;
let isGameStarted = false;
let func_started = false;

function startGame() {
    if (!func_started) {
        func_started = true
        totalcount = 0;
        document.querySelector(".liveScore").innerHTML = 0;
        document.querySelector(".mosquito").style.display = "block"
        let time = setInterval(() => {
            let h = Math.floor(Math.random() * 500 + 1);
            let w = Math.floor(Math.random() * 500 + 1);
            mosquito.style.top = `${h}px`;
            mosquito.style.left = `${w}px`;
            document.querySelector("#maxhit").innerHTML = maxScore;
        }, 1000)
        setTimeout(() => {
            clearInterval(time);
            if (maxScore < totalcount) {
                maxScore = totalcount;
            }
            document.querySelector(".mosquito").style.display = "none"
            func_started = false;
        }, 10000)
        isGameStarted = true;
    }
}

function hitMosquito() {
    if (isGameStarted) {
        totalcount++;
        document.querySelector(".liveScore").innerHTML = totalcount;
        if (maxScore < totalcount) {
            maxScore = totalcount
        }
    }
}