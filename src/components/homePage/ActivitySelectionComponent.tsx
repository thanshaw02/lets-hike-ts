import { InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { Activity } from "../../model/nationalParkServiceResponse";

type ActivitySelectionType = {
  name: string;
  value: string;
  activities?: Array<Activity>;
};

const ActivitySelectionComponent: FC<ActivitySelectionType> = ({
  name,
  value,
  activities,
}) => {
  const [selectedActivity, setSelectedActivity] =
    useState<string>(value);

  return (
    <Box>
      <InputLabel id="activity-input">Activity</InputLabel>
      <Select
        fullWidth
        name={name}
        id="activity-input"
        value={selectedActivity}
        onChange={(activity) =>
          setSelectedActivity(activity.target.value)
        }
      >
        {activities?.map((activity) => {
          return (
            <MenuItem key={activity.id} value={activity.name}>
              {activity.name}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

export default ActivitySelectionComponent;
