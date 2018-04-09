const Readline = require('readline');
const Chalk = require('chalk'); // Terminal string styling
const RiveScript = require('rivescript');

const bot = new RiveScript();
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Load our training data
bot.loadFile('./training_data.rive', function() {
    // consle.log('Read successfully')
    bot.sortReplies();
    ask();
}, function(err) {
    console.log('Error reading file: ' + err);
})

function ask () {

    // Read data from a Readable stream one line at a time 
    rl.question('You: ', (message) => {
        if (message === 'bye') process.exit();
        var reply = bot.reply('local-user', message);
        console.log(Chalk.red('Bot: ' + reply));
        ask();
    });
    
}
