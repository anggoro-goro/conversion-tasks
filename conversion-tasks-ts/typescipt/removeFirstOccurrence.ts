function removeSubstring(str: string, searchStr: string): string {
    const index = str.indexOf(searchStr);
    if (index === -1) return str;
    return str.slice(0, index) + str.slice(index + searchStr.length);
}

console.log(removeSubstring("Hello world", "ell")); // Output: "Ho world"
