export const addExpense = expense => {
    return {
        type: "ADD_EXPENSE",
        id: Date.now(),
        title: expense.title,
        description: expense.description,
        amount: expense.amount,
        date: expense.date ? new Date(expense.date) : new Date()
    };
};

export const updateExpense = (id, expense) => {
    return {
        type: "UPDATE_EXPENSE",
        id,
        title: expense.title,
        description: expense.description,
        amount: expense.amount,
        date: expense.date
    };
};

export const deleteExpense = id => {
    return {
        type: 'DELETE_EXPENSE',
        id
    };
};

export const createExpense = () => {
    return {
        type: 'CREATE_EXPENSE'
    };
};

export const currentExpense = id => {
    return {
        type: 'CURRENT_EXPENSE',
        id
    };
};

export const setSort = sort => {
    return {
        type: 'SET_SORT',
        sort
    };
};