import { Request, Response } from "express";
import relationshipService from "../services/relationshipService.js";
import { Relationship } from "../types/relationship";

async function createRelationship(req: Request, res: Response) {
  const relationship: Relationship = req.body;

  await relationshipService.insertRelationship(relationship);

  return res.send("relationship created successfully").status(200);
}

export default {
  createRelationship,
};
