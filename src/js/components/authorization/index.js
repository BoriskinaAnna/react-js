import React, {Component} from 'react';
import 'js/components/authorization/authorizationStyle.scss';
import { translate } from 'react-i18next';
import Modal from 'react-modal';
import ModalWindowHeader from 'js/components/modalWindowHeader';

Modal.setAppElement('#content');

class Authorization extends Component {

    render() {
        const {t, isLoginShowed, closeLogin} = this.props;

        return (
            <Modal
                isOpen={isLoginShowed}
                onRequestClose={closeLogin}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="authorization">
                    <ModalWindowHeader close={closeLogin}/>
                    <h2 className="authorization__title">{t('logIn')}</h2>
                    <input type="text" className="authorization__input"
                           placeholder="Адрес электронной почты"/>
                    <input type="password" className="authorization__input"
                           placeholder="Пароль"/>
                    <div className="authorization__rememberMe">
                        <input type="checkbox" className="authorization__rememberMeCheckbox"/>
                        <label>{t('rememberMe')}</label>
                    </div>
                    <div className="authorization__forgotPassword">
                        <a href="">{t('forgotPassword')}</a>
                    </div>
                    <button className="authorization__btnLogin" type="submit">{t('btnAuthorization')}</button>
                </div>
             </Modal>
        )
    }
}
export default translate('translations')(Authorization)