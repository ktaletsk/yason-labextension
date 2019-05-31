import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the yason-labextension extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'yason-labextension',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension yason-labextension is activated!');
  }
};

export default extension;
