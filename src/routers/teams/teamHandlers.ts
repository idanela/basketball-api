import { Request, Response } from "express";
import Team from "../../models/team";

const getAllTeams= async (req:Request, res:Response) =>
{
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({error})
    }
}

const getTeam=async(req:Request,res:Response)=>
{
    try {
        const teamTofind = await Team.findById(req.params.id);
        res.status(200).json(teamTofind);
        } catch (error) {
        res.status(500).json({error})
    }
}


const postTeam = async(req:Request, res:Response)=>
{
    const team = new Team({
        name:req.body.name,
        conference:req.body.conference})
        try {
            const newTeam = await team.save();
            res.status(201).json(newTeam);
        } catch (error) {
            res.status(500).json({error});
        }
}

const deleteTeam = async (req:Request, res:Response) => {
    try {
        await Team.findByIdAndDelete(req.params.id)
        res.status(204).json("Team deleted")
    } catch (error) {
        res.status(500).json({error});
    }
} 

const updateTeam = async (req:Request,res:Response) => {
    const newName = req.body.name;
    const newConference = req.body.conference;
    try {
        const teamToUpdate = await Team.findById(req.params.id);
        if(newName)
        {
            teamToUpdate!.name = newName; 
        }
        if(newConference)
        {
            teamToUpdate!.conference = newConference; 
        }
        await teamToUpdate!.save()
        res.status(202).json("Team was updated");
    } catch (error) {
        res.status(500).json({error})
    }

   
}


export {getAllTeams,getTeam,postTeam,deleteTeam,updateTeam,}