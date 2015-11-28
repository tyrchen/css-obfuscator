var styles = require('./index.css');
document.write(require("./content.js"));
console.log(styles);
document.write(`<li class="${styles.imgbox}">Hello world!</li>`);
