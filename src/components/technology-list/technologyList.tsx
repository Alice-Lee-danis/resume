import React, { useState } from "react"
import TechnologyCard from "./technology-card/card"
import classes from "./technologyList.module.css"
import { useSelector } from "react-redux"
import { useSelectorRepository } from "../../store/hooks/repositoryHooks"
import { ITechnologyType } from "../../store/reducers/technologyReducer/technologyType"

const TechnologyList:React.FC = ()=>{
    const arrTechnology = useSelectorRepository(state=>state.TechnologyReducer.technology)

    if(arrTechnology.length==0){
            return (
                <div style={{
                    fontSize:'20px'
                }}>not found stack</div>
            )
        }

    return (
        <div className={classes.list}>
            {arrTechnology.map((x:ITechnologyType)=>{
                return (<TechnologyCard language={x.language} level={x.level} stack={x.stack} libraries={x.libraries}></TechnologyCard>)
            })}
        </div>
    )
}

export default TechnologyList 