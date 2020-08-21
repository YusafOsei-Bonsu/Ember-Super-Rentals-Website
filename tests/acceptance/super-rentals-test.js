import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  // Test suite the index page
  test('visiting /', async (assert) => {
    // Navigate to index page
    await visit('/');

    // Check if the current page is the index page
    assert.equal(currentURL(), '/');

    // Check if the h2 and there's a button containing certain content
    assert.dom('h2').hasText("Welcome to Super Rentals!");
    assert.dom(".jumbo a.button").hasText("About Us");
   
    // Check if pressing the About btn navigates to the About page
    await click(".jumbo a.button");
    assert.equal(currentURL(), "/about");
  });

});
