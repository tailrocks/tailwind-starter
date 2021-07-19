const express = require("express")
const eta = require("eta")
const fs = require("fs")
const app = express()

const blocksFolder = './blocks'

app.engine("html", eta.renderFile)
app.engine("eta", eta.renderFile)

app.set("view engine", "html")
app.set("views", ["./view", "./view/layouts", "./blocks"])

app.use('/static', express.static('./public'))

function blocksWalk(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(function (file) {
    const path = dir + '/' + file;
    const stat = fs.statSync(path);
    if (stat && stat.isDirectory()) {
      results = results.concat(blocksWalk(path));
    } else {
      const category = dir.replace('./blocks/', '');
      const name = file.replace('.html', '');
      results.push({
        category: category,
        name: name
      });
    }
  });
  return results;
}

app.get("/", function (req, res) {
  const blocks = blocksWalk(blocksFolder)
  res.render("_list_blocks", {
    blocks: blocks
  })
})

app.get("/blocks/:category/:block", function (req, res) {
  res.render(req.params.category + "/" + req.params.block, {
    title: req.params.category + "/" + req.params.block
  })
})

app.listen(8080, function () {
  console.log("Server started: http://127.0.0.1:8080")
})
