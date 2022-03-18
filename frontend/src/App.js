import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';
import Updat from './components/Update';
import HomePage from './components/Home';
import AddSalary from './components/AddSalary';
import ViewSalary from './components/ViewSalary';
import UpdateSal from './components/UpdateSalary';



function App() {
  return (

    
    <Router>
      <Sidebar/>
      <Route path="/add" exact component={AddEmployee}/>
      <Route exact path="/view"><ViewEmployee/></Route>
      <Route exact path="/update/:id"><Updat/></Route>
      
      {/* <Route exact path="/"><HomePage/></Route> */}
<Route exact path="/"component={HomePage}/>
<Route path="/addSalary" exact component={AddSalary}/>
<Route exact path="/viewSalary"><ViewSalary/></Route>
    <Route exact path="/updatesal/:id"><UpdateSal/></Route>
      {/* <Header/> */}
      <section>
        <switch>

        </switch>
      </section>
     
    
  </Router>
  
  );
}

export default App;

