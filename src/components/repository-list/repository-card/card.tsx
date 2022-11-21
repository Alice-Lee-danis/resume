import React from "react"
import { ItypeRepository } from "../../../store/reducers/repositoryReducer/typeRepository"
import classes from "./repositoryCard.module.css"

const RepositoryCard:React.FC<ItypeRepository> = ({name, stack, libraries, language, link})=>{
    return (
        <div className={classes.card}>
            <a href={link} className={classes.card__link}>
                <h1 className={classes.card__name}>{name}</h1>
                <p className={classes.card__stack}>Stack: {stack}</p>
                <p className={classes.card__libraries}>({libraries})</p>
                <p className={classes.card__language}>Language: {language}</p>
            </a>
        </div>
    )
}

export default RepositoryCard 