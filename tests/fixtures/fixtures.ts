import {test as base} from '@playwright/test';
import ListPage from '../../pages/listPage';
import path from "path";

export type TestOptions  = {
  listPage: ListPage;
  workerStorageState: string;
};

export * from '@playwright/test';
export const test = base.extend<TestOptions>({

  // Use the same storage state for all tests in this worker.
  storageState: ({ workerStorageState }, use) => use(workerStorageState),

  // Authenticate once per worker with a worker-scoped fixture.
  workerStorageState: async ({ browser}, use) => {
    // Use parallelIndex as a unique identifier for each worker.
    const id = test.info().parallelIndex;
    const fileName = path.resolve(test.info().project.outputDir, `.auth/${id}.json`);

    // Important: make sure we authenticate in a clean environment by unsetting storage state.
    const context = await browser.newContext()
    await context.storageState({ path: fileName });
    await use(fileName);
  },

  listPage: async ({ page }, use) => {
    const listPage = new ListPage(page);
    await use(listPage);
  },

});


