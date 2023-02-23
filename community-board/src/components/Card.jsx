import NetsVHeat from '../assets/netsvsheat.jpg'
import './Card.css'

export default function Card(props){
    return (
        <div className="card">
            <div className="imageCard">
                <img id="gameImg" src={props.image} width={300} height={168.75}></img>
            </div>
            <div className='textSection'>
                <h3>{props.away} vs {props.home}</h3>
                <h3><span className={props.awayScore > props.homeScore? 'won':'losing'}>{props.awayScore}</span> - <span className={props.awayScore < props.homeScore? 'won':'losing'}>{props.homeScore}</span></h3>
                <a href={props.link} className='boxScoreLink'>Box Score</a>
            </div>
            <div className='recordColumn'>
                <p className='WorL' id={props.won == 'won'?'W':'L'}>{props.won == 'won'?'W':'L'}</p>
            </div>
        </div>
    )
}