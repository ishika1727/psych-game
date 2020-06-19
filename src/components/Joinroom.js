import React from 'react';
import '../css/joinroom.css';
// import backi from '../assests/back.jpeg';

class Joinroom extends React.Component {
    render() {
        return (
            // styles={{ backgroundImage:'url(${backi})' }}
            <div className="joinroom-main" >
                <div className="joinroom-text">
                    ENTER SECRET CODE !
                </div>
                <div className="input-code">
                    <Inputbox /> <Inputbox /> <Inputbox /> <Inputbox /> <Inputbox /> <Inputbox /> <Inputbox /> <Inputbox />
                </div>
                <div className="joinroom-button">
                    <a href="" className="button">JOIN</a>
                </div>
            </div>
        );
    }
}
class Inputbox extends React.Component {
    render() {
        return (
            <div className="input-box">
                <input type="text" className="input-text" maxLength="1" placeholder="-"></input>
            </div>
        );
    }
}
export default Joinroom