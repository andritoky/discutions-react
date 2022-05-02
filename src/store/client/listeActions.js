
export const ajoutFetchListeAction = (data) => ({
    type : 'ajout_fetch_client_liste',
    payload : data
})


export const updateListeAction = (id , data) => ({
    type : 'update_client_liste',
    payload : {id : id , data : data}
})

export const deleteListeAction = (id) => ({
    type : 'delete_client_liste',
    payload : id
})

export const addListeAction = (data) => ({
    type : 'add_client_liste',
    payload : data
})
// export const toggleListeAction = (user) => {
//     return {
//         type : 'update_admin_liste',
//         payload : { ...user , admin : !user.admin}
//     }   
// }