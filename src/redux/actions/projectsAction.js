
let projectID = 7;

const createProject = (label) => {
    return {
        label,
        id: projectID++
    }

}

export const addProject = (name) => {
    return {
        type: 'ADD_PROJECT',
        payload: createProject(name)
    }
}