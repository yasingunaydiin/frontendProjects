let secretMessage = ['Learning', 'is', 'not', 'easy'];
/*to remove the last item
secretMessage.pop();
*/

// add two more words
secretMessage.push('to','learn');

// replacing 'not' with 'very'
secretMessage[2] = 'very';

//removes the first string
secretMessage.shift();

//adds an element to the beginnging
secretMessage.unshift('Programming');

//replacing 
secretMessage.splice(1,2,'is very very');


console.log(secretMessage.join(' '));