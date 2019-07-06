import {VideoStoreProvider} from '../store/video-store';
import {WebStoreProvider} from '../store/web-store';
import {AndroidStoreProvider} from '../store/android-store';
import {AboutStoreProvider} from '../store/about-store';
import {GeneralStoreProvider} from '../store/general-store';
import {FetchDataProvider} from '../store/fetch-data';
import {SaveDataProvider} from '../store/save-data';

import Topbar from '../sections';

const App = (props) => {

  return (
    <FetchDataProvider>
      <AboutStoreProvider>
        <WebStoreProvider>
          <VideoStoreProvider>
            <AndroidStoreProvider>
              <GeneralStoreProvider>
                <SaveDataProvider
                  messageElement={props.messageElement}
                  messageTextElement={props.messageTextElement}
                >
                  <Topbar />
                </SaveDataProvider>
              </GeneralStoreProvider>
            </AndroidStoreProvider>
          </VideoStoreProvider>
        </WebStoreProvider>
      </AboutStoreProvider>
    </FetchDataProvider>
  );
};

export default App;
