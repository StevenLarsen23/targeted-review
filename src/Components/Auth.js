import { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemon } from "../redux/reducer";

const Auth = (props) => {

    useEffect(()=> {
        console.log('HIT')
        props.getPokemon()
    }, [])

return <div>
    <p>{props.pokemon ? props.pokemon.name : null}</p>
    </div>;
};

const mapStateToProps = (reduxState) => {
  
  return reduxState;
};

//-const mapDispatchToProps = {
//-getPokemon
//-}

export default connect(mapStateToProps, { getPokemon })(Auth);

//-export default connect(mapStateToProps, mapDispatchToProps)(Auth);
