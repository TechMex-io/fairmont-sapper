import * as sapper from '../__sapper__/client.js';
import { Store } from 'svelte/store.js';
import {pages} from './routes/_page-data.js';

sapper.start({
	target: document.querySelector('#app'),
	store: data => {
    // const store = new Store(pages);
    // `data` is whatever was in the server-side store
    return new Store({pages});
  }
});