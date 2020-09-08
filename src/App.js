import React from 'react' //rafce functional comp
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ListItems from './components/ListItems';
import About from './pages/About';
import ToDo from './pages/ToDo';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar title='ToDo List App'/>
        <Route path="/" exact component={ListItems}/>
        <Route path="/about" component={About}/>
        <Route path="/todo" exact component={ToDo} />
        <Route path="/todo/:id" component={ToDo}/>
      </div>
    </Router>
  )
}

const styleH1 = {
  color: 'white',
  textAlign: 'center',

};

export default App
