import * as Location from "expo-location";
import { useEffect, useState } from "react";

type LatLng = {
  lat: number;
  lng: number;
};

export function useLocation() {
  const [location, setLocation] = useState<LatLng>();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Please allow access to location");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const lat = location.coords.latitude;
      const lng = location.coords.longitude;
      setLocation({ lat, lng });
    })();
  }, []);

  return { location, errorMsg };
}
