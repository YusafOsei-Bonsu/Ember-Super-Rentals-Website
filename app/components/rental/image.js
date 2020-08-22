import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
    @tracked isLarge = false;

    // Toggles the image size from small to large and vice versa
    @action toggleSize() {
        this.isLarge = !this.isLarge;
    }
}