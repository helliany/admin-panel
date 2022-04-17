import { createContext } from "react";

interface IAppContext {
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<IAppContext>({ toggleColorMode: () => {} });

export default ColorModeContext;
