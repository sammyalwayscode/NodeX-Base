import fs from "fs";
import path from "path";

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf-8",
//   (error, data): void => {
//     if (error) {
//       console.log("Failed to Read File");
//     } else {
//       console.log("This is the Data", data);
//     }
//   }
// );

// const restLetter = "To my landlord, Come and Carry your House";

// fs.writeFile(
//   path.join(__dirname, "files", "newFile.txt"),
//   restLetter,
//   (error) => {
//     if (error) {
//       console.log("An Error Occured" + error);
//     } else {
//       console.log("Written");
//     }

//     const rentUpdate = "\nRefund My Money to Me ooo";

//     fs.appendFile(
//       path.join(__dirname, "files", "newFile.txt"),
//       rentUpdate,
//       (error): void => {
//         if (error) {
//           console.log("Failed to Update" + error);
//         } else {
//           console.log("File Updated");
//         }
//       }
//     );
//   }
// );

fs.mkdir("./newFolder", (error): void => {
  if (error) {
    console.log("Failed to create Folder" + error);
  } else {
    console.log("Folder  Created");
  }
});

if (!fs.existsSync("./folder2")) {
  fs.mkdir("./folder2", (err) => {
    if (err) {
      console.log("Can't Create");
    } else {
      console.log("Created");
    }
  });
}
