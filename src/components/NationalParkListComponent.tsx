import { Box } from "@mui/material";
import { FC } from "react";
import { Park } from "../model/nationalParkServiceResponse";
import CommonParkComponent from "./CommonParkComponent";

type NationalParkListType = {
  parks: Array<Park>;
};

const NationalParkListComponent: FC<NationalParkListType> = ({
  parks,
}) => {
  console.log(JSON.stringify(parks));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: { md: 78 },
      }}
    >
      {parks.map((park) => {
        return <CommonParkComponent park={park} />;
      })}
    </Box>
  );
};

export default NationalParkListComponent;
