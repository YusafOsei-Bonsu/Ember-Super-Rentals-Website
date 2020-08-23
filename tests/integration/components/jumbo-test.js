import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster', async function (assert) {
    // Renders the header that contains "Hello World"
    await render(hbs`<Jumbo>Hello World</Jumbo>`);
    // Checks if an element of the jumbo class exists
    assert.dom(".jumbo").exists();
    // Checks if .jumbo element contains the text "Hello World"
    assert.dom(".jumbo").hasText("Hello World");
    // Checks if an .tomster element exists within a .jumbo element
    assert.dom(".jumbo .tomster").exists();
  });
});
