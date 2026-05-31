import { useState } from "react";
import { getItem, setItem } from "../services/storage.service.js";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getItem(key, initialValue));

  function update(nextValue) {
    setValue(nextValue);
    setItem(key, nextValue);
  }

  return [value, update];
}
