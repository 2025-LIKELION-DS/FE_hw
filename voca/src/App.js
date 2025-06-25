import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord.jsx";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<DayList></DayList>}></Route>
        <Route path="/day/:day" element={<Day></Day>}></Route>
        <Route path="/create_word" element={<CreateWord></CreateWord>}></Route>
        <Route path="/create_day" element={<CreateDay></CreateDay>}></Route>
        <Route path="*" element={<EmptyPage></EmptyPage>}></Route>
      </Routes>
    </div>
  );
}
export default App;


