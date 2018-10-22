import React from 'react';
// import { inject } from 'mobx-react';
import { Preview } from '@storybook/components';
import { Consumer } from '../core/context';

// export function mapper({ store, uiStore }) {
//   return {
//     channel: store.channel,
//     getElements: store.getElements,
//     actions: {
//       toggleFullscreen: () => uiStore.toggleFullscreen(),
//     },
//     options: {
//       ...uiStore,
//     },
//   };
// }

// export default inject(({ store, uiStore }) => mapper({ store, uiStore }))(Preview);

export default props => (
  <Consumer>
    {({ state, manager }) => {
      const customProps = {
        channel: manager.getChannel(),
        getElements: manager.getElements,
        actions: {
          toggleFullscreen: () => manager.toggleFullscreen(),
        },
        options: {
          ...state.ui,
        },
      };
      return <Preview {...props} {...customProps} />;
    }}
  </Consumer>
);
