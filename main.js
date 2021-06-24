var normalizedPath = require('path').join(__dirname, '')
require('fs')
  .readdirSync(normalizedPath)
  .forEach(function (file) {
    if (file.substr(-2) === 'js' && file != 'main.js') {
      console.log(`----------- ${file} -----------`)
      require('./' + file)
    }
  })
