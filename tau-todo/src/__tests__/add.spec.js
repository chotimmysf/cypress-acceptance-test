import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Add from './Add';

describe('add item to todo list', () => {
    test('storing input value', async () => {
        render(<Add/>);

        await userEvent.type(screen.getByTestId("todo-input"), "second todo item");

        expect(screen.getByDisplayValue(/second todo item/)).toBeInTheDocument();
    })
})