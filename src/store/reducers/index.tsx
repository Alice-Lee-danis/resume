import { type } from '@testing-library/user-event/dist/type'
import {combineReducers} from 'redux'
import { RepositoryReducer } from './repositoryReducer/repositoryReduce'
import { TechnologyReducer } from './technologyReducer/technologuReduce'


export const combineReducer = combineReducers({
    RepositoryReducer,
    TechnologyReducer
})

export type reducerTypes = ReturnType<typeof combineReducer>