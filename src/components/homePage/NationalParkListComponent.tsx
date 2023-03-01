import { FC } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { NationalParkServiceParkResponse } from "../../model/nationalParkServiceResponse";
import CommonParkComponent from "./CommonParkComponent";

type NationalParkListType = {
  isLoaded: boolean;
  parkResponse?: NationalParkServiceParkResponse;
};

// Left off here: issue with my typing, TS doesn't think "parks" exists in the "ParkResponse" type
// "parks" does in fact exist on the "ParkResponse" type, so something weird happening

const NationalParkListComponent: FC<NationalParkListType> = ({
  isLoaded,
  parkResponse,
}) => {
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        mt: { md: 10 },
      }}
    >
      {isLoaded ? (
        <>
          {/* using first index here only because we are getting one result currently, this does need to change though */}
          {parkResponse?.data[0].parks.map((park) => {
            return (
              <Grid
                item
                key={park.parkCode}
                xs={4}
                sx={{ mr: 2, mt: 3 }}
              >
                <CommonParkComponent park={park} />
              </Grid>
            );
          })}
        </>
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default NationalParkListComponent;
