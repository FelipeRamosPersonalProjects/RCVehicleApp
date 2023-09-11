import axios from 'axios';
import {ConnectVehicleRes} from './Home.interface';

export async function connectVehicle(
  serverIP: string,
  vehicleID: string,
): Promise<ConnectVehicleRes> {
  const ipPattern = /(?:\d{1,3}\.){3}\d{1,3}/;

  // Checking if it's a valid IP address pattern before send the HTTP request
  if (new RegExp(ipPattern).test(serverIP)) {
    try {
      console.log('IP: ', serverIP);
      const connected = await axios.post(`http://${serverIP}/vehicle-connect`, {
        vehicleID,
      });

      console.log(connected.data);
      return {success: true, data: connected};
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    return {error: true, errorMessage: 'Bad IP pattern!'};
  }
}
