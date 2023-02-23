import netsLogo from '../assets/brooklynNetsLogo.png'
import './Navbar.css'

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="inner">
                <div className="image">
                    <img src={netsLogo} width={100} height={100}></img>
                </div>
                <h1 id='title'>Brooklyn Nets Past Games</h1>
            </div>
        </div>
    )
}