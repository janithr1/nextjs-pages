import { digital_right_pillar_definitions } from "../../database/processed/db.json";

// const digital_right_pillar_definitions =[
//     {
//         "Pillar": "Cross-Cutting Indicators",
//         "ColorBase": "#A75417",
//         "ColorTriple1": "#FFF",
//         "ColorTriple2": "#ffab8a",
//         "ColorTriple3": "#DE1568",
//         "colorMap": "stroke-pillar-dpinfrastructure"
//     },
//     {
//         "Pillar": "Freedom of Expression, Assembly and Association",
//         "ColorBase": "#9C27B0",
//         "ColorTriple1": "#FFF",
//         "ColorTriple2": "#a2e0f5",
//         "ColorTriple3": "#517Ce8",
//         "colorMap": "stroke-pillar-connectivity"
//     },
//     {
//         "Pillar": "Right to Privacy",
//         "ColorBase": "#887F13",
//         "ColorTriple1": "#FFF",
//         "ColorTriple2": "#ffd796",
//         "ColorTriple3": "#ed4b00",
//         "colorMap": "stroke-pillar-regulation"
//     },
//     {
//         "Pillar": "Right to Equality and Non-Discrimination",
//         "ColorBase": "#17A79C",
//         "ColorTriple1": "#FFF",
//         "ColorTriple2": "#e7ff87",
//         "ColorTriple3": "#02965d",
//         "colorMap": "stroke-pillar-government"
//     }
// ]

export default function handler(req, res) {
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
