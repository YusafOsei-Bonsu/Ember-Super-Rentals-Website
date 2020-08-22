import Component from '@glimmer/component';
import ENV from '../../config/environment.js';

class MapComponent extends Component {
    get token() {
        return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
    }
}

export default MapComponent;