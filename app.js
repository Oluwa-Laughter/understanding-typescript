var userInput;
var userName;
userInput = 5;
userInput = "Isaac";
if (typeof userInput === "string") {
    userName = userInput;
    console.log(userName);
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occurred!", 500);
console.log(result);
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: "Hi there!" });
}
console.log(sendRequest("Send this!", function (response) {
    console.log(response);
    return true;
}));
