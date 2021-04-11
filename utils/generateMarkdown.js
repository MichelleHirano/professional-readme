function generateMarkdown(userResponse, userInfo) {

    //Generate Table of Contents
    let generateTable = '## Table of Contents';

    //installation
    if (userResponse.installation !== "") {generateTable +=' *[Installation] (#installation' };

    //usage
    if (userResponse.usage !== "") {generateTable +=' *[Usage] (#usage)' };

    //contributors
    if (userResponse.constributing !== "") {generateTable +=' *[Contributors] (#contributors' };

    //

}
