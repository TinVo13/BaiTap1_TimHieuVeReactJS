export const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirebase();
        firestore.collection('projects').add({
            ...project,
            title:'vo trung tin',
            content:'test',
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERR',err});
        })
    }       
}