import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ParkPage: FC<unknown> = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const parkCode = searchParams.get("parkCode");
    if (parkCode) {
      console.log(`Park code sent from home page: ${parkCode}`);
    }
  }, []);

  return <>Under Construction</>;
};

export default ParkPage;
