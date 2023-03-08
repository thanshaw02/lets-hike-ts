import { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { ParkBase as Park } from "../../model/nationalParkServiceResponse";

type CommonParkType = {
  park: Park;
};

const CommonParkComponent: FC<CommonParkType> = ({ park }) => {
  const navigate = useNavigate();
  const { states, parkCode, designation, fullName, url, name } = park;

  return (
    <Card key={name} elevation={9}>
      <CardHeader title={fullName} subheader={designation} />
      <CardContent>
        <Typography variant="body1">
          This national park spans the state/s of: {states}
        </Typography>
        <Typography variant="body2">
          National park code: {parkCode}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/park?parkCode=${parkCode}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CommonParkComponent;
