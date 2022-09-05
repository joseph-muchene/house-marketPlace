import Property from "../models/Property";

// create a property
export const createProperty = async (req, res) => {
  const property = new Property(req.body);

  const savedProperty = await property.save();

  return res.status(200).json(savedProperty);
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
