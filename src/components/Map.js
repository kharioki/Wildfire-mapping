import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyDGLT0Mtoga5GSmvLH8m9IDgBEl_9rR13g',
                }}
                defaultCenter={center}
                defaultZoom={ zoom }
            >
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
