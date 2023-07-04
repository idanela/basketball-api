import express from 'express'
import {teamsRouter} from './teams/index'
import playersRouter from './players';
const baseRoter = express.Router();

baseRoter.use('/teams',teamsRouter);
baseRoter.use('/players',playersRouter);




export default baseRoter;

