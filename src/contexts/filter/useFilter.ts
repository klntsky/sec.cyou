import { useContext } from "react";
import { FilterState, filterContext } from "./filterContext";

export const useFilter: () => FilterState = () => useContext(filterContext);
