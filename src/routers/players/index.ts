import { Router } from "express";
import { addPlayer, deletePlayer, getAllPlayers, updatePlayer } from "./playersHandlers";
import { playerExistsSchema, playerPostSchema } from "../../middlerwares/validation/players/playersSchema";
import validateInput from "../../middlerwares/validation/validation";

const playersRouter = Router();
playersRouter.get('/',getAllPlayers);
playersRouter.get('/:id',getAllPlayers);
playersRouter.post('/',playerPostSchema,validateInput,addPlayer);
playersRouter.delete('/:id',playerExistsSchema,validateInput,deletePlayer);
playersRouter.put('/:id',playerExistsSchema,validateInput,updatePlayer);


export default  playersRouter;