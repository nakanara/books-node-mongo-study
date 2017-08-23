/**
 * Created by nakanara on 2017-08-21.
 */
function simpleTimeout(consoleTimer) {
    console.timeEnd(consoleTimer);
}

console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeout, 4000, "fiveSecond");
console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");

