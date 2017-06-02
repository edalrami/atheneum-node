module.exports.index = function(req, res) {
    return res.renderT("index", {
        template : "index"
    })
}

module.exports.signUpPage = function(req, res) {
    return res.renderT("signUp", {
        template: "signUp"
    })
}


module.exports.upload = function(req, res) {
    return res.renderT("upload", {
        template: "upload"
    })
}

module.exports.download = function(req, res) {
    return res.renderT("download", {
        template: "download"
    })
}

//