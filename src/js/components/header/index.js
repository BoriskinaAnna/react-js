import React, {Component} from 'react';
import 'js/components/header/headerStyle.scss';
import {translate} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Modal} from 'react-modal';


class Index extends Component {
    getInitialState(){
        return { modalIsOpen: false };
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const {t} = this.props;
        return (
            <header>
                <div>
                    <Link to="/" className="logo"/>
                </div>
                <div>
                    <Link to="/authorization" className="authorizationBtn">
                        {t('btnAuthorization')}
                        </Link>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles} >

                    <h2 ref="subtitle">Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </header>
        )
    }
}
export default translate('translations')(Index)