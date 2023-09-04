import { useContext } from "react";
import { filterContext } from "./filterContext";

export const useFilter = () => useContext(filterContext)
