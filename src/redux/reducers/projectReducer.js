
let projectsID = 1;



let initialState = [
    {
        label: 'First',
        id: projectsID++
    },
    {
        label: 'Magnolia Warsaw',
        id: projectsID++
    },
    {
        label: 'Magnolia Warsaw',
        id: projectsID++
    },
    {
        label: 'Magnolia Warsaw',
        id: projectsID++
    },
    {
        label: 'Magnolia Warsaw',
        id: projectsID++
    },
    {
        label: 'last project',
        id: projectsID++
    },
]

const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return [...state, action.payload]
        default:
            return state
    }
}

export default projectReducer;