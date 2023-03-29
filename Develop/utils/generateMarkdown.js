// Function returns a license badge based on which license is passed in
// No license will return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Modified BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'Zlib') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
  } else {
    return '';
  }
}

// Function that returns the license link
//  No license willreturn an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else if (license === 'Modified BSD') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'Zlib') {
    return 'https://opensource.org/licenses/Zlib';
  } else {
    return '';
  }
}

// Function that returns the license section of README
// No license will return an empty string
function renderLicenseSection(license) {
  let licenses = ''
  if(license === 'None') {
    licenses = ''
  } else {
    licenses =
    `License: ${license} `
  }
  return licenses;

}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  
  ${licenseBadge}

  # ${data.projectName}'

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## License
  This project is using the ${data.license} license. Click [here](${licenseLink}) to learn more.
  ${licenseSection}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions,contact me at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `;
}

module.exports = generateMarkdown;
