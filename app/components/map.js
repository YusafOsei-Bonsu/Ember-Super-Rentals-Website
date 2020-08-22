import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

class MapComponent extends Component {

    // Returning the request
    get src() {
        let { lng, lat, width, height, zoom } = this.args;
        let coords = `${lng},${lat},${zoom}`;
        let dim = `${width}x${height}`;
        let accessToken = `access_token=${this.token}`;
        return `${MAPBOX_API}/${coords}/${dim}@2x?${accessToken}`;
    }

    get token() {
        return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
    }
}

export default MapComponent;