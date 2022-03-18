import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// antes de t=comecar os testes limpamos as mocks 
afterEach(() => jest.clearAllMocks());

test('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // usando o spyOn para implemetar o global fetch na nossa api
  jest.spyOn(global, 'fetch');
  // implementando o global fetch e usando o jest.fn para chamar o mock e passar o valor a ser testado
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  // mais uma forma de se fazer uma requisicao com mock usando o jest.fn
  /* global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  })); */

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
})