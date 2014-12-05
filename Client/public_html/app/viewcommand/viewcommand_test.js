'use strict';

describe('myApp.viewcommand module', function() {

    beforeEach(module('myApp.viewcommand'));

    describe('viewcommand controller', function() {

        it('should ....', inject(function($controller) {
            //spec body
            var ViewCommandCtrl = $controller('ViewCommandCtrl');
            expect(ViewCommandCtrl).toBeDefined();
        }));

        it('should create "types_food" model with 6 types', function() {
            var scope = {},
                    ctrl = new ViewCommandCtrl(scope);

            expect(scope.types_food.length).toBe(6);
        });

    });
});