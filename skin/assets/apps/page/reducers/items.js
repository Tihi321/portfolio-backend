import generalHelpers from '../../../helpers/general-helper';

export const SET_ITEMS = 'SET_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const MOVE_ITEM_UP = 'MOVE_ITEM_UP';
export const MOVE_ITEM_DOWN = 'MOVE_ITEM_DOWN';

const handleUpdateItem = (itemId, updateType, text, state) => {
  const newState = state.map((value, id) => {
    if (itemId !== id) {
      return value;
    }

    switch (updateType) {
      case 'color':
        return {
          ...value,
          color: text,
        };
      case 'link':
        return {
          ...value,
          link: text,
        };
      default:
        return {
          ...value,
          title: text,
        };
    }
  });

  return newState;
};

const handleRemoveItem = (itemId, state) => {
  return state.filter((value, id) => itemId !== id);
};

const moveItemUp = (itemId, state) => {
  return generalHelpers.swapObjects(state, itemId, itemId - 1);
};

const moveItemDown = (itemId, state) => {
  return generalHelpers.swapObjects(state, itemId, itemId + 1);
};

const addNewItem = (state) => {
  const newItemsArr = [...state];

  return newItemsArr.concat([{
    title: '',
    color: '',
    link: '',
  }]);

};

export const itemsReducer = (state, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.items;
    case UPDATE_ITEM:
      return handleUpdateItem(action.itemId, action.updateType, action.text, state);
    case REMOVE_ITEM:
      return handleRemoveItem(action.itemId, state);
    case ADD_NEW_ITEM:
      return addNewItem(state);
    case MOVE_ITEM_UP:
      return moveItemUp(action.itemId, state);
    case MOVE_ITEM_DOWN:
      return moveItemDown(action.itemId, state);
    default:
      return state;
  }
};
