import { Grid } from "@mui/material";
import { FC } from "react";
import { ParkResponse } from "../../model/nationalParkServiceResponse";
import CommonParkComponent from "./CommonParkComponent";


type ParkActivityType = {
  parkActivityResponse: ParkResponse;
};

// possibly use this component as a section for each activity
// so display the activity name and seperate each of these components by activity name??

const ParkActivityComponent: FC<ParkActivityType> = ({
  parkActivityResponse
}) => {
  const activityParks = parkActivityResponse.parks;

  return (
    <>
      {activityParks.map((park) => (
        <Grid
          item
          key={park.parkCode}
          xs={4}
          sx={{ mr: 2, mt: 3 }}
        >
          <CommonParkComponent park={park} />
        </Grid>
      ))}
    </>
  );
};

export default ParkActivityComponent;