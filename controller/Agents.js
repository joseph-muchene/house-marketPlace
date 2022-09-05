import Agent from "../models/Agents.js";

// create agent
export const createAgent = async (req, res) => {
  const agent = new Agent(req.body);

  const savedAgent = await agent.save();

  return res.status(200).json(savedAgent);
};
// update agent
export const updateAgent = async (req, res) => {
  await Agent.findByIdAndUpdate(
    { _id: req.params.propertyId },
    { $set: req.body },
    { new: true },
    (err, result) => {
      if (err || result) return res.status(400).json("something went wrong");
      return res.status(200).json(result);
    }
  );
};

// delete agent
export const deleteAgent = async (req, res) => {
  //property Id
  const agentId = req.params.agentId;

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
  const result = await Agent.findById({ _id: agentId });

  return res.status(200).json(result);
};
