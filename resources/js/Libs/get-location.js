export const getLocationByCoord = async (latitude, longitude) => {
    try {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        const { data } = await axios.get(url);

        return data || null;
    } catch {
        return false;
    }
}

export const requestLocationPermission = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    // window.localStorage.setItem(
                    //     "location",
                    //     JSON.stringify({
                    //         latitude: coords.latitude,
                    //         longitude: coords.longitude,
                    //     })
                    // );
                    resolve(coords);
                },
                (error) => {
                    // window.localStorage.removeItem("location");
                    reject(error);
                },
                {
                    enableHighAccuracy: true,
                }
            );
        } else {
            reject(new Error('Geolocation is not supported in this browser.'));
        }
    });
};
