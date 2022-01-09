import { store } from '../store';

describe('Redux store', () => {
  it('should return a store', () => {
    // smoke test for the store to ensure it can be created
    expect(store).not.toBeNull();
    expect(store).toBeDefined();
  });

  it('should return a store with some state', () => {
    // smoke test for the store & its state
    expect(store.getState()).not.toBeNull();
    expect(store.getState()).toBeDefined();
  });
});
