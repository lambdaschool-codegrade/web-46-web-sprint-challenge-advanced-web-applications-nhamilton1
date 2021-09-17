import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen } from "@testing-library/react";
import BubblePage from './BubblePage';

import fetchColorServices from '../services/fetchColorService'

jest.mock('../services/fetchColorService')

const testData = {
    data:[
        {color: 'blue', code: { hex: '#0000FF'}, id: 1},
        {color: 'orange', code: { hex: '#FFA500'}, id: 2},
        {color: 'purple', code: { hex: '#A020F0'}, id: 3},
        {color: 'aqua', code: { hex: '#00FFFF'}, id: 4},
        {color: 'pink', code: { hex: '#FFC0CB'}, id: 5},
        {color: 'beige', code: { hex: '#F5F5DC'}, id: 6},
    ]
}

test("Renders without errors", ()=> {
    fetchColorServices.mockResolvedValueOnce(testData)
    
    render(<BubblePage/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    fetchColorServices.mockResolvedValueOnce(testData)

    //ARRANGE: 
    render(<BubblePage/>)

    //ACT:
    const colors = await screen.findAllByTestId('color')

    //ASSERT
    expect(colors).toHaveLength(6)

});