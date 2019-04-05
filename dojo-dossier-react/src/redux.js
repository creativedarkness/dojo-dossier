import { createStore } from "redux";

//Actions - Payloads of information that sends  data from your app to the store(state)
export const createNewTab = (title) => ({
    type: 'CREATE_NEW_TAB',
    title
});

export const setPersonalTab = (person) => ({
    type: 'SET_PERSONAL_TAB',
    person
});

export const createNewItem = (item) => ({
    type: 'CREATE_NEW_ITEM',
    item
})

//Reducers - It describes how an action transforms the state into the next s
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_TAB':
            id++;
            return Object.assign(
                {},
                state,
                { 
                    dossiers: [
                        ...state.dossiers,
                        { id, title: action.title, items: [] }
                    ]
                }
            );

        case 'SET_PERSONAL_TAB':
                return {
                    ...state,
                    selectedTab: action.person,
                }

        default: // Always needs a default
            return state
    }
}

//set an Inital State
let id = 3;
const initialState = {
    dossiers: [],
};

//CREATE STORE - store.js
export function configureStore(initialState = {
    dossiers: [
        { id: 1, title: "Missy", items: ["Great listener", "crazy cat lady"] },
        { id: 2, title: "Gianna", items: ["sometimes helpful", "plays violin", "cheerleader"] },
        { id: 3, title: "Jim", items: ["plays guitar", "acoustic duo with wife", "presents Live Karaoke"] },
    ],
    selectedTab: null,
}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();