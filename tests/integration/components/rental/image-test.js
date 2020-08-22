import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders the given image', async (assert) => {

    // Rendering the image
    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    // Checking if the image exists and has certain attributes
    assert.dom(".image").exists();
    assert.dom(".image img").hasAttribute("src", "/assets/images/teaching-tomster.png");
    assert.dom(".image img").hasAttribute("alt", "Teaching Tomster");
    
  });
});
