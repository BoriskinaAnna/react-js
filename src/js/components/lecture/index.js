import React, {Component} from 'react';
import 'js/components/lecture/lectureStyle.scss';
import { translate } from 'react-i18next';


class Index extends Component {

    constructor(){
        super();
        this.state = {
            isChange: false
        };
        this.showChange = this.showChange.bind(this);
    }

    showChange(){

        debugger;

        if(this.state.isChange){
            this.props.lecture.lectureDuration = document.getElementsByClassName('changeDuration').value;
        }
        this.setState({ isChange: !this.state.isChange })
    }

    render() {
        const {lecture, t, showChangeLecture} = this.props;

        const duration =  this.state.isChange ?
            <input className="changeDuration" defaultValue={lecture.lectureDuration}/>:
            <span className="lecture__duration">{lecture.lectureDuration}</span>;
        const time =  this.state.isChange ?
            <input className="changeInputSmall" defaultValue={lecture.lectureTime}/>:
            <h5 className="lecture__time">{lecture.lectureTime}</h5>;
        const lecturer =  this.state.isChange ?
            <input className="changeInputBig" defaultValue={lecture.lectureLecturer}/>:
            <h5 className="lecture__lecturer"> {lecture.lectureLecturer}</h5>;
        const place =  this.state.isChange ?
            <input className="changeInputSmall" defaultValue={lecture.lecturePlace}/>:
            <h5 className="lecture__place">{lecture.lecturePlace}</h5>;

        return (
            <div className="lecture">
                <div className="lecture__date">
                    <h3 className="lecture__day">
                       {lecture.lectureDay}
                    </h3>
                    <h4>
                        {lecture.lectureMonth}
                    </h4>
                </div>
                <div className="lecture__theme">
                    <h4>{lecture.lectureTheme}</h4>
                    <span>
                        {t('duration')}: {duration}
                    </span>
                </div>
                <div>
                    <span className="titles"> {t('time')}</span>
                    :
                    {time}
                </div>
                <div>
                    <span className="titles">  {t('lecturer')}</span>
                    :
                    {lecturer}
                </div>
                <div>
                    <span className="titles">{t('place')}</span>
                    :
                    {place}
                </div>
                <button onClick={showChangeLecture}>
                    \\
                </button>
            </div>
        )
    }
}
export default translate('translations')(Index)