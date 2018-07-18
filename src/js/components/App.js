import React, {Component} from 'react';
import LabsList from 'js/components/labsList/';
import labs from 'js/information-aboute-labs.json';
import 'bootstrap/dist/css/bootstrap.css';
import Header from 'js/components/header/';
import Footer from 'js/components/footer/';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Authorization from 'js/components/authorization/';
import LabForm from 'js/components/newLabForm/';
import 'js/components/appStyle.scss';


export class App extends Component {

    render() {

        return (
            <Router>
                <div className="content">
                    <Header/>
                    <Route exact path="/" component={() => (<LabsList labs={labs} />)}/>
                    <Route path="/authorization" component={Authorization}/>
                    <Route path="/addNewLab" component={LabForm}/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
export default App;