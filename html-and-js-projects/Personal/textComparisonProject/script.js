// compareText(), This function is called when the "Compare Text" button is clicked. It compares the contents of the two text areas and displays the differences in the result area.

function compareText() {
    // Retrieve the values of the first and second text areas
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;

    // Get the result element to display the differences
    var resultElement = document.getElementById('result');

    // Call the getDifference function to obtain the highlighted difference
    var diffResult = getDifference(text1, text2);

    // Update the content of the result area with the difference    
    resultElement.innerHTML = diffResult;
}

// getDifference(text1, text2), This function compares two text strings (text1 and text2) and generates HTML with highlighted differences. It uses a custom approach to highlight added text with a green background and removed text with a red background.

function getDifference(text1, text2) {
    var diff = ''; // Variable to store the HTML difference
    var minLength = Math.min(text1.length, text2.length);

    // Iterate through each character of the texts, highlighting differences
    for (var i = 0; i < minLength; i++) {
        if (text1[i] !== text2[i]) {
            diff += '<span class="removed">' + text1[i] + '</span>';
            diff += '<span class="added">' + text2[i] + '</span>';
        } else {
    // If characters are the same, simply add the character
            diff += text1[i];
        }
    }
    // Handle remaining characters in longer text (if any)
    if (text1.length > minLength) {
        diff += '<span class="removed">' + text1.substring(minLength) + '</span>';
    } else if (text2.length > minLength) {
        diff += '<span class="added">' + text2.substring(minLength) + '</span>';
    }
    // Return the HTML difference
    return diff;
}