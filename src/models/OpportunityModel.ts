import type { Opportunity } from "../interfaces/Opportunity";

export class OpportunityModel {
  static getShortDescription(opportunity: Opportunity): string {
    return opportunity.description.length > 80
      ? opportunity.description.substring(0, 80) + "..."
      : opportunity.description;
  }

  static isRemote(opportunity: Opportunity): boolean {
    return opportunity.type.toLowerCase().includes("remote");
  }
}