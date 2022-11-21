import { actionRepository, IStateTechnology, repositoryActions } from "./technologyType";


const arrTechology:IStateTechnology = {
    technology: [
        {
            language:"Java Script",
            level:"junior+",
            stack:"Vue, React",
            libraries:"vue-router, vuex, react-router, redux, axios"
        },
        {
            language:"Type Script",
            level:"junior+",
            stack:"Vue, React",
            libraries:"vue-router, vuex, react-router, redux, axios"
        },
        {
            language:"C#",
            level:"junior+",
            stack:"Asp.net, WPF",
            libraries:"LINQ, Entity Framework"
        },   
    ]
}


export const TechnologyReducer = (state:IStateTechnology = arrTechology, action:actionRepository):IStateTechnology=>{
    switch(action.type){
        case repositoryActions.GET_REPOSITORY:
                return state 
            break;
        default:
                return state 
            break;
    }
}