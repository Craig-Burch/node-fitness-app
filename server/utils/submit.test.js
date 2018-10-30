var expect = require('expect');

var{generateSubmit} = require('./onsubmit');

describe('generateSubmit', () => {
   it('should generate the correct submit object', () => {
      var from = 'jen';
      var text = 'some message';
      var submit = generateSubmit(from, text);

      expect(submit).toInclude({from, text});

   });
});