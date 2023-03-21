type Nullable<T> = T | null;
type Missable<T> = T | undefined;
type Callback<T> = (err: boolean, data?: T) => void;