
let num = 0;
let history = [];
let redoHistory = [];

function updateNumber(newNum) {
    num = Math.max(0, Math.min(150, newNum));
    document.getElementById("number").textContent = num;
    const progress = (num / 150) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

function decrement() {
    if (num > 0) {
        history.push(num);
        redoHistory = [];
        updateNumber(num - 1);
    }
}

function increment() {
    if (num < 150) {
        history.push(num);
        redoHistory = [];
        updateNumber(num + 1);
    }
}

function undo() {
    if (history.length > 0) {
        redoHistory.push(num);
        updateNumber(history.pop());
    }
}

function redo() {
    if (redoHistory.length > 0) {
        history.push(num);
        updateNumber(redoHistory.pop());
    }
}
