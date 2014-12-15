# Gulp Bash Completion

## Usage

You have to do two things:
- Add `gulp-bash-completion` to your `package.json`, require it somewhere in your gulpfile, and pass gulp into it.

```javascript
    var gulp = require('gulp');
    require('gulp-bash-completion')(gulp);
```

- Copy `gulp-completion.bash` somewhere and source it in your shell.

## Notes

- The bash script creates a cache file `.gulp_tasks~` in the same directory as your gulpfile.  Add it to any relevant .ignore files.
- Sometimes all the whitespace in Python makes me feel cold and empty.
