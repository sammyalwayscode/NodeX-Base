const express = require("express");
const PORT = 2022;
const app = express();

app.use(express.json());

const studentData = [
  {
    id: 1,
    name: "Olorunda Samuel",
    stack: "Javascript",
    grade: 40,
  },
  {
    id: 2,
    name: "Kunle Adams",
    stack: "Node JS",
    grade: 70,
  },
  {
    id: 3,
    name: "Chioma Judit",
    stack: "React JS",
    grade: 64,
  },
  {
    id: 4,
    name: "Ekeke Okoro",
    stack: "UI/UX",
    grade: 78,
  },
  {
    id: 5,
    name: "Gedion Afon",
    stack: "Element JS",
    grade: 18,
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Server is up and Running");
});

app.get("/getStudents", (req, res) => {
  try {
    res.status(200).json({
      message: "Data gotten Sucessfully",
      data: studentData,
    });
  } catch (error) {
    res.status(404).json({
      message: `An Error Occoures: \t ${error}`,
    });
  }
});

app.get("/getStudent/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const student = studentData.find((stud) => stud.id === id);

    if (id) {
      res.status(200).json({
        message: `user ${id} is Found`,
        data: student,
      });
    } else {
      res.status(404).json({
        message: `user ${id} Not Found`,
      });
    }
  } catch (error) {
    res.status(404).json({
      message: `An Error Occoures: \t ${error}`,
    });
  }
});

app.post("/newStudent", (req, res) => {
  try {
    const createStudent = {
      id: studentData.length + 1,
      name: req.body.name,
      stack: req.body.stack,
      grade: req.body.grade,
    };

    studentData.push(createStudent);
    res.status(201).json({
      message: "Data Created Sucessfully",
      data: studentData,
    });
  } catch (error) {
    res.status(404).json({
      message: `Page Not Found: \t ${error}`,
    });
  }
});

app.patch("/updateStudent/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const student = studentData.find((stud) => stud.id === id);

    student.id = student.id;
    student.name = req.body.name;
    student.stack = req.body.stack;
    student.grade = req.body.grade;

    res.status(200).json({
      message: "Updated Sucessfully",
      data: student,
    });
  } catch (error) {
    res.status(404).json({
      message: `Page Not Found: \t ${error}`,
    });
  }
});

app.delete("/deleteStudent/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const student = studentData.find((stud) => stud.id === id);

    const index = studentData.indexOf(student);
    studentData.splice(index, 1);

    res.status(200).json({
      message: "Student Has Been Deleted sucessfully",
    });
  } catch (error) {
    res.status(404).json({
      message: `Couldn't Perform Operation: \t ${error}`,
    });
  }
});

app.listen(PORT, () => {
  console.log("Server is Listening😏");
});
