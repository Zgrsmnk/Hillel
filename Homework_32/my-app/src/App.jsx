import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import { Container } from "@mui/material";
import Main from "./components/Main";
import Todo from "./components/Todo";
import Swapi from "./components/Swapi";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/swapi" element={<Swapi />} />
          </Routes>
        </main>
        <Footer/>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App
