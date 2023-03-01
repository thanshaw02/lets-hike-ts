type NationaParkBaseResponse = {
  total: string;
  limit: string;
  start: string;
};

type ParkResponseBase = {
  id: string;
  name: string;
};

export type ParkBase = {
  states: string;
  parkCode: string;
  designation: string;
  fullName: string;
  url: string;
  name: string;
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

export type ParkResponse = ParkResponseBase & {
  parks: Array<ParkBase>;
};

// an array of ParkResponse is returned, meaning it can return multiple ParkResponse's
// depending on how many Activities are selected
export type NationalParkServiceParkResponse = {
  base: NationaParkBaseResponse;
  data: Array<ParkResponse>;
};

/********************************************
 *      Park Amenities Response Models      *
 ********************************************/

export type NationalParkServiceParkAmenitiesResponse = {
  base: NationaParkBaseResponse;
  data: Array<ParkAmenities>;
};

type ParkAmenities = {
  id: string;
  name: string;
  parks: Array<ParkAmenitiesResponse>;
};

type ParkAmenitiesResponse = ParkBase & {
  places: Array<ParkPlaces>;
};

export type ParkPlaces = {
  title: string;
  id: string;
  url: string;
};
