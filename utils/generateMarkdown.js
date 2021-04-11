function generateMarkdown(userResponse, userInfo) {

    //Generate Table of Contents
    let generateTable = '## Table of Contents';

    //installation
    if (userResponse.installation !== "") {generateTable +=' *[Installation] (#installation)' };

    //usage
    if (userResponse.usage !== "") {generateTable +=' *[Usage] (#usage)' };

    //contributors
    if (userResponse.constributing !== "") {generateTable +=' *[Contributors] (#credits)' };

    //tests
    if (userResponse.tests !== "") {generateTable +=' *[Tests] (#tests)' };

    //Markdown for title and badges
    let draftMarkdown =
    `# ${userResponse.title}
    
    ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponse.username}/${userResponse.repo}?style=flat&logo=appveyor) 
    
    ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponse.username}/${userResponse.repo}?style=flat&logo=appveyor) 
    
    Check out the badges hosted by [shields.io](https://shields.io/). 
    
    ## Description
    
    ${userResponse.description}
    `

    //Table of Contents
    draftMarkdown += generateTable;

    //License
    draftMarkdown += `
    * [License] (#license)`;


  // Installation
  if (userResponses.installation !== '') {
  
    draftMarkdown +=
    `
    
    ## Installation
    
    *Steps required to install project:*
    
    ${userResponses.installation}`
    };
    
  
    //Usage
    if (userResponses.usage !== '') {
    
    draftMarkdown +=
    
    `
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ${userResponses.usage}`
    };
    
    
    //Contributing
    if (userResponses.credits !== '') {
    `
    
    ## Contributing
    
    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${userResponses.credits}`
    };
    
  
    //Tests
    if (userResponses.tests !== '') {
    
    draftMarkdown +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${userResponses.tests}`
    };
  
  
    // License
    draftMarkdown +=
    `
    
    ## License
    
    ${userResponses.license}
    `;
  
    // Return markdown
    return draftMarkdown;
    
}

module.exports = generateMarkdown;
