import { useContext } from "react";
import { type FilterState, filterContext } from "./filterContext";

export const useFilter: () => FilterState = () => useContext(filterContext);
