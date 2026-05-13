import express from "express";
const app = express();
import cors from "cors";

app.listen(8080, () => {
  console.log("Server is running on localhost 8080");
});

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Hello!</h1>");
});

let todos = [{
  id: 1234,
  text: "Learn NodeJS",
  done: false
}];

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  todos.push({
    ...req.body,
    id: +new Date()
  })

  res.send(todos);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id !== +id);
  res.send(todos);
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  
  const todo = todos.find((item) => item.id === +id);

  if (todo) {
    todo.text = req.body.text;
    todo.done = req.body.done;
  }

  res.send(todos);
});