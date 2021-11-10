const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ReactDomServer = require("react-dom/server");
const App = require("./components/app.jsx");

const router = express.Router();
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

router.post("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="utf-8">
        <title>NAVER-FE-SSR</title>
    </head>
    <body>
        <div id="root">${ReactDomServer.renderToString(App(req.body))}</div>
    </body>
</html>
`);
});

app.listen(port, () => {
  console.log(`Render Server listening at http://localhost:${port}`);
});
