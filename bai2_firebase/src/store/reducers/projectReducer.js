const initState = {
    projects: [
        {
            id: 1, title: 'vo trung tin', content: 'bla bla'
        },
        
    ]
}
const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project',action.project)
            return state;
        case 'CREATE_PROJECT_ERR':{
            console.log('create project error',action.err);
            return state;
        }
        default:
            return state;
    }
}
export default projectReducer;
