import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  // Test suite the index page
  test('Visiting index', async (assert) => {
    // Navigate to and check if the current page is the Index page
    await visit('/');
    assert.equal(currentURL(), '/', "Reached Index page");

    // Check if the h2 and there's a button containing certain content
    assert.dom('h2').hasText("Welcome to Super Rentals!");
    assert.dom(".jumbo a.button").hasText("About Us");
   
    // Check if pressing the About btn navigates to the About page
    await click(".jumbo a.button");
    assert.equal(currentURL(), "/about", "Reached About page");
  });

  // Test suite for Contact page
  test('Visiting /about', async (assert) => {
    // Navigate to and check if the current page is the About page
    await visit('/about');
    assert.equal(currentURL(), "/about", "Reached About page");

    assert.dom("h2").hasText("About Super Rentals!");
    assert.dom(".jumbo a.button").hasText("Contact Us");

    await click(".jumbo a.button");
    assert.equal(currentURL(), '/contact', "Reached Contact page");
  });

  // Test suite for Contact page
  test('Visiting /contact', async (assert) => {
    // Navigate to and check if the current page is the About page
    await visit('/contact');
    assert.equal(currentURL(), "/contact", "Reached Contact page");

    // Checking if the h2 and About btn element contain the correct text
    assert.dom("h2").hasText("Contact Us");
    assert.dom(".jumbo a.button").hasText("About");

    // Check if pressing the About btn navigates to the About page
    await click(".jumbo a.button");
    assert.equal(currentURL(), '/about', "Reached About page");
  });

});
