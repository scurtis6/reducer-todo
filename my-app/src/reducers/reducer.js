import React, { useState, useReducer } from 'react';

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
    }
]

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        
        case "COMPLETED_TODO":
        return state.map((item) => {
            return item.id === action.id ?
            {...item, completed: !item.completed} :
            item
        })

        default: 
            return state
    }
};