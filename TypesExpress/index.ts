import express, { Application, Request, Response } from "express";
const PORT: number = 2222;
const app: Application = express();
app.use(express.json());

interface students {
  id: number;
  name: string;
  section: string;
  state: string;
}

const studentsData: students[] = [
  {
    id: 1,
    name: "Okon David",
    section: "2019/2020",
    state: "Lagos",
  },
  {
    id: 2,
    name: "Issac Kowope",
    section: "1969/1970",
    state: "Yola",
  },
  {
    id: 3,
    name: "Judit Okoro",
    section: "2002/2003",
    state: "Mian",
  },
  {
    id: 4,
    name: "Godwin Korogbade",
    section: "2010/2011",
    state: "Warri",
  },
  {
    id: 5,
    name: "Esther Fimber",
    section: "2019/2020",
    state: "Lagos",
  },
];

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server up and Running 🚀🚀🚀",
  });
});

app.get("/studentdata", (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({
      message: "Data Gotten Sucessfully",
      data: studentsData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An Error Occoured",
      data: error,
    });
  }
});

app.get("/getStudent/:studentID", (req: Request, res: Response): Response => {
  try {
    const userId = parseInt(req.params.studentID);
    console.log(req.params);
    const Onestudent = studentsData.find((stud) => stud.id === userId);

    if (Onestudent) {
      return res.status(200).json({
        message: "User Found",
        data: Onestudent,
      });
    } else {
      return res.status(400).json({
        message: "User Not found",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Could'nt Get User",
      data: error,
    });
  }
});

app.post("/newstudents", (req: Request, res: Response): Response => {
  try {
    const Createstudent = {
      id: studentsData.length + 1,
      name: req.body.name,
      section: req.body.section,
      state: req.body.state,
    };

    studentsData.push(Createstudent);
    return res.status(201).json({
      message: "Successfully Created",
      Data: Createstudent,
    });
  } catch (error) {
    return res.status(404).json({
      message: `An error occured  ${error}`,
    });
  }
});

app.patch("/update/:studentID", (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.studentID);
    const student: any = studentsData.find((s) => s.id === id);
    student.id = student.id;
    student.name = req.body.name;
    student.section = req.body.section;
    student.state = req.body.state;
    return res.status(200).json({
      message: "student updated",
      data: student,
    });
  } catch (error) {
    res.status(404).json({
      message: "an error occured",
      data: error,
    });
  }
});

app.delete("/deletestudent/:id", (req: Request, res: Response): Response => {
  try {
    const id = parseInt(req.params.id);
    const student: any = studentsData.find((stud) => stud.id === id);

    const index = studentsData.indexOf(student);
    studentsData.splice(index, 1);

    return res.status(200).json({
      message: "student deleted",
      data: studentsData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An error occured",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listing On PORT: ${PORT}`);
});
