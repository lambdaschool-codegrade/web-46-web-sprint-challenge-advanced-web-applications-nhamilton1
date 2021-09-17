import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

const emptyColors = []

const listOfColors = [

        {color: 'blue', code: { hex: '#0000FF'}, id: 1},
        {color: 'orange', code: { hex: '#FFA500'}, id: 2},
        {color: 'purple', code: { hex: '#A020F0'}, id: 3},
        {color: 'aqua', code: { hex: '#00FFFF'}, id: 4},
        {color: 'pink', code: { hex: '#FFC0CB'}, id: 5},
        {color: 'beige', code: { hex: '#F5F5DC'}, id: 6},
]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors ={emptyColors}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={listOfColors}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { rerender } = render(<ColorList colors={emptyColors} editing={true}/>)
    let edit = screen.queryByTestId('edit_menu')
    expect(edit).toBeInTheDocument()


    rerender(<ColorList colors={emptyColors} editing={false}/>)
    edit = screen.queryByTestId('edit_menu')
    expect(edit).not.toBeInTheDocument()
    
});
