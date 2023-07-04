import { Request, Response } from "express";
import Player from "../../models/player";
import { requestWithPlayer,playerToSave} from '../../types'

const getAllPlayers= async (req:Request, res:Response) =>
{
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({error})
    }
} 

const getPlayer = async (req:Request,res:Response)=>
{
    try {
        const playerToFind = await Player.findById(req.params.id);
        res.status(200).json(playerToFind);
    } catch (error) {
        res.status(500).json({error})
    }
}

const addPlayer =async (req:Request,res:Response) => {
    const player = new Player({
        name:req.body.name,
        team:req.body.team,
        height:req.body.height
    })

    try {
         const newPlayer = await player.save();
         res.status(201).json(newPlayer)
    } catch (error) {
        res.status(500).json({error})
    }
}


const deletePlayer = async(req:Request,res:Response)=>
{
    try {
        
        await Player.findByIdAndDelete(req.params.id);
        res.status(202).json("Player deleted")
    } catch (error) {
        res.status(500).json({error});
    }
}


const updatePlayer = async (req:requestWithPlayer,res:Response)=>
{
    console.log("GOT HERE")

    const newName = req.body.name;
    const newHeight = req.body.height;
    try {
        const playerToUpdate = req!.playerFromReq as playerToSave ;
        console.log(playerToUpdate)

        if(newName)
        {
            playerToUpdate!.name = newName; 
        }
        if(newHeight)
        {
            playerToUpdate!.height = newHeight; 
        }
        console.log("GOT THERE")
        await playerToUpdate!.save!()
        res.status(202).json("Player was updated");
    } catch (error) {
        res.status(500).json({error})
    }
}

export{getAllPlayers,addPlayer,deletePlayer,updatePlayer,getPlayer}