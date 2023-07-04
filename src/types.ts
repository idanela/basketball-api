import { Request } from 'express';

type team={
    name:String,
    conference:String
}
type player = {
    name:String,
    playersteam:team,
    height:number
}
export interface requestWithPlayer extends Request
{
    playerFromReq?:player
}

export interface playerToSave extends player
{
    save?:Function
}

export{player}

