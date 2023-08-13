export const fetchMarkerInformation = async () => {
    const response = await fetch('https://random-word-api.herokuapp.com/word');
    const data = await response.json();
    return data[0];
};

export const fetchRandomLocation = async () => {
    // return { lat: 35.66093561769998, lng: 139.6973044705187 }; // Tokyo

    while (true) {
        try {
            const response = await fetch(
                'https://maps.googleapis.com/maps/api/streetview/metadata?' +
                    new URLSearchParams({
                        location: getRandomCoordinatesAsString(),
                        key: 'AIzaSyBwAlszaTjlaVEZlga0-FMwRPgWFwMLKjc',
                        radius: '3000000',
                        source: 'outdoor',
                    })
            );

            if (response.ok) {
                const data = await response.json();

                if (
                    data.location &&
                    data.location.lat != null &&
                    data.location.lng != null
                ) {
                    return { lat: data.location.lat, lng: data.location.lng };
                } else {
                    console.error(
                        'No valid street view data available for this location.'
                    );
                }
            } else {
                console.error(
                    'Failed to fetch Street View metadata:',
                    response.status
                );
            }
        } catch (error) {
            console.error('Error fetching Street View metadata:', error);
        }
    }
};

function getRandomCoordinatesAsString() {
    const minLatitude = -50; // Lower limit on latitude to avoid polar regions
    const randomLat = (
        Math.random() * (90 - minLatitude) +
        minLatitude
    ).toFixed(7);
    const randomLng = (Math.random() * 360 - 180).toFixed(7);
    return `${randomLat},${randomLng}`;
}
