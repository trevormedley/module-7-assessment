function addToZero(arr){
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === 0) {
              return true;
          }
      }
    }
    return false
}

console.log(addToZero([1, 2, 3, -2]))

// Runtime prediction: 185 μs
// Space Complexity for addToZero: O(n^2)



function hasUniqueChars(str) {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                return false;
            } 
        } 
    }
    return true
}

console.log(hasUniqueChars("Monday"))

// Runtime prediction: 150 μs
// Space Complexity for addToZero: O(n^2)



function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    regex = /\s/g;
    let lowercase = str.toLowerCase().replace(regex, "");

    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) === -1) {
            return false
        }
    }
    return true
}

console.log(isPangram('I like cats, but not mice'));

// Runtime prediction: 220 μs
// Space Complexity for addToZero: O(n)



function findLongestWord(arr) {
    let maxLength = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > maxLength) {
        maxLength = arr[i].length;
      }
    }
    return maxLength;
  }

console.log(findLongestWord(['hi', 'my', 'name', 'is', 'trevor']));

// Runtime prediction: 250 μs
// Space Complexity for addToZero: O(n)