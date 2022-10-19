import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

if (!fs.existsSync(path.join(__dirname, "NameFolder"))) {
  fsPromises.mkdir(path.join(__dirname, "NameFolder"));
}

setInterval(() => {
  fsPromises.appendFile(
    path.join(__dirname, "NameFolder", "name.txt"),
    "My Name is Samuel \t I am the best in Class\tI love NODE JS\n"
  );
});
