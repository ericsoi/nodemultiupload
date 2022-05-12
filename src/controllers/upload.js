const upload = require("../middleware/upload");
const s3upload = require("./s3upload");

const multipleUpload = async(req, res) => {
    try {
        await upload(req, res);
        console.log(req.files);

        if (req.files.length <= 0) {
            return res.send(`You must select at least 1 file.`);
        }
        for (i = 0; i < req.files.length; i++) {
            console.log(req.files[i].filename);
            console.log(req.files[i].path);
            s3upload.s3upload(req.files[i].filename, req.files[i].path)
        }
        return res.send(`Files has been uploaded.`);
    } catch (error) {
        console.log(error);
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
            return res.send("Too many files to upload.");
        }
        return res.send(`Error when trying upload many files: ${error}`);
    }
};

module.exports = {
    multipleUpload: multipleUpload
};