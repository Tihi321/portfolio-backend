import {StoreProvider} from '../context/store';

import Topbar from '../sections';

const App = (props) => {

  return (
    <StoreProvider
      messageElement={props.messageElement}
      messageTextElement={props.messageTextElement}
    >
      <Topbar />
    </StoreProvider>
  );
};

export default App;
