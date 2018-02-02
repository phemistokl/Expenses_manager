import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const InitialState = [
    {
        id: 0,
        title: "Расход 1",
        description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне.",
        amount: 100500,
        date: new Date('2017-11-20T12:00:00Z'),
    },
    {
        id: 1,
        title: "Расход 2",
        description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне.",
        amount: 500,
        date: new Date('2018-01-20T12:00:00Z'),
    },
    {
        id: 2,
        title: "Расход 3",
        description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне.",
        amount: 10200,
        date: new Date('2017-08-20T12:00:00Z'),
    },
    {
        id: 3,
        title: "Расход 4",
        description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне.",
        amount: 100,
        date: new Date('2017-02-20T12:00:00Z'),
    },
    {
        id: 4,
        title: "Расход 5",
        description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне.",
        amount: 1000,
        date: new Date('2017-04-20T12:00:00Z'),
    },
];

function expense(state = {}, action) {
    switch (action.type) {
        case 'ADD_EXPENSE': {
                return {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    amount: action.amount,
                    date: action.date
                }
        }
        // case 'CURRENT_EXPENSE': {
        //     return state.id === action.id;
        // }
        case 'UPDATE_EXPENSE': {
            if (state.id === action.id) {
                return {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    amount: action.amount,
                    date: action.date
                }
            } else {
                return state
            }
        }
        case 'DELETE_EXPENSE': {
            return state.id !== action.id;
        }
        default: {
            return state;
        }
    }
};

function expenses(state =  InitialState, action) {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            return [...state, expense(undefined, action)]
        }
        // case 'CURRENT_EXPENSE': {
        //     return {
        //         ...state,
        //         current: state.expenses.filter(item => expense(item, action))
        //     }
        // }
        case 'UPDATE_EXPENSE': {
            return {
                ...state,
                expenses: state.expenses.map(item => expense(item, action))
            }
        }
        case 'DELETE_EXPENSE': {
            return state.filter(item => expense(item, action));
        }
        default: {
            return state;
        }
    }  
};

function sort(state = "DATE", action) {
    switch(action.type) {
        case 'SET_SORT': {
            return action.sort;
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({ expenses, expense, sort, routing });