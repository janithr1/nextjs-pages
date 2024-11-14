import dbData from "../../database/processed/db.json";

export default function handler(req, res) {
    const digital_right_pillar_definitions = dbData.digital_right_pillar_definitions;
    const { pillar } = req.query;
    console.log('ddd',pillar)
    if (!pillar) {
      res.status(400).json({ message: "Pillar is required" });
      return;
    }

    // Use filter to return an array of all matching stages
    const stages = digital_right_pillar_definitions
    .filter(
      (d) => d["Pillar"] === pillar
    );

    // If no stages are found, return an empty array or a message
    if (stages.length === 0) {
      res.status(404).json({ message: "No stages found for the selected pillar" });
      return;
    }

    res.status(200).json(stages);
};
