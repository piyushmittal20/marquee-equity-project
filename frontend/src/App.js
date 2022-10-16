import "./App.css";
import CompanyListPage from "./pages/CompanyListPage";
import CompanyAddPage from "./pages/CompanyAddPage";
import Header from "./components/Header";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={CompanyListPage} />
      <Route path="/add" component={CompanyAddPage} />
    </div>
  );
}

export default App;
