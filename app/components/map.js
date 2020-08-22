import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

class MapComponent extends Component {
    get token() {
        return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
    }
}

export default MapComponent;