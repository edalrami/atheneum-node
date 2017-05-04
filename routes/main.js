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

//