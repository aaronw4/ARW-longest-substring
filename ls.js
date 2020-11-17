var lengthOfLongestSubstring = function(s) {
    let longest = 0
    let length = 0
    let substringObj = {}

    if (s.length === 0) {
        return 0
    }

    for (i = 0; i < s.length; i++) {
        let substring = s[i]

        if (!(substring in substringObj)) {
            length++
            substringObj[substring] = i
        } else {
            if (length > longest) {
                longest = length
            }
            const index = substringObj[substring]
            const nextLetter = s[index + 1]
            substringObj = {}
            substringObj[nextLetter] = index + 1
            i = index + 1
            length = 1
        }

        if (i === s.length - 1 && length > longest) {
            longest = length
        }
    }
    return longest
};

console.log(lengthOfLongestSubstring('  '))
