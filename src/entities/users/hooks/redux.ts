import { AppDispatch, RootStore } from "@/entities/store";

<<<<<<< HEAD
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
=======

import { TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootStore>=useSelector;
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
