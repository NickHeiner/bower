var Logger = require('bower-logger');

var cli = require('../util/cli');

function mirror(pkg, destRepo) {
    var logger = new Logger();

    setTimeout(function() {
        logger.emit('end', {name: 'jqueryasdf'});
    }, 500);

    return logger;
}

// -------------------

mirror.line = function (argv) {
    var options = mirror.options(argv);
    var pkg = options.argv.remain[1];
    var destRepo = options.argv.remain[2];

    if (!pkg) {
        return null;
    }

    return mirror(pkg, destRepo);
};

mirror.options = function (argv) {
    return cli.readOptions(argv);
};

mirror.completion = function () {
    // TODO:
};

module.exports = mirror;