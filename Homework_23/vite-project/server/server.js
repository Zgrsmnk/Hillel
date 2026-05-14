import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import TodoModel from "./mongo/todo.model.js";

const connect = mongoose.connect(
  "mongodb+srv://jacobtorres27_db_user:oaztt3ulHAnOfPVs@cluster0.7matmqt.mongodb.net/?appName=Cluster0",
);
connect
  .then(() => console.log("DB connected!"))
  .catch((e) => console.log("Error while connecting", e));

app.listen(8080, () => {
  console.log("Server is running on localhost 8080");
});

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Hello!</h1>");
});

let todos = [
  {
    id: 1234,
    text: "Learn NodeJS",
    done: false,
  },
];

app.get("/todos", (req, res) => {
  // TodoModel.find().then((data) => res.send(data));
  res.send(todos);
});

app.post("/todos", (req, res) => {
  todos.push({
    ...req.body,
    id: +new Date(),
  });

  res.send(todos);

  // const todo = new TodoModel(req.body);

  // todo.save().then((data) => res.send(data));
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  todos = todos.filter((todo) => todo.id !== +id);
  res.send(todos);

  // TodoModel.deleteOne({ _id: id }).then((data) => {
  //   if (!data.deletetCount) {
  //     res.status(404).send({
  //       message: "Todo were not found!"
  //     });
  //   } else {
  //     res.send(data);
  //   };
  // });
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;

  const todo = todos.find((item) => item.id === +id);

  if (todo) {
    todo.text = req.body.text;
    todo.done = req.body.done;
  }

  res.send(todos);

  // TodoModel.updateOne({ _id: id }, req.body).then((data) => res.send(data));
});
