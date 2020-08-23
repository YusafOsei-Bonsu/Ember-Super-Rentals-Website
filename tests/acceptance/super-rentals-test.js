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

    // Checking if the below HTML elements exist
    assert.dom("nav").exists();
    assert.dom("h1").hasText("SuperRentals");
    assert.dom('h2').hasText("Welcome to Super Rentals!");
  });

  // Test suite for Contact page
  test('Visiting /about', async (assert) => {
    // Navigate to and check if the current page is the About page
    await visit('/about');
    assert.equal(currentURL(), "/about", "Reached About page");

    // Checking if the below HTML elements exist
    assert.dom("nav").exists();
    assert.dom("h1").hasText("SuperRentals");
    assert.dom("h2").hasText("About Super Rentals!");
  });

  // Test suite for Contact page
  test('Visiting /contact', async (assert) => {
    // Navigate to and check if the current page is the About page
    await visit('/contact');
    assert.equal(currentURL(), "/contact", "Reached Contact page");

    // Checking if the below HTML elements exist
    assert.dom("nav").exists();
    assert.dom("h1").hasText("SuperRentals");
    assert.dom("h2").hasText("Contact Us");
  });

  // Test suite for the nav bar
  test('navigating using the nav-bar ', async (assert) => {
    await visit('/');

    // Checking the if the nav bar exists
    assert.dom("nav").exists();

    // Checking if the link contains certain text
    assert.dom("nav a.menu-index").hasText("SuperRentals");
    assert.dom("nav a.menu-about").hasText("About");
    assert.dom("nav a.menu-contact").hasText("Contact");

    // Checking if pressing the About link navigates to the About page
    await click("nav a.menu-about");
    assert.equal(currentURL(), '/about', "Reached the About page");
    
    // Checking if pressing the contact link navigates to the Contact page
    await click("nav a.menu-contact");
    assert.equal(currentURL(), '/contact', "Reached the Contact page");
    
    // Checking if pressing the About link navigates to the About page
    await click("nav a.menu-index");
    assert.equal(currentURL(), '/', "Reached the Index page");
  });
  
});
