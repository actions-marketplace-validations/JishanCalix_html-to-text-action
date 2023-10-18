const core = require('@actions/core');

async function run() {
    const HTML_TEXT = core.getInput('HTML_TEXT');

    let PLAIN_TEXT = HTML_TEXT.replace(/<\/div>/ig, '\n');
    PLAIN_TEXT = PLAIN_TEXT.replace(/<\/li>/ig, '\n');
    PLAIN_TEXT = PLAIN_TEXT.replace(/<li>/ig, '  *  ');
    PLAIN_TEXT = PLAIN_TEXT.replace(/<\/ul>/ig, '\n');
    PLAIN_TEXT = PLAIN_TEXT.replace(/<\/p>/ig, '\n');
    PLAIN_TEXT = PLAIN_TEXT.replace(/<br\s*[\/]?>/gi, "\n");
    PLAIN_TEXT = PLAIN_TEXT.replace(/<[^>]+>/ig, '');

    console.log(PLAIN_TEXT);
    core.setOutput('plainText', PLAIN_TEXT);
}

run();
