/***********************************/
/************* Actions *************/
/***********************************/

const enum StatusActionType {
  REHYDRATE = 'persist/REHYDRATE',
  LANGUAGE_CHANGE = 'LANGUAGE_CHANGE'
}

export function changeLanguage(lang: 'en' | 'vn') {
  return {
    type: StatusActionType.LANGUAGE_CHANGE,
    payload: lang
  };
}

/***********************************/
/************* Reducer *************/
/***********************************/

export interface StatusState {
  isPersist: boolean;
  lang: 'en' | 'vn';
}

interface StatusAction {
  type: StatusActionType;
  payload: any;
}

export const initStatusState: StatusState = {
  isPersist: false,
  lang: 'en'
};

const statusReducer = (state: StatusState = initStatusState, action: StatusAction) => {
  switch (action.type) {
    case StatusActionType.REHYDRATE: {
      const storageStatus = action.payload.status || initStatusState;
      return { ...storageStatus, isPersist: true };
    }
    case StatusActionType.LANGUAGE_CHANGE: {
      return { ...state, lang: action.payload };
    }
    default: return state;
  }
};

export default statusReducer;