function convertToRoman(num) {
    const obj = {
        0:['M',1000], 
        1:['D', 500], 
        2:['C', 100], 
        3:['L', 50], 
        4:['X', 10], 
        5:['V', 5], 
        6:['I', 1]
    };

    let result = '';

    // Loop through the object keys
    for (let key in obj) {
        let symbol = obj[key][0];
        let value = obj[key][1];

        // Repeat the symbol as many times as possible while value is less than or equal to num
        while (value <= num) {
            result += symbol;
            num -= value;
        }

        // Handle special cases like IV, IX, etc.
        if (result.endsWith('IIII')) {
            result = result.replace(/IIII$/, 'IV');
            num += 4;
        } else if (result.endsWith('VIIII')) {
            result = result.replace(/VIIII$/, 'IX');
            num += 9;
        } else if (result.endsWith('XXXX')) {
            result = result.replace(/XXXX$/, 'XL');
            num += 40;
        } else if (result.endsWith('LXXXX')) {
            result = result.replace(/LXXXX$/, 'XC');
            num += 90;
        } else if (result.endsWith('CCCC')) {
            result = result.replace(/CCCC$/, 'CD');
            num += 400;
        } else if (result.endsWith('DCCCC')) {
            result = result.replace(/DCCCC$/, 'CM');
            num += 900;
        }
    }

    return result;
}

// Test cases
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII

// Uncomment to test with an input
// console.log(convertToRoman(36));

module.exports = convertToRoman;
