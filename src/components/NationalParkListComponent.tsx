import { FC } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { NationalParkServiceParkResponse } from "../model/nationalParkServiceResponse";
import CommonParkComponent from "./CommonParkComponent";

type NationalParkListType = {
  isLoaded: boolean;
  parkResponse?: NationalParkServiceParkResponse;
};

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
              <Grid item xs={4} sx={{ mr: 2, mt: 3 }}>
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
