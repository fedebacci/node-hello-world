const { greet } = require ('./functions.js');

const init = () => {
    console.log(greet(process.argv[2]));
}

init();