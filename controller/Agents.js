import Agent from "../models/Agents.js";
import { v4 as uuidv4 } from "uuid";
// create agent
export const createAgent = async (req, res) => {
  const agent = new Agent({ agentId: uuidv4(), ...req.body });

  const savedAgent = await agent.save();

  return res.status(200).json(savedAgent);
};
// update agent
export const updateAgent = (req, res) => {
  Agent.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
    (err, result) => {
      if (err || !result) {
        return res.status(400).json(err);
      }
      return res.status(200).json(result);
    }
  );
};

// delete agent
export const deleteAgent = async (req, res) => {
  //property Id
  const agentId = req.params.id;

  const result = await Agent.findByIdAndRemove({ _id: agentId });

  return res.status(200).json(result);
};
// find agents
export const Allgents = async (req, res) => {
  const result = await Agent.find();

  return res.status(200).json(result);
};

// find single agent
export const AgentById = async (req, res) => {
  const agentId = req.params.agentId;
  const result = await Agent.findOne({ agentId: agentId });

  return res.status(200).json(result);
};
