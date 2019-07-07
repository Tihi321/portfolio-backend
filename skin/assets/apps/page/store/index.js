import {VideoStoreProvider} from './video-store';
import {WebStoreProvider} from './web-store';
import {AndroidStoreProvider} from './android-store';
import {AboutStoreProvider} from './about-store';
import {GeneralStoreProvider} from './general-store';
import {FetchContextProvider} from './fetch-context';

const Store = (props) => {

  return (
    <GeneralStoreProvider>
      <AboutStoreProvider>
        <WebStoreProvider>
          <VideoStoreProvider>
            <AndroidStoreProvider>
              <FetchContextProvider
                messageElement={props.messageElement}
                messageTextElement={props.messageTextElement}
              >
                {props.children}
              </FetchContextProvider>
            </AndroidStoreProvider>
          </VideoStoreProvider>
        </WebStoreProvider>
      </AboutStoreProvider>
    </GeneralStoreProvider>
  );
};

export default Store;
