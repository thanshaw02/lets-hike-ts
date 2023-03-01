export type Park = {
  states: string;
  parkCode: string;
  designation: string;
  fullName: string;
  url: string;
  name: string;
};

export type Activity = {
  id: string;
  name: string;
};

type NationalParkServiceResponse = {
  total: string;
  limit: string;
  start: string;
  data: Array<any>;
};

// export type CommonNationParkServiceType = Activity | Park;

export default NationalParkServiceResponse;
