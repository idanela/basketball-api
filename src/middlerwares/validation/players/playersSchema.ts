import { Request } from 'express';
import { body, param } from "express-validator";
import Player from "../../../models/player";

const playerPostSchema = [
    body('name').exists({checkFalsy:true}).withMessage("name field is mandatory").
    isString().withMessage("name field has to be a string")
    ,body("team").exists({checkFalsy:true}).withMessage("You have to provide value to team identifier")
    .isMongoId().withMessage("team id must be a valid mongo id"),
    body("height").exists({checkFalsy:true}).withMessage("you have to provide vakue to heifht property")
    .isNumeric().withMessage("height property must be a number")
]

const playerExistsSchema =
[
    param('id').exists().withMessage("You have to procide and is as a parameter").
    isString().withMessage("you have to provide an id as a string").
    isMongoId().withMessage("You have to provide a valid mongo id")
    .custom(async(id:string,{req})=>{
        const player = await Player.findById(id);
        if(player == null)
        {
            throw new Error("player with the id spesified does not exists in database")
        }
        req!.playerFromReq = player;
        console.log()
    })
]

export{playerPostSchema,playerExistsSchema}