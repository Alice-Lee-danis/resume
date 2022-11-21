import React from "react"
import RepositoryCard from "./repository-card/card"
import classes from "./repositoryList.module.css"
import { useSelectorRepository } from "../../store/hooks/repositoryHooks"
import { ItypeRepository } from "../../store/reducers/repositoryReducer/typeRepository"

const RepositoryList:React.FC = ()=>{
    const arrRepository = useSelectorRepository(state=>state.RepositoryReducer.repository)

    if(arrRepository.length==0){
        return (
            <div style={{
                fontSize: '20px'
            }}>not found repository</div>
        )
    }

    return (
        <div className={classes.list}>
            {
                arrRepository.map((x:ItypeRepository)=>{
                    return (
                        <RepositoryCard name={x.name} stack={x.stack} libraries={x.libraries} language = {x.language} link={x.link}></RepositoryCard>
                    )})
            }
            
        </div>
    )
}

export default RepositoryList 