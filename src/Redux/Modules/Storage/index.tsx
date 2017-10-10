export interface StorageState {
  
}

interface StorageAction {
  type: string;
  payload: any;
}

const initStorage: StorageState = {

};

const storageReducer = (state: StorageState = initStorage, action: StorageAction) => {
  switch (action.type) {
    default: return state;
  }
};

export default storageReducer;