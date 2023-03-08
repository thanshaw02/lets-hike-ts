import { FC } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { NationalParkServiceParkResponse } from "../../model/nationalParkServiceResponse";
import ParkActivityComponent from "./ParkActivityComponent";

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
          {parkResponse?.data.map((pr) => (
            <ParkActivityComponent 
              key={pr.id}
              parkActivityResponse={pr}
            />
          ))}
        </>
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default NationalParkListComponent;
