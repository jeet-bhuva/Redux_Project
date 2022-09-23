const initialData = {
    list: []
}


const todoreducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":

            const { id, datas } = action.payload

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        datas: datas
                    }
                ]
            }


        case "DELETE_TODO":

            const newList = state.list.filter((e) => e.id !== action.id)

            return {
                ...state,
                list: newList
            }


        case "REMOVE_TODO":

            return {
                ...state,
                list: []
            }



        default: return state
    }
}

export default todoreducer