import React, {Component} from 'react';
import 'js/components/newLabForm/newLabFormStyle.scss';
import {translate} from 'react-i18next';


class LabForm extends Component {

    render() {
        const {t} = this.props;
        return (
            <div className="newLabFormContainer">
               <div className="newLabForm form-control">
                   <div>
                       <span className="title">{t('courseName')}</span>
                       <input className="form-control"/>
                   </div>
                   <div>
                       <span className="title">{t('trainingDate')}</span>
                       <div className="dates">
                           {t('start')}
                           <input className="form-control"/>
                           {t('end')}
                           <input className="form-control"/>
                       </div>
                   </div>
                   <div>
                       <span className="title">{t('admissionDate')}</span>
                       <div className="dates">
                           {t('start')}
                           <input className="form-control"/>
                           {t('end')}
                           <input className="form-control"/>
                       </div>
                   </div>
                   <div>
                       <span className="title">{t('city')}</span>
                       <input className="form-control"/>
                   </div>
                   <div>
                       <span className="title">{t('courseType')}</span>
                       <input className="form-control"/>
                   </div>
                   <button type="submit" className="btn btn-default">
                       {t('add')}
                   </button>
               </div>
            </div>
        )
    }
}
export default translate('translations')(LabForm)