import { body,param } from "express-validator";
import Team from "../../../models/team";

const postSchema=
[
    body("name").exists({checkFalsy:true})
    .withMessage("name property is mandatory").isString()
    .withMessage("name property has to be a string"),
    body("conference").exists({checkFalsy:true}).withMessage("conference property is mandatory")
    .isString().withMessage("conference property has to be a string").isAlpha().
    withMessage("conference property has to contain letters only").custom(async (conference:string) => {conference.toLowerCase() in ['east','west']
        
    })
]


const validateTeamExists = 
[
    param('id').exists({checkFalsy:true}).withMessage("id parameter is mandatory").isMongoId().withMessage("parameter must be a Mongo id").custom(async(teamId:String)=>
    {
        const teamTofind = await Team.findById(teamId);
        if(teamTofind ==null)
        {
            throw new Error("Team with the id specified does not exists");
        }
    })
]

export{postSchema,validateTeamExists}