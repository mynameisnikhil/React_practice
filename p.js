
let score = 10

function getNewScoreFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            score = score + 5
            resolve(score)
        }, 1000);
    })
}
function getNewScoreFromServer2(score) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            score = score + 10
            resolve(score)
        }, 1000);
    })
}

// what is calllbackhell
// what is then and catch
// what is async await 
// Async await is just syntactic sugar to work with promises in js
async function scoreUpdate() {
    try {
        const ans = await getNewScoreFromServer();
        const ans2 = await getNewScoreFromServer2(ans)
        console.log(ans2);
        console.log("ans2");
        console.log("ans2");
        console.log("ans21111");

        
    } catch (error) {
        console.log(error);
    }
}

scoreUpdate()

 



// JavaScript

// getNewScoreFromServer().then(ans => getNewScoreFromServer2(ans)).then(ans => console.log(ans)).catch(e => console.log(e))


console.log(score)