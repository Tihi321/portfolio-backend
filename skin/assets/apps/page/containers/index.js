import Store from '../store';
import Topbar from '../sections';

const App = (props) => {

  return (
    <Store
      messageElement={props.messageElement}
      messageTextElement={props.messageTextElement}
    >
      <Topbar />
    </Store>
  );
};

export default App;
