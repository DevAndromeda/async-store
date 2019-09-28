import * as store from '@leapfrogtechnology/async-store';

import * as logger from './logger';

/**
 * An example function making use of the request context
 * set in the store asynchronously (with delay).
 */
export function doSomethingAsync() {
  // Do something with the request with a delay.
  logger.debug('Simulating delayed access');

  setTimeout(() => {
    const [a, b, sum, query] = [store.get('a'), store.get('b'), store.get('sum'), store.get('query')];

    logger.info('Store contents: ' + JSON.stringify({ a, b, sum, query }));
  }, 2000);
}
