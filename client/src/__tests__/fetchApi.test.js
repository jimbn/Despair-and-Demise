import { render, screen } from '@testing-library/react';
const refApi = 'http://www.dnd5eapi.co/swagger/openapi.json';

test('fetch API', () => {
  fetch(refApi)
    .then(function(res){
      return res.json();
    })
})