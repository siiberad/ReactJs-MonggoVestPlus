import React from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import "../assets/css/accountsetting.css"

class AppUserSetting extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className='custom-toggle' nav>
                        <Button id="bt-nav">
                            Account
                        </Button>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Link to='/profile/edit' className='profile'>
                            <DropdownItem>
                                Profil Saya
                        </DropdownItem>
                            <DropdownItem divider />
                        </Link>

                        <Link to='/' className='logout' onClick={this.props.handleLogout}>
                            <DropdownItem>
                                Keluar
                            </DropdownItem>
                        </Link>

                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default AppUserSetting;