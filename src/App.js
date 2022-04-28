import "./styles.css";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Content from "../Components/Content";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Content />
    </div>
  );
}
