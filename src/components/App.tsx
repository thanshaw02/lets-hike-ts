import { FC, useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import NationalParkServicesAPI from "../api/nationalParkService";
import NationalParkServiceResponse, {
  Activity,
  Park,
} from "../model/nationalParkServiceResponse";
import ActivitySelectionComponent from "./ActivitySelectionComponent";
import NationalParkListComponent from "./NationalParkListComponent";

const App: FC<unknown> = () => {
  const [response, setResponse] =
    useState<NationalParkServiceResponse>();
  const [parks, setParks] = useState<Array<Park>>([]);
  const [error, setError] = useState<string>("");
  const [loaded, setIsLoaded] = useState<boolean>(true);

  useEffect(() => {
    setIsLoaded(false);
    NationalParkServicesAPI.getActivityCategories().then(
      (parkServiceResponse) => {
        // console.log(JSON.stringify(parkServiceResponse));
        setResponse(parkServiceResponse);
        setIsLoaded(true);
      },
      (err) => {
        console.error(`Error fetching activities -- ${err}`);
        setError("Failed to fetch activities");
        setIsLoaded(true);
      }
    );
  }, []);

  const handleOnSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const activityName = formData.get("activity-name");
    if (!activityName) {
      setError("Please enter an activity");
      return;
    }

    const selectedActivity: Activity | undefined =
      response?.data.find((a) => a.name === activityName);
    if (!selectedActivity) {
      setError("Could not find selected activity");
      return;
    }

    setIsLoaded(false);
    NationalParkServicesAPI.getParksByActivity(selectedActivity).then(
      (parkServiceResponse) => {
        console.log(
          `Parks by activity:\n${JSON.stringify(
            parkServiceResponse.data[0]
          )}`
        );
        setParks(parkServiceResponse.data[0].parks as Array<Park>);
        setIsLoaded(true);
      },
      (err) => {
        console.error(`Error fetching parks by activity -- ${err}`);
        setError("Failed to load parks by activity");
        setIsLoaded(true);
      }
    );
  };

  return (
    <Box
      component="form"
      onSubmit={handleOnSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: { md: 18 },
      }}
    >
      <Paper elevation={9} sx={{ p: 3 }}>
        <Grid justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Park Activities
            </Typography>
          </Grid>

          {error && (
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}

          <Grid item xs={12} sx={{ mt: 3 }}>
            <ActivitySelectionComponent
              name="activity-name"
              activities={response?.data}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 3 }}>
            <Button
              fullWidth
              type="submit"
              variant="outlined"
              size="medium"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* list of parks after selecting an activity */}
      {parks.length !== 0 && (
        <NationalParkListComponent parks={parks} />
      )}
    </Box>
  );
};

export default App;
