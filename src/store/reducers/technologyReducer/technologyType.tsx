export interface ITechnologyType {
    language:string,
    level:string,
    stack?:string,
    libraries?:string,
}

export interface IStateTechnology {
    technology:Array<ITechnologyType>
}

export enum repositoryActions {
    GET_REPOSITORY ='GET_REPOSITORY'
}

interface IActionGetTechnology {
    type:repositoryActions.GET_REPOSITORY,
    payload?:Array<ITechnologyType>
}

export type actionRepository = IActionGetTechnology