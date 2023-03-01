type NationaParkBaseResponse = {
  total: string;
  limit: string;
  start: string;
};

/********************************************
 *          Activity Response Models        *
 ********************************************/

export type Activity = {
  id: string;
  name: string;
};

export type NationalParkServiceActivityResponse = {
  base: NationaParkBaseResponse;
  data: Array<Activity>;
};

/********************************************
 *          Park Response Models            *
 ********************************************/

export type Park = {
  states: string;
  parkCode: string;
  designation: string;
  fullName: string;
  url: string;
  name: string;
};

export type ParkResponse = {
  id: string; // activity id
  name: string; // activity name
  parks: Array<Park>;
};

// an array of ParkResponse is returned, meaning it can return multiple ParkResponse's
// depending on how many Activities are selected
export type NationalParkServiceParkResponse = {
  base: NationaParkBaseResponse;
  data: Array<ParkResponse>;
};
