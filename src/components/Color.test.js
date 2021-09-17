import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blankColor = {
    color: '',
    code: { hex: ''},
    id: ''
}

const testColor = {
    color: 'pink',
    code: { hex: '#FFC0CB'},
    id: 5
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={blankColor}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={testColor} />)

    const color = screen.queryByText('pink')
    expect(color).toBeInTheDocument()
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const mockHandleDelete = jest.fn()
    const mockToggleEdit = jest.fn()


    render(<Color color={testColor} deleteColor={mockHandleDelete} toggleEdit={mockToggleEdit} />)

    const selectDelete = screen.queryByTestId('delete')
    userEvent.click(selectDelete)

    expect(mockHandleDelete).toBeCalled()
    expect(mockToggleEdit).toBeCalled()

});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {

    const mockSetEditColor = jest.fn()
    const mockToggleEdit = jest.fn()

    render(<Color color={testColor} setEditColor={mockSetEditColor} toggleEdit={mockToggleEdit} />)

    const edits = screen.queryByTestId('color')
    userEvent.click(edits)

    expect(mockSetEditColor).toBeCalled()
    expect(mockToggleEdit).toBeCalled()
});