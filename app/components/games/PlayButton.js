import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const PlayButton = (playFunc) =>
    <RaisedButton label="Default" onClick={playFunc} />;

export default PlayButton;
