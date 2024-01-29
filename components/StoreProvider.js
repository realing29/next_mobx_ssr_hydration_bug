import { createContext, useContext } from "react";
import { Store } from "../store";

let store;
export const StoreContext = createContext();

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
}

// function initializeStore(initialData = null) {
// 	const _store = store ?? new Store()

// 	// If your page has Next.js data fetching methods that use a Mobx store, it will
// 	// get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
// 	if (initialData) {
// 		_store.hydrate(initialData)
// 	}
// 	// For SSG and SSR always create a new store
// 	if (typeof window === 'undefined') return _store
// 	// Create the store once in the client
// 	if (!store) store = _store

// 	return _store
// }

let prevInitial;

function initializeStore(initialData = null) {
  const isSsr = typeof window === "undefined";

  if (isSsr) {
    const _store = new Store();
    if (initialData) _store.hydrate(initialData);
    return _store;
  } else {
    if (!store) store = new Store();
    if (prevInitial !== initialData && initialData) {
      store.hydrate(initialData);
      prevInitial = initialData;
    }
    return store;
  }
}

export function StoreProvider({ children, hydrationData: initialData }) {
  const store = initializeStore(initialData);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
