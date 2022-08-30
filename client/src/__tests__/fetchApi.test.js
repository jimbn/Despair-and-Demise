import { render, screen } from '@testing-library/react';
const refApi = 'http://www.dnd5eapi.co/swagger/openapi.json';

const testClassBard = 'http:www.dnd5eapi.co/api/classes/bard'

test('fetch API', () => {
  fetch(testClassBard)
    .then(function(res){
      return res.json();
    })
});




