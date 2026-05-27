import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import { themes, ThemeContext } from "./themeContext";
import Contacts from "./components/Contacts";
import AboutMe from "./components/AboutMe";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const theme = useState(themes.light);
  const [currentTheme] = theme;
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <ErrorBoundary>
          <div
            className="appContainer"
            style={{ background: currentTheme.backgroundColor }}
          >
            <Header />
            <main>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Main />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/about-me" element={<AboutMe />} />
              </Routes>
            </main>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
