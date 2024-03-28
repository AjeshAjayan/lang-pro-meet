import { Store } from "pullstate";
import { CounterState, defaultCounterState } from "./counterState";

type ICounterStore = CounterState;

export const LoginStore = new Store<ICounterStore>(defaultCounterState());
