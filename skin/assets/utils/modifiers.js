export const IS_SHOWN_CLASS = 'is-shown';
export const IS_SUCCESS_CLASS = 'is-success';
export const IS_ERROR_CLASS = 'is-error';

export const removeElementCallback = (messageElement) => {
  messageElement.classList.remove(IS_SHOWN_CLASS);
};

export const setMessageCallback = (messageElement, messageTextElement, message, elementClass) => {
  messageTextElement.innerHTML = message;

  messageElement.classList.remove(IS_SUCCESS_CLASS);
  messageElement.classList.remove(IS_ERROR_CLASS);

  messageElement.classList.add(elementClass);
  messageElement.classList.add(IS_SHOWN_CLASS);

  setTimeout(() => removeElementCallback(messageElement), 5000);
};

export const swapObjects = (arr, id, swapId) => {
  const newProjectsArr = [...arr];

  const currentObj = newProjectsArr[id];
  const swapObj = newProjectsArr[swapId];

  newProjectsArr[swapId] = currentObj;
  newProjectsArr[id] = swapObj;

  return newProjectsArr;
};

