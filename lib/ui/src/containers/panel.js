// import { inject } from 'mobx-react';
import React from 'react';
import AddonPanel from '../components/panel/panel';
import { Consumer } from '../core/context';

// export function mapper({ store, uiStore }) {
//   return {
//     panels: store.panels,
//     selectedPanel: store.selectedPanel,
//     panelPosition: uiStore.panelPosition,
//     actions: {
//       onSelect: panel => store.selectPanel(panel),
//       toggleVisibility: () => uiStore.togglePanel(),
//       togglePosition: () => uiStore.togglePanelPosition(),
//     },
//   };
// }

// export default inject(({ store, uiStore }) => mapper({ store, uiStore }))(AddonPanel);

export default props => (
  <Consumer>
    {({ state, manager }) => {
      const customProps = {
        panels: manager.getPanels(),
        selectedPanel: manager.getSelectedPanel(),
        panelPosition: state.ui.panelPosition,
        actions: {
          onSelect: panel => manager.selectPanel(panel),
          toggleVisibility: () => manager.togglePanel(),
          togglePosition: () => manager.togglePanelPosition(),
        },
      };

      return <AddonPanel {...props} {...customProps} />;
    }}
  </Consumer>
);
