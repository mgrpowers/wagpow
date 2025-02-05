import * as sass from "sass"
import fs from "fs"
import path from "path"

const result = sass.renderSync({
	file: path.resolve("src/index.scss"),
	outFile: path.resolve("public/main.css"),
})

fs.writeFileSync(path.resolve("public/main.css"), result.css)
console.log("SCSS compiled to CSS successfully.")
