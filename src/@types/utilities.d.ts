type Without<T> = { [P in keyof T]?: never };

type OneOf<T, U> = (Without<T> & U) | (Without<U> & T);
