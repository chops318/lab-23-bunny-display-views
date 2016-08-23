'use strict';

describe('testing controllers in routing', function() {
  beforeEach(() => {
    angular.mock.module('bunnyApp');
    angular.mock.inject(($controller) => {
      this.homeController = new $controller('HomeController');
      this.fullsizeController = new $controller('FullsizeController');
      this.thumbnailController = new $controller('ThumbnailController');
      this.errorController = new $controller('ErrorController');
    });
  });

  it('home controller should have a list of images', () => {
    expect(this.homeController.images.length).toBe(4);
  });

  it('fullsize controller should have one image', () => {
    expect(this.fullsizeController.validId(1)).toBe(true);
  });

  it('thumbnail controller should have 4 images', () => {
    expect(this.thumbnailController.images.length).toBe(4);
  });

  it('error controller should have an error message', () => {
    expect(this.errorController.errorMessage).toBe('You\'ve done something wrong')
  })
})
