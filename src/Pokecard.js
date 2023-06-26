
import './Pokecard.css';

function Pokecard (props) {
    return (
        <div className='Pokecard'>
            <h3 className="Pokecard-name">{props.data.name}</h3>
            <img className="Pokecard-img" src={props.data.img}/>
            <span><strong>Type:</strong> {props.data.type}</span>
            <span><strong>XP:</strong> {props.data.base_experience}</span>
        </div>
    )
}

export default Pokecard;