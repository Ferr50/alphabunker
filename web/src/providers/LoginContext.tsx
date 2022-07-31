import { createContext } from "react";
import { ContextLoginType } from "../modals";

export const LoginContext = createContext<ContextLoginType|null>(null);