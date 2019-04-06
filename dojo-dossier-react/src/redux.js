import { createStore } from "redux";

//Actions - Payloads of information that sends  data from your app to the store(state)
export const retreiveDossiers = (serverData) => ({
    type: 'RETREIVE_DOSSIERS',
    serverData,

});

export const createNewTab = (title) => ({
    type: 'CREATE_NEW_TAB',
    title
});

export const setPersonalTab = (tab, id) => ({
    type: 'SET_PERSONAL_TAB',
    tab,
    id
});

export const createNewItem = (item) => ({
    type: 'CREATE_NEW_ITEM',
    item,
})

//Reducers - It describes how an action transforms the state into the next s
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'RETREIVE_DOSSIERS':
            // console.log("retrieve dossiers",state.dossiers);
            return {
                // ...state,
                dossiers: action.serverData
            }

        // case 'CREATE_NEW_TAB':
        //     id++;
        //     return Object.assign(
        //         {},
        //         state,
        //         {
        //             dossiers: [
        //                 ...state.dossiers,
        //                 { id, title: action.title, items: [] }
        //             ]
        //         }
        //     );

        case 'SET_PERSONAL_TAB':
            // console.log("name", action.tab);
            // console.log("id", action.id);
            return {
                // ...state,
                personalTabId: action.id,
            }

        case 'CREATE_NEW_ITEM':
            return {
                ...state,
                dossiers: [
                    ...state.dossiers.map((dossier) => {
                        if (dossier.id === state.personalTabId) {
                            // console.log(dossier.id);
                            return { ...dossier, items: [...dossier.items, action.item] }
                        }
                        return dossier
                    })
                ],
            }

        default: // Always needs a default
            return state
    }
}

//set an Inital State
const initialState = {
    dossiers: [],
    personalTabId: null,
};

//CREATE STORE - store.js
export function configureStore(initialState = initialState) {
    // initialState = initialState | {}
    const store = createStore(reducers, initialState)
    return store
};
// export function configureStore(initialState = {
//     dossiers: [
//         { id: 1, title: "Missy", items: ["Great listener", "crazy cat lady"] },
//     ],
//     personalTabId: null,

// }) {
//     const store = createStore(reducers, initialState);
//     return store;
// };

export const store = configureStore();