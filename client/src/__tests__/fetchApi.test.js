import { render, screen } from '@testing-library/react';
const refApi = 'http://www.dnd5eapi.co/swagger/openapi.json';

let testHello = 'testHelloWorld'

test('fetch API', () => {
  fetch(refApi)
    .then(function(res){
      return res.json();
    })
});


testHello.append(document.getElementById(`testCode`));