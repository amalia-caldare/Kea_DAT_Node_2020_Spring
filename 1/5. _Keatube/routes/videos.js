const router = require("express").Router();

const crypto = require("crypto");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/");
    },
    filename: (req, file, cb) => {
        const fileName = crypto.randomBytes(20).toString("hex");
        const mimetypeArray = file.mimetype.split("/");
        if (mimetypeArray[0] === "video") {
            const extension = mimetypeArray[mimetypeArray.length - 1];
            cb(null, fileName + "." + extension);
        } else {
            cb("Not a video error. Mimetype: " + file.mimetype);
        }
    }
});
const upload = multer({ storage: storage });

const videos = [{
    title: "Ocean Waves",
    description: "Watch the waves and enjoy",
    fileName: "3f1e146c-3295-444a-a7be-e758c560536b.mp4",
    thumbnail: "",
    category: "Nature",
    tags: ["waves", "ocean", "coast"],
    uploadDate: new Date(2020, 3, 26, 08, 43)
}];

const videosPerPage = 10;

router.get("/videos", (req, res) => {
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page-1) * videosPerPage;
    const end = start + videosPerPage;

    return res.send({ response: videos.slice(start, end) });
});

router.get("/videos/:videoId", (req, res) => {       
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

router.post("/videos", upload.single('video'), (req, res) => {

    let errors = []

    const video = {
        fileName: req.file.fileName,
        title: req.body.tile ? req.body.title: "",
        description: req.body.description ? req.body.description: "",
        thumbnail: "", //todo
        category: req.body.category ? req.body.category: "uknown",
        tags: req.body.tags.split(/\s*[,\s]\s*/),
        uploadDate: new Date()
    };

    if(video.title.length < 8 || video.title.length > 64) {
        errors.push("Title can't be between 8 and 63.")
    }

    if(video.description.length > 2048) {
        errors.push("The description can't be longer than 20148 chars.")
    }

    if(errors.length > 0) {
        return res.send({response: errors});
    } else {
        videos.push(video);
        return res.redirect("/player" + video.fileName);
    }
});

module.exports = router; 