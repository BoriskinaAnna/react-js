import React, {Component} from 'react';
import 'js/components/newLabForm/newLabFormStyle.scss';
import {translate} from 'react-i18next';
import Modal from 'react-modal';
import ModalWindowHeader from 'js/components/modalWindowHeader';

Modal.setAppElement('#content');


class LabForm extends Component {

    render() {
        const {t, isAddLabShowed, closeAddLab} = this.props;
        return (
            <Modal
                isOpen={isAddLabShowed}
                onRequestClose={closeAddLab}
                className="Modal"
                overlayClassName="Overlay"
            >
            <div className="newLabFormContainer">
               <div className="newLabForm">
                   <ModalWindowHeader close={closeAddLab}/>
                   <div>
                       <div className="title">{t('courseName')}</div>
                       <input className="input"/>
                   </div>
                   <span className="title">{t('trainingDate')}</span>

                   <div className="bloc">
<div className="start">   <div>{t('start')}</div>
   <div> {t('end')}</div>
</div>

                       <div className="dates">
                           <input className="input"/>

                           <input className="input"/>
                       </div>


                   </div>
                   <div>
                       <span className="title">{t('admissionDate')}</span>
                       <div className="block">
                           <div className="start">
                               <span> {t('start')}</span>
                               <span> {t('end')}</span>
                           </div>

                           <div className="dates">
                               <input className="input"/>

                               <input className="input"/>
                           </div>
                       </div>
                   </div>
                   <div>
                       <span className="title">{t('city')}</span>
                       <input className="input"/>
                   </div>
                   <div>
                       <span className="title">{t('courseType')}</span>
                       <input className="input"/>
                   </div>
                   <button type="submit" className="btnSave">
                       {t('add')}
                   </button>
               </div>
            </div>
            </Modal>
        )
    }
}
export default translate('translations')(LabForm)