import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }
  // Return template of component
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListener();
  }

  destroy() {
    this.removeDOMListener()
  }
}