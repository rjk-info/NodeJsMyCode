const figlet = require("figlet");

figlet("SONU!", (err, data) => {
    if (err) {
        console.error("An error occurred:");
        console.error(err);
        return;
    }
    console.log(data);
});