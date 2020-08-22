import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
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

  // Testing if pressing the image changes its size
  test('clicking on the component toggles its size', async (assert) => {
    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    // Checking if the btn surrounding the image exists
    assert.dom("button.image").exists();

    assert.dom(".image").doesNotHaveClass("large");
    assert.dom(".image small").hasText("View Larger");

    // Testing the scenario when the image enlarges in size
    await click("button.image");
    assert.dom(".image").hasClass("large");
    assert.dom(".image small").hasText("View Smaller");

    // Testing the scenario when the image reduces in size
    await click("button.image");
    assert.dom(".image").doesNotHaveClass("large");
    assert.dom(".image small").hasText("View Larger");
  });
  
});
