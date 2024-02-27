import Header from "./components/Header";
import Main from "./components/Main";

function App(toggleTheme) {
  return (
    <div className="min-h-screen bg-indigo-100 dark:bg-black dark:text-white">
      <Header toggleTheme={toggleTheme} />
      <Main />
    </div>
  );
}

export default App;
