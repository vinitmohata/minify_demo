var minifyAll = require("minify-all");
minifyAll("./folder_name", {
    silent: true
}, function(err) {
    if (err) {
        console.log(err)
    }
});
