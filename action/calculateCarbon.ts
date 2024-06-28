import { EMISSION_FACTORS } from "@/constant/emmision-factor";

export const calculateCarbonEmission = ({
  dist,
  electricity,
  meals,
  waste,
}: {
  dist: number;
  electricity: number;
  meals: number;
  waste: number;
}) => {
  console.log(dist, electricity, meals, waste, "from server c-c");
  // normalize
  const yearly_dist = dist * 365;
  const yearly_electricity = electricity * 12;
  const yearly_meals = meals * 365;
  const yearly_waste = waste * 52;

  //Calculate carbon emissions
  let transportation_emissions = EMISSION_FACTORS.Transportation * yearly_dist;
  let electricity_emissions = EMISSION_FACTORS.Electricity * yearly_electricity;
  let diet_emissions = EMISSION_FACTORS.Diet * yearly_meals;
  let waste_emissions = EMISSION_FACTORS.Waste * yearly_waste;

  //  convert to tons
  transportation_emissions /= 1000;
  electricity_emissions /= 1000;
  diet_emissions /= 1000;
  waste_emissions /= 1000;

  return {
    transportation_emissions,
    electricity_emissions,
    diet_emissions,
    waste_emissions,
  };
};
