/***********************************/
/************* Actions *************/
/***********************************/

const enum StatusActionType {
  REHYDRATE = 'persist/REHYDRATE'
}

/***********************************/
/************* Reducer *************/
/***********************************/

export interface StatusState {
  isPersist: boolean;
  isLogin?: boolean;
}

interface StatusAction {
  type: StatusActionType;
  payload: any;
}

const initStatus: StatusState = {
  isPersist: false
};

const statusReducer = (state: StatusState = initStatus, action: StatusAction) => {
  switch (action.type) {
    case StatusActionType.REHYDRATE: {
      return { ...state, isPersist: true };
    }
    default: return state;
  }
};

export default statusReducer;