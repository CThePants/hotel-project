import React, {Component} from 'react';
import GetRates from './GetRates';

class Nav extends Component {
    render(){
        return (
            <div className='navsearch'>
            <nav className='nav navbar'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    
                </div>
                <div className='collapse navbar-collapse'>
                    <ul className='nav navbar-nav navbar'>
                        <li className='navlinks'><a href='/'>Home</a></li>
                        <li className='navlinks'><a href='#cities' id='cities'>Cities We Represent</a></li>
                        <li className='navlinks'><a href='#search' id='search'>Search Hotels</a></li>
                        <li className='navlinks'><a href='#contact' id='contact'>Contact Us</a></li>
                    </ul>
                </div>
            </div>        
        </nav> 
        
        <GetRates />
        
        </div>
        );
    }
}


export default Nav;