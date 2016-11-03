'use strict';

describe('myApp.module1 module', function() {

  beforeEach(module('myApp.module1'));

  describe('myApp.module1.controller controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var controller = $controller('Module1Ctrl');
      expect(controller).toBeDefined();
    }));

  });
});
