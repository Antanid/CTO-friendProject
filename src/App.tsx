import "./App.css";
import AskQuestion from "./component/askOnQuestion/AskQuestion";
import Content from "./component/contentLogo/Content";
import Equipment from "./component/equipment/Equipment";
import FastCharge from "./component/fastCharge/FastCharge";
import Footer from "./component/footer/Footer";
import Freon from "./component/freon/Freon";
import Header from "./component/header/Header";
import WorkPlace from "./component/workPlace/Work";

function App() {
 
  return (
    <div className="App">
   
      <Header />
      <Content />
      <FastCharge />
      <Freon />
      <Equipment />

      <WorkPlace />
      <AskQuestion />
      <Footer />
    </div>
  );
}

export default App;
