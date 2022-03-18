import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('testano inputs', () => {
  test('alterando o valor dos campos e testando o valor guardado', () => {
    render(<App />);
    const inputNome = screen.getByRole("textbox", { name: /nome/i});
    const inputEmail = screen.getByRole("textbox", { name: /email/i});

    expect(inputNome).toBeInTheDocument();
    expect(inputNome).toHaveValue('');
    userEvent.type(inputNome, "Estudante Trybe");
    expect(inputNome).toHaveValue("Estudante Trybe");

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, "estudante@trybe");
    expect(inputEmail).toHaveValue("estudante@trybe");
  })
});
