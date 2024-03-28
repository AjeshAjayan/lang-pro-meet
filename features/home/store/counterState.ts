export type CounterState = {
    username: string;
    password: string;
    count: number;
}

export const defaultCounterState = () : CounterState => ({
    username: '',
    password: '',
    count: 0
})
