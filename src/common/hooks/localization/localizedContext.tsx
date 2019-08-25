import { createContext } from "react";
import { localizedHeader } from "Common/hooks/localization/localizedStrings ";

export const LocalizedContext = createContext(localizedHeader);

export const LocalizedProvider = LocalizedContext.Provider;
