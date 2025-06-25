import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DayList />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_day" element={<CreateDay />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </div>
  );
}

export default App;