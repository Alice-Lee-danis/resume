import React from "react"
import { ITechnologyType } from "../../../store/reducers/technologyReducer/technologyType"
import classes from "./technologyCard.module.css"
import card_design from "../../static/card-disign.png"

const TechnologyCard:React.FC<ITechnologyType> = ({language, level, stack,libraries})=>{
    return (
        <div className={classes.card}>
            <h1>{language}</h1>
            <p className={classes.card__level}>Level: {level}</p>
            <p className={classes.card__stack}>Stack technology: {stack}</p>
            <p className={classes.card__framework}>Libraries: {libraries}</p>
            <img className={classes.card_design} src={card_design} alt="" />
        </div>
    )
}

export default TechnologyCard 