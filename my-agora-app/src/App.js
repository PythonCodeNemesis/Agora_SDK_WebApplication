import React, { Component } from 'react';
import { AgoraView } from 'agora-rtc-sdk-ng';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelName: 'python_code_nemesis',
      appId: '84ad96a5eafe42589c85c01c1aaccede',
      token: '007eJxTYFh+/9i2xR7HP5nefy+16Ppa6f65ZY0LP+88e+n1L/vHixi/KDBYmCSmWJolmqYmpqWaGJlaWCZbmCYbGCYbJiYmJ6empN5WvprcEMjIwOMylYERCkF8YYaCypKM/Lz45PyU1Pi81NzU4sxiBgYAfG0raA==',
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
