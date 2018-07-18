import React, {Component} from 'react';
import Lab from 'js/components/lab/';
import 'js/components/labsList/labsListStyle.scss';
import {Link} from 'react-router-dom';


class Index extends Component {

    render() {
        const {labs} = this.props;
        const labElements = labs.map((lab, index) =>
            <div key = {index} className="lab-list__lab">
                <Lab lab={lab}/>
            </div>
        );

        return (
            <div className="labsContainer">
                <div className="labsContainer__buttonAdd">
                    <Link to="/addNewLab" className="labsContainer__buttonContent">
                        +
                    </Link>
                </div>
                {labElements}
            </div>
        )
    }
}
export default Index