import React, { useState, useReducer } from 'react';

export const initialState = [{
    todo: 'Learn about reducers',
    completed: false,
    id: Date.now()
}];

export function todoReducer (state, action) {
    console.log(state, action);
    // switch(action.type) {
    //     case ''
    // }
}