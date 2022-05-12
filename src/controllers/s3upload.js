var AWS = require("aws-sdk");
var fs = require("fs")

AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
        console.log("Access key:", AWS.config.credentials.accessKeyId);
    }
});
var s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const s3upoad = function(filename, filepath) {
    const params = {
        Bucket: "jendieplus",
        Key: filename,
        Body: fs.readFileSync(filepath)
    }

    s3.upload(params, (err, data) => {
        if (err) {
            reject(err)
        }
        resolve(data.Location)
    })
}
module.exports = {
    s3upload: s3upoad
}