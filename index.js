const inquirer = require('inquirer');
const readmeGenerator = require('./src/README-template.js');
const { writeFile, copyFile } = require('./utils/generate-file.js');

console.log(
    `
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
________            ______________  ___    _________            
___  __ \\__________ ______  /__   |/  /______  ____/___________ 
__  /_/ /  _ \\  __  /  __  /__  /|_/ /_  _ \\  / __ _  _ \\_  __ \\
_  _, _//  __/ /_/ // /_/ / _  /  / / /  __/ /_/ / /  __/  / / /
/_/ |_| \\___/\\__,_/ \\__,_/  /_/  /_/  \\___/\\____/  \\___//_/ /_/ 

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
             ________________________________

             A Console Based README Generator
             ________________________________
`);


//Prompt for name, github name and email(required)[add to question sections]
const getUserInfo = () => {
    return inquirer
        .prompt([
            {
                //Get user Name
                type: 'input',
                name: 'name',
                message: 'What is your full name?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                //get Github Name
                type: 'input',
                name: 'gitName',
                message: 'What is your Github username?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('Please enter your Github username!');
                        return false;
                    }
                }
            },
            {
                //get email
                type: 'input',
                name: 'email',
                message: 'What is your contact email?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('Please enter a contact email!');
                        return false;
                    }
                }
            },
            {
                //Get title
                type: 'input',
                name: 'title',
                message: 'What is your project title?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('Please must enter a title!');
                        return false;
                    }
                }
            },
            {
                //Get description
                type: 'input',
                name: 'description',
                message: 'Please enter a description of your project?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('Please must enter a description!');
                        return false;
                    }
                }
            },
            {
                //Get installation
                type: 'input',
                name: 'installation',
                message: 'Please description the installation of your program(leave blank to omit)?',

            },
            {
                //Get usage
                type: 'input',
                name: 'usage',
                message: 'Please description the usage of your program(leave blank to omit)?',

            },
            {
                //Get contributors
                type: 'input',
                name: 'contributors',
                message: 'Please list the contributors of your program(leave blank to omit)?',

            },
            {
                //Get guidlines
                type: 'input',
                name: 'guidlines',
                message: 'Please enter guidlines for your program(leave blank to omit)?',

            },
            {
                //Get test
                type: 'input',
                name: 'test',
                message: 'Please describe a test of your program(leave blank to omit)?',

            },
            {
                //Get licence
                type: 'list',
                name: 'licence',
                message: 'Please select a licence?',
                choices: ['None','GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense'],

            },
        ]);
}



getUserInfo()
    .then(readmeInfo => {
        //concat user info and readme data into one array
        console.log(readmeInfo);
        writeFile(readmeGenerator(readmeInfo));
    });



//if any of these are blank they are not added to the README.md
//Everything after the description will be added to the table of contents dynamically