const db = require('../provider/SQL/usermanager');
exports.getUsers = function (req, res) {
    const User = db.getUsers().then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successfull',
            data: results.recordsets[0]
        }); // send all the data 
    });
}
exports.getcustomerbyId = function (req, res) {
    const { id } = req.params; // get id 
        console.log(`ID: ${id}`);
    const UserbyId = db.getcustomerbyId(id).then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successfull',
            data: results.recordsets[0]
        });
    });
}
