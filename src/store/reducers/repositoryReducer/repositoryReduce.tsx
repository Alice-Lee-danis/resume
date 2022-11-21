import { actionRepository, repositoryActions, stateRepository, ItypeRepository } from "./typeRepository";


const arrRepository:stateRepository ={
    repository:[
        {   name:"Watch store",
            stack:"Vue",
            libraries:"vue-router, vuex", 
            language:"Java script",
            link:"https://github.com/Alice-Lee-danis/watch_store_vue"
        },
        {   name:"Weather",
            stack:"Vue",
            libraries:"vuex, axios", 
            language:"Java script",
            link:"https://github.com/Alice-Lee-danis/weather_vue"
        },
        {
            name:"Task(host, form, bd)",
            stack:"WCF, WPF",
            libraries:"LINQ, Sqlite", 
            language:"C#",
            link:"https://github.com/Alice-Lee-danis/TestTask"
        }]
}

export const RepositoryReducer = (state:stateRepository = arrRepository, action:actionRepository):stateRepository=>{
    switch(action.type){
        case repositoryActions.GET_REPOSITORY:
                return state 
            break;
        default:
                return state 
            break;
    }
}