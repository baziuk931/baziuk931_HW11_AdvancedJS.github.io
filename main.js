async function getRandomChinese(length) {
    let result = '';
    let i = 0;
    while (i < length) {
        let date = Date.now();
        let sign = String(date).slice(-5);
        let iResult = String.fromCharCode(sign);
        console.log(iResult);
        result += iResult;
        await delay(300);
        i++;
    }
    return result;
}

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

getRandomChinese(4).then((value) => {
    document.writeln(value);
});