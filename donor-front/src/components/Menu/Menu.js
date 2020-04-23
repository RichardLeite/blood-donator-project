import React, { Component} from 'react';
import './Menu.css';

class Menu extends Component {
    constructor(){
        super()
        this.state = {
            showForm: false

        }
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render () {

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
            <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
            ):(
                <a className="menu__link" href={link.link}>{link.label}</a>
            );

        return (
            <li key={index} className="menu__list-item">
                {linkMarkup}
            </li>
        );

    });
    
        return(
        <nav className="menu">
            <h1 style={{
                backgroundImage: 'url(' + this.props.logo + ')'
            }} className="menu__logo">Blood Donator</h1>

            <div className="menu__right">
                <ul className="menu__list">
                    {linksMarkup}
                </ul>
            </div>
        </nav>
        );
    }


}

export default Menu;