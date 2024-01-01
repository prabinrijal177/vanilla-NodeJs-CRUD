const fs = require('fs');
const path = require('path');

module.exports = (data) =>{
    console.log('the data to write in file :', data);
    try {
        fs.writeFileSync(path.join(__dirname, '..',"data", 'movies.json'), JSON.stringify(data), "utf8");

    } catch (error) {
        console.log(error);

    }
}