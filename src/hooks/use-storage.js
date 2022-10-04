const useStorage = () => {
  const isBrowser = (() => typeof window !== "undefined")();

  const getItem = (key) => {
    return isBrowser ? localStorage.getItem(key) : "";
  };

  const setItem = (key, value) => {
    if (isBrowser) {
      localStorage.setItem(key, value);
      return true;
    }

    return false;
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;
