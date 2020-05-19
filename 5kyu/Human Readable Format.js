// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(d) {
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hOutput = h > 10 ? h : h < 10 ? '0' + h : "00";
    let mOutput = m > 10 ? ":" + m + ":" : m < 10 ? ":0" + m + ":" : ":00:";
    let sOutput = s > 10 ? s : s < 10 ? '0' + s : "00";
    return hOutput + mOutput + sOutput;
}

/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */
