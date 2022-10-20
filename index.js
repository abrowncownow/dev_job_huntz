#!/usr/bin/env node
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import fs from 'fs';
import chalk from 'chalk';
import buildProgrammer from './lib/buildProgrammer.js';
var name;

const sleep = (ms = 2000) => new Promise ((r)=> setTimeout(r,ms))

async function askName(){
    const answers = await inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'your name';
        },
    })
    name = answers.name;
}

async function welcome() {
    const rainbowWelcome = chalkAnimation.rainbow(
        `${name}, Welcome to Dev Job Huntz! \n`
    );

    await sleep();
    rainbowWelcome.stop();

    console.log(`
        ${chalk.green.bgBlack.bold('How to play this game:')}
        ${chalk.green.bgBlack('1. Take a short quiz.')}
        ${chalk.green.bgBlack('2. Pray that RNGsus smiles upon you.')}
        ${chalk.green.bgBlack('3. Choose a place to live.')}
        ${chalk.green.bgBlack('4. Start hunting for Jobz!')}
    `)
    await sleep();
    await sleep();
}
//run
await askName();
await welcome();
await buildProgrammer(name);