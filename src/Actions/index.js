export const addTodo = (datas) => {
    return {
        type: "ADD_TODO",
        payload : {
            id :new Date().getTime().toString(),
            datas:datas
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const removeTodo = () => {
    return {
        type: "REMOVE_TODO"
    }
}