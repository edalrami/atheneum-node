module.exports.index = function(req, res) {
    return res.renderT("index", {
        template : "index"
    })
}