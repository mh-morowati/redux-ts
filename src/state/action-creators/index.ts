import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { useDispatch } from "react-redux";

const searchRepositories = (term: string) => {
    return async (dispach: any) => { 
        dispach ({
            type: ActionType.SEARCH_REPOSITORIES
        });
        try{

        } catch (err){
            dispach ({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}