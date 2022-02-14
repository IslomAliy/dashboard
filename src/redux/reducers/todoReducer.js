
let todoID = 1;

const initialState = [
    {
        label: 'Add participiants to Magnolia',
        done: false,
        id: todoID++
    },
    {
        label: 'Add participiants to Magnolia',
        done: false,
        id: todoID++
    },
    {
        label: 'Add participiants to Magnolia',
        done: false,
        id: todoID++
    },
    {
        label: 'Add participiants to Magnolia',
        done: false,
        id: todoID++
    },
    {
        label: 'Add participiants to Magnolia',
        done: false,
        id: todoID++
    },
    {
        label: 'Add participiants to Magnolia',
        done: false,
        id: todoID++
    },
    {
        label: 'Add participiants to Magnolia',
        done: false,
        id: todoID++
    },
    {
        label: 'Add participiants to Magnolia',
        done: false,
        id: todoID++
    },
    {
        label: 'Add participiants to Magnolia',
        done: false,
        id: todoID++
    }
]

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload]
        default:
            return state
    }
}

export default todoReducer;