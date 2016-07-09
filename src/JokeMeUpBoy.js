/**
 * Prints a random programmer joke.
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var jokeMeUpBoy = function() {
    const jokes = getListOfJokes();
    let rand = Math.floor(Math.random() * jokes.length);
    console.log(jokes[rand]);
};

/**
 * Holds a list of classic programmer jokes.
 * Feel free to add a new joke each day.
 * @private
 */
function getListOfJokes() {
    var arr = [];
    arr.push('Q: How do you tell an introverted computer scientist from an extroverted computer scientist?\nA: An extroverted computer scientist looks at your shoes when he talks to you.');
    return arr;
}

anything.prototype.JokeMeUpBoy = jokeMeUpBoy;
