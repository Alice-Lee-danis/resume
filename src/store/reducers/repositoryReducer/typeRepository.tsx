import { type } from "os"

export interface ItypeRepository {
    name:string,
    stack:string,
    libraries?:string, 
    language?:string,
    link?:string,
}

export interface stateRepository {
    repository:Array<ItypeRepository>,  
}

export enum repositoryActions {
    GET_REPOSITORY = 'GET_REPOSITORY'
}

interface IActionGetRepository {
    type:repositoryActions.GET_REPOSITORY,
    payload?:Array<ItypeRepository>
}

export type actionRepository = IActionGetRepository