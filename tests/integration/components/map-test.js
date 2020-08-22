import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import ENV from '../../../config/environment.js';

// Test suite for the map component
module('Integration | Component | map', (hooks) => {
  setupRenderingTest(hooks);

  // Testing the rendering of a map image with specified params and attributes
  test('it renders a map image for the specified parameters', async (assert) => {
    // Rendering a map image
    await render(hbs`<Map
      @lat="37.7797"
      @lng="-122.4184"
      @zoom="10"
      @width="150"
      @height="120" 
    />`);

    // Checks if the map image exists and has the below attributes
    assert.dom(".map").exists();
    assert.dom('.map img').hasAttribute('alt', 'Map image at coordinates 37.7797,-122.4184');
    assert.dom('.map img').hasAttribute('src', /^https:\/\/api\.mapbox\.com/, 'the src starts with "https://api.mapbox.com"');
    assert.dom('.map img').hasAttribute('width', '150');
    assert.dom('.map img').hasAttribute('height', '120');

    let { src } = find('.map img');
    let token = encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);

    assert.ok(src.includes('-122.4184,37.7797,10'), 'the src should include the lng,lat,zoom parameter');
    assert.ok(src.includes('150x120@2x'), 'the src should include the width,height and @2x parameter');
    assert.ok(src.includes(`access_token=${token}`), 'the src should include the escaped access token');
  });

  // Testing the overiding of the alt attribute
  test('the default alt attribute can be overridden', async (assert) => {
    await render(hbs`<Map
      @lat="37.7797"
      @lng="-122.4184"
      @zoom="10"
      @width="150"
      @height="120"
      alt="A map of San Francisco"
    />`);

    assert.dom('.map img').hasAttribute('alt', 'A map of San Francisco');
  });

  // Testing the constant state of the src, width and height attributes
  test('the src, width and height attributes cannot be overridden', async (assert) => {
    await render(hbs`<Map
      @lat="37.7797"
      @lng="-122.4184"
      @zoom="10"
      @width="150"
      @height="120"
      src="/assets/images/teaching-tomster.png"
      width="200"
      height="300"
    />`);

    assert.dom('.map img').hasAttribute('src', /^https:\/\/api\.mapbox\.com/, 'the src starts with "https://api.mapbox.com"');
    assert.dom('.map img').hasAttribute('width', '150');
    assert.dom('.map img').hasAttribute('height', '120');
  });
});
