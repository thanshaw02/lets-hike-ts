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
import {
  Activity,
  NationalParkServiceActivityResponse,
  NationalParkServiceParkResponse,
} from "../model/nationalParkServiceResponse";
import ActivitySelectionComponent from "./ActivitySelectionComponent";
import NationalParkListComponent from "./NationalParkListComponent";

const HomePage: FC<unknown> = () => {
  const [selectedActivityName, setSelectedActivityName] =
    useState<string>("");
  const [activityResponse, setActivityResponse] =
    useState<NationalParkServiceActivityResponse>();
  const [parkResponse, setParkResponse] =
    useState<NationalParkServiceParkResponse>();
  const [error, setError] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  useEffect(() => {
    setIsLoaded(false);
    NationalParkServicesAPI.getActivityCategories().then(
      (parkServiceResponse) => {
        setActivityResponse(parkServiceResponse);
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
      activityResponse?.data.find((a) => a.name === activityName);
    if (!selectedActivity) {
      setError("Could not find selected activity");
      return;
    }

    setIsLoaded(false);
    NationalParkServicesAPI.getParksByActivity(selectedActivity).then(
      (parkServiceResponse) => {
        setSelectedActivityName(selectedActivity.name);
        setParkResponse(parkServiceResponse);
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
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: { md: 18 },
        }}
      >
        <Paper
          component="form"
          onSubmit={handleOnSubmit}
          elevation={9}
          sx={{ p: 3 }}
        >
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
                value={selectedActivityName}
                activities={activityResponse?.data}
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
      </Box>

      <NationalParkListComponent
        isLoaded={isLoaded}
        parkResponse={parkResponse}
      />
    </>
  );
};

export default HomePage;
