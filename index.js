const textArea = document.getElementById(`content`);
const characterCount = document.getElementById(`cCounter`);
const wordCount = document.getElementById(`wCounter`);

textArea.oninput = () => {
    let characters = textArea.value;

    // here below, \s represents the white spaces and /g representes all the white space present. White spaces will not be included in the characters count. /\s/g will cut the whitespace count.

    characterCount.textContent = characters.replace(/\s/g, '').length;
    
    // Below code will detect how many words are entered.
    let words = textArea.value.split(' ').filter((item) => {
        return item != '';
    });
    
    wordCount.textContent = words.length;
    // console.log(characters);
}