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

  //your code here
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

        // For special cases like IV, IX, etc.
        for (let i = +key + 1; i < obj.length; i++) {
            let nextSymbol = obj[i][0];
            let nextValue = obj[i][1];

            // Check if nextValue is less than num + 1, to avoid case like 9 -> VIIII
            if (value - nextValue >= num + 1) {
                result += nextSymbol + symbol;
                num -= (value - nextValue);
                break;
            }
        }
    }

    return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
