import express from 'express'
import {deleteTeam, getAllTeams, getTeam, postTeam,updateTeam} from './teamHandlers'
import { postSchema, validateTeamExists } from '../../middlerwares/validation/teams/teamsSchema';
import validateInput from '../../middlerwares/validation/validation';
const teamsRouter = express.Router();

teamsRouter.get('/',getAllTeams);
teamsRouter.get('/:id',validateTeamExists,validateInput,getTeam);
teamsRouter.post('/',postSchema,validateInput,postTeam);
teamsRouter.delete('/:id',validateTeamExists,validateInput,deleteTeam);
teamsRouter.put('/:id',validateTeamExists,validateInput,updateTeam)
export {teamsRouter}