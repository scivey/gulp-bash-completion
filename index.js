var _ = require('lodash');

var getTasks = function(gulpRef) {
    return _.keys(gulpRef.tasks);
};

module.exports = function(gulp, options) {
    options || (options = {});
    gulp.task('_bash-completion-helper', function() {
        var tasks = getTasks(gulp);
        if (options.filter) {
            tasks = _.filter(tasks, options.filter);
        }
        console.log(tasks.join('\n'));
    });
};
