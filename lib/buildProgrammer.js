import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

var qAnswers;
const sleep = (ms = 2000) => new Promise ((r)=> setTimeout(r,ms))

async function buildProgrammer(name){
    console.log(`
        ${chalk.blue.bold('Let the quiz begin!')}
    `)
    inquirer
        .prompt([
            {
                type: "input",
                message :`What language is this code written in:\n
                ${chalk.yellow('<navbar class="navbar">')}\n `,
                name: "prog1",
            },
            {
                type: "list",
                message :`Which data type is stored in the constant 'cows':\n
                ${chalk.yellow('const cows = ["Angus", "Jersey", "Holstein", "Wagyu"]')}\n`,
                choices: ['object', 'sequence', 'array', 'string', 'class', 'method', 'number', 'boolean'],
                name: "prog2",
            },
            {
                type: "list",
                message :`What syntax is missing from this line of JS code:\n 
                ${chalk.yellow('console.log(${cows[2]} cows make the best steak!;')}`,
                choices: ['{ }','" "', "[ ]", "' '", "( )",'` `',],
                name: "prog3",
            },
            {
                type: "input",
                message :`What does this say (push enter to skip):\n
                ${chalk.yellow('01000100 01101111 01100111 01110011 00100000 01101100 01101001 01101011 01100101 00100000 01100010 01100101 01100101 01100110')}`,
                name: "prog4",
            },

        ])
        .then((answers) => {
            qAnswers = answers;
            qAnswers.name = name;
            scorePQuiz(qAnswers);
        });


}

async function scorePQuiz(quizAnswers){
    //cool spinner
    const spinner = createSpinner('Beep. Boop.. Processing...').start();
    await sleep();
    //evaluate answers
    var pScore = 0;
    quizAnswers.prog1.toLowerCase() == 'html' ? pScore++: {};
    quizAnswers.prog2 == 'array' ? pScore++: {};
    quizAnswers.prog3 == '` `' ? pScore++: {};
    quizAnswers.prog4.toLowerCase() == 'dogs like beef' ? pScore++: {};
    qAnswers.pScore = pScore;
    console.log(qAnswers);
    //spinner finished
    spinner.success({ text: `Starting programming proficiency evaluated!`});
    await sleep();
    //Talk to user. Add bonus language(s) to qAnswers (HTML,JS)
}

export default buildProgrammer;