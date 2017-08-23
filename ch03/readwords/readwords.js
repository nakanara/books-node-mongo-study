/**
 * Created by nakanara on 2017-08-21.
 */
var censor = require("../censorify");
console.time("readwords");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad and mad text."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day."));
console.info("info logs");
console.error("console error log");
console.warn("console warn log");
console.timeEnd("readwords");