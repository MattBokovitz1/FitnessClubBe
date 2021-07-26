const server = require("./.vscode/api/server");
const port = process.env.PORT || 5001;

server.listen(port, () => console.log(`Running server on port:${port}`));
