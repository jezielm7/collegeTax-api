const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());

const students = [];

function validateStudentsId(req, res, next) {
  const { id } = req.params;

  if(!isUuid(id)) {
    return res.status(400).json({ error: 'Inavalid project ID.' });
  }

  return next();
};

app.get('/students', (req, res) => {
  const { name } = req.query;

  const results = name
    ? students.filter(student => student.name.includes(name)) : students;

  return res.json(results);
});

app.post('/students', (req, res) => {
  const { name, registration, course } = req.body;

  const student = { id: uuid(), name, registration, course };

  students.push(student);

  return res.json(student);
});

app.put('/students/:id', validateStudentsId, (req, res) => {
  const { id } = req.params;
  const { name, registration, course } = req.body;

  const studentIndex = students.findIndex(student => student.id === id);

  if (studentIndex < 0) {
    return res.status(400).json({ message: 'Student not found!' });
  }

  const student = {
    id,
    name,
    registration,
    course,
  };

  students[studentIndex] = student;

  return res.json(student);
});

app.delete('/students/:id', validateStudentsId, (req, res) => {
  const { id } = req.params;

  const studentIndex = students.findIndex(student => student.id === id);

  if (studentIndex < 0) {
    return res.status(400).json({ message: 'Student not found!' });
  }

  students.splice(studentIndex, 1);

  return res.status(204).send();
});

app.listen(3333);