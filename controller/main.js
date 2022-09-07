import Agents from "../models/Agents.js";
import Property from "../models/Property.js";

// create a property
export const createProperty = async (req, res) => {
  // check if user is agent
  if (await Agents.findOne({ agentId: req.params.agentId })) {
    const property = new Property(req.body);

    const savedProperty = await property.save();

    return res.status(200).json(savedProperty);
  }
  return res.status(403).json("property can only be created By agents");
};
// delete a property
export const deleteProperty = async (req, res) => {
  //property Id
  const propertyId = req.params.propertyId;

  const result = await Property.findByIdAndRemove({ _id: propertyId });

  return res.status(200).json(result);
};
// update a property
export const updateProperty = async (req, res) => {
  //property Id
  const propertyId = req.params.propertyId;

  await Property.findByIdAndUpdate(
    { _id: propertyId },
    { $set: req.body },
    { new: true },
    (err, result) => {
      if (err || !result) return res.status(400).json("something went wrong!!");
      return res.status(200).json(result);
    }
  );
};
export const properties = async (req, res) => {
  const result = await Property.find();

  return res.status(200).json(result);
};

// find single property
export const PropertyById = async (req, res) => {
  const propertyId = req.params.propertyId;
  const result = await Property.findById({ _id: propertyId });

  return res.status(200).json(result);
};
