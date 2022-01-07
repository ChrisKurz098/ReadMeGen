const checkIfEmpty = i => i === '';

const makeTableOfContents = (dataObj) => {
    const keyArr = Object.keys(dataObj);
    const valueArr = Object.values(dataObj);
    //if there is no user data, skip this step
    if (valueArr.every(checkIfEmpty)) { return '';}

    let string = `

## Table of Contents  
    `;

    for (let i = 0; i < valueArr.length; i++) {
        const element = valueArr[i];
        let title = keyArr[i];
        title = (title.slice(0, 1)).toUpperCase() + title.slice(1);
        if (element != '') {
            string += `
* [${title}](#${keyArr[i]})`
        }
    }
    return string;
};


//this checks if the user left this section blank. If not, it creates the MD title and text from the variable passed
const generateSection = (title, data) => {
    if (data != '') {
        return `

## ${title}
    ${data}
        `}
    return ``;
}


const getLicenceBadge = (licence) => {
    licenceObj = {
        'GNU AGPLv3': `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`,
        'GNU GPLv3': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)` ,
        'GNU LGPLv3': `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)` ,
        'Mozilla Public License 2.0': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)` ,
        'Apache License 2.0': `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)` ,
        'MIT License': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
        'Boost Software License 1.0': `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`  ,
        'The Unlicense': `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)` 
    }
    if (licence === 'None') {return ''}
    return licenceObj;
}

module.exports = {
    checkIfEmpty,
    makeTableOfContents,
    generateSection,
    getLicenceBadge
}