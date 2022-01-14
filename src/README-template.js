
module.exports = ({ name, gitName, email, title, description,licence, ...rest }) => {

    const {checkIfEmpty,makeTableOfContents,generateSection,getLicenceBadge} = require('../utils/generate-readme-elements')

let readmeText = `

# ${title}

## Description
${description} 

${makeTableOfContents(rest)} ${generateSection('Installation', rest.installation)} ${generateSection('Usage', rest.usage)} ${generateSection('Contributors', rest.contributors)} ${generateSection('Guidlines', rest.guidlines)} ${generateSection('Test', rest.test)}
## Questions
${name}              [Github](https://github.com/${gitName})

If you have any questions, contact ${name} at:

[${email}](mailto:${email})

`;
if (licence === 'None'){return readmeText;}

const licenceData = getLicenceBadge();

readmeText = `${licenceData[licence]}
`+readmeText+`
## Licence
This software is distributed under the ${licence} licence.`;
    return readmeText;
}





