var isValid = function(s) {
    const open = [];
    const bracket_list = {
        '[': ']',
        '{': '}',
        '(': ')'
    };

    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        if (a in bracket_list) {
            open.push(a);
        } else {
            const close = open.pop();
            if (bracket_list[close] !== a) {
                return false;
            }
        }
    }

    return open.length === 0;
};

console.log(isValid("([)]"));
console.log(isValid("()")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(]")); 