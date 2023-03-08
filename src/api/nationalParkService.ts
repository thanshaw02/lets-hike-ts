import {
  Activity,
  NationalParkServiceActivityResponse,
  NationalParkServiceParkAmenitiesResponse,
  NationalParkServiceParkResponse,
} from "../model/nationalParkServiceResponse";

// this needs to be securely stored somewhere
const API_KEY = "LXt0tnqEQBnK8mahXwWssY2eIiGcAawKWt48oeL5";
const BASE_API_URL = "https://developer.nps.gov/api/v1";

const getActivityCategories =
  (): Promise<NationalParkServiceActivityResponse> => {
    const endpoint = `${BASE_API_URL}/activities?api_key=${API_KEY}`;
    const requestInfo = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    return new Promise((resolve, reject) => {
      fetch(endpoint, requestInfo).then((response) => {
        if (!response.ok) reject(response.status);
        resolve(response.json());
      }, reject);
    });
  };

const getParksByActivity = (
  activity: Activity
): Promise<NationalParkServiceParkResponse> => {
  const endpoint = `${BASE_API_URL}/activities/parks?id=${activity.id}&api_key=${API_KEY}`;
  const requestInfo = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    fetch(endpoint, requestInfo).then((response) => {
      if (!response.ok) reject(response.status);
      resolve(response.json());
    }, reject);
  });
};

const getAmenitiesByParkCode = (
  parkCode: string
): Promise<NationalParkServiceParkAmenitiesResponse> => {
  const endpoint = `${BASE_API_URL}/amenities/parksplaces?parkCode=${parkCode}&api_key=${API_KEY}`;
  const requestInfo = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    fetch(endpoint, requestInfo).then((response) => {
      if (!response.ok) reject(response.status);
      resolve(response.json());
    }, reject);
  });
};

const NationalParkServicesAPI = {
  getActivityCategories,
  getAmenitiesByParkCode,
  getParksByActivity,
};

export default NationalParkServicesAPI;
