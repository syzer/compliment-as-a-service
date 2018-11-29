const fs = require('fs')

const compliments = fs.readFileSync('removeme.txt', 'utf-8')
  .split('\n')
  .map((text, i) => ({
    text, id: i + 1,
  }))

console.log(compliments)
fs.writeFileSync('compliments.json', JSON.stringify(compliments))
