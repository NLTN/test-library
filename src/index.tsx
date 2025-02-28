'use strict';
import { EventEmitter } from 'events';

class RicohCameraController extends EventEmitter {
  intervalId = null;
  BASE_URL = 'http://192.168.0.1';
  constructor() {
    super();
  }
  getLiveViewURL() {
    return `${this.BASE_URL}/v1/display`;
  }
}
export default RicohCameraController;
