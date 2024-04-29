/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var count=0;
    s=s.trim();
    var string=s.split(" ");
    count=string[string.length-1].length;
    return count;
};


console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
