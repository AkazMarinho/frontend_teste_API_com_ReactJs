import { TopBar } from "./pages/layout/TopBar";
import { List } from "./pages/server-front/List";
import style from './App.module.css'
import { Register } from "./pages/server-front/Register";

function App() {
  return (
    <div className={style.content}>
      <TopBar/>
      <List/>
      <Register/>
    </div>
  );
}

export default App;
