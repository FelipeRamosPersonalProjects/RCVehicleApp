import React from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

import {SpinnerProps} from './Spinner.interface';

export default function Spinner({visible}: SpinnerProps): JSX.Element {
  if (visible) {
    return <ActivityIndicator animating={true} color={MD2Colors.red800} />;
  } else {
    return <></>;
  }
}
