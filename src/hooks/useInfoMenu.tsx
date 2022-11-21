import { createContext, ReactElement, useState, useContext } from "react";
import { AnimateButton } from "../scripts/AnimateButtons";

export type MenuInfo = {
  isOpen?: boolean;
  set:() => void;
  setOpen:() => void;
  setClose:() => void;
}

const ContextMenu = createContext({ } as MenuInfo);

export const MenuInfoProvider= ({ children }:{ children:ReactElement }) => {

  const [isOpen, setIsOpen] = useState(false);

  const MenuProps:MenuInfo = {
    isOpen,
    set: () => {
      AnimateButton(isOpen)
      setIsOpen(!isOpen)
    },
    setOpen: () => setIsOpen(true),
    setClose: () => setIsOpen(false)
  }

  return (
    <ContextMenu.Provider value={ MenuProps }>
      {children}
    </ContextMenu.Provider>
  );

}

export const useMenuInfo = () => useContext(ContextMenu);