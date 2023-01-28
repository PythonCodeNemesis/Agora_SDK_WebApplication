import React, { Component } from 'react';
import { AgoraView } from 'agora-rtc-sdk-ng';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelName: ' ',
      appId: ' ',
      token: '',
      videoProfile: '480p_1',
    };
  }

  componentDidMount() {
    AgoraRtcEngine.createEngine(this.state.appId);
    AgoraRtcEngine.enableVideo();
    AgoraRtcEngine.enableAudio();
    AgoraRtcEngine.startPreview();
  }

  render() {
    return (
      <div>
        <AgoraView
          mode={1}
          channel={this.state.channelName}
          appId={this.state.appId}
          token={this.state.token}
          videoProfile={this.state.videoProfile}
          onJoinSuccess={() => { console.log('join success') }}
          onJoinFailed={(e) => { console.log('join fail', e) }}
        />
      </div>
    );
  }
}

export default App;
