import { SetupWorkerInternalContext } from '../glossary'

export const createStop = (context: SetupWorkerInternalContext) => {
  /**
   * Signal the Service Worker to disable mocking for this client.
   * Use this an an explicit way to stop the mocking, while preserving
   * the worker-client relation. Does not affect the worker's lifecycle.
   */
  return function stop() {
    context.worker?.postMessage('MOCK_DEACTIVATE')
    context.events.removeAllListeners()
  }
}
