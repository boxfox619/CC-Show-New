export interface FormProps<T> {
    data?: T
    error?: string
    onSubmit: (data: T) => void
}

export * from './SigninForm';
export * from './SignupForm';