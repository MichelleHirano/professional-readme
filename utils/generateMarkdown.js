function generateMarkdown(userResponse, userInfo) {

    //Generate Table of Contents
    let generateTable = '## Table of Contents';

        //installation
        if (userResponse.installation !== '') {generateTable +=  `\n - [Installation](#installation)  ` };

        //usage
        if (userResponse.usage !== '') {generateTable += `\n - [Usage](#usage)`};

        //contributors
        if (userResponse.credits !== '') {generateTable += ` \n - [Contributors](#credits)` };

        //tests
        if (userResponse.tests !== '') {generateTable += `\n - [Tests](#tests)` };

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
    draftMarkdown += `\n * [License](#license) `;


  // Installation
  if (userResponse.installation !== '') {
  
    draftMarkdown +=
    `
    
    ## Installation
    
    
    ${userResponse.installation}`
    };
    
  
    //Usage
    if (userResponse.usage !== '') {
    
    draftMarkdown +=
    
    `
    
    ## Usage 
    
    ${userResponse.usage}`
    };
    
    
    //Contributing
    if (userResponse.credits !== '') {
    `
    
    ## Contributing
    
    ${userResponse.credits}`
    };
    
  
    //Tests
    if (userResponse.tests !== '') {
    
    draftMarkdown +=
    `
    
    ## Tests
    
    ${userResponse.tests}`
    };
  
  
    // License
    draftMarkdown +=
    `
    
    ## License
    
    ${userResponse.license}
    `;
  
    // Return markdown
    return draftMarkdown;
    
}

module.exports = generateMarkdown;
