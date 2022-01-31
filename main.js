const area = document.getElementById("area");
const upper = document.getElementById("upper-case");
const lower = document.getElementById("lower-case");
const proper = document.getElementById("proper-case");
const sentence = document.getElementById("sentence-case");
const saveFile = document.getElementById("save-text-file");

function toUpperFirstChar (word) {
    return word[0].toUpperCase() + word.substring(1);
}

function download (filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

saveFile.addEventListener ("click", function () {
    download("text.txt", area.value);
})

upper.addEventListener ("click", function () {
    area.value = area.value.toUpperCase();
});

lower.addEventListener ("click", function () {
    area.value = area.value.toLowerCase();
});

proper.addEventListener ("click", function () {
    const text = area.value.toLowerCase();
    const splitedText = text.split(" ");

    for (let i = 0; i < splitedText.length; i++) {
        splitedText[i] = toUpperFirstChar(splitedText[i]);
    }

    area.value = splitedText.join(" ");
});

sentence.addEventListener ("click", function () {
    const text = area.value.toLowerCase();
    const splitSentence = text.split(". ");

    for (let i = 0; i < splitSentence.length; i++) {
        splitSentence[i] = splitSentence[i][0].toUpperCase() + splitSentence[i].slice(1);
    }

    area.value = splitSentence.join(". ");
});