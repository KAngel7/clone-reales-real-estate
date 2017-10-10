export interface UserState {

}

interface UserAction {
  type: string;
  payload: any;
}

const initUser: UserState = {

};

const userReducer = (state: UserState = initUser, action: UserAction) => {
  switch (action.type) {
    default: return state;
  }
};

export default userReducer;