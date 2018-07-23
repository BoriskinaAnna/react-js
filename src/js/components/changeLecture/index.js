import React, {Component} from 'react';
import 'js/components/changeLecture/changeLecture.scss';
import {translate} from 'react-i18next';
import Modal from 'react-modal';
import ModalWindowHeader from 'js/components/modalWindowHeader';

Modal.setAppElement('#content');

class ChangeLecture extends Component {

    render() {
        const {t, isAddLabShowed, closeAddLab} = this.props;

        return (
            <Modal
                isOpen={isAddLabShowed}
                onRequestClose={closeAddLab}
                className="changeLectureModal"
                overlayClassName="Overlay"
            >
                <div className="changeLectureContainer">
                    <div className="changeLecture">
                        <ModalWindowHeader close={closeAddLab}/>
                        <div>
                            <div className="title">{t('courseName')}</div>
                            <input className="input"/>
                        </div>

                        <div className="bloc">
                            <div>
                                <div className="title">{t('time')}</div>
                                <input className="input"/>

                            </div>

                            <div className="dates">

                                <div className="title"> {t('duration')}</div>
                                <input className="input"/>
                            </div>
                        </div>


                            <span className="title">{t('lecturer')}</span>
                            <input className="input"/>



                            <span className="title">{t('city')}</span>
                            <input className="input"/>


                        <button type="submit" className="btnSave">
                            {t('add')}
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default translate('translations')(ChangeLecture)