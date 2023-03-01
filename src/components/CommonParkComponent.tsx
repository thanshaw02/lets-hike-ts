import {
  Card,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Park } from "../model/nationalParkServiceResponse";

type CommonParkType = {
  park: Park;
};

const CommonParkComponent: FC<CommonParkType> = ({ park }) => {
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
        <Link href={url}>
          <Typography variant="subtitle1">
            More information can be found here
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CommonParkComponent;
