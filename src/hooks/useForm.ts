import { useState, useCallback } from "react";

type Validator<T> = (value: string, values: T) => string | null;

interface ValidationRules<T> {
    [key: string]: Validator<T>;
}

function useForm<T extends Record<string, any>>(
    initialValues: T,
    validationRUles: ValidationRules<T>
) {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Record<keyof T, string | null >>(() => {
        const initialErrors: Record<keyof T, string | null> = {} as Record<keyof T, string | null>
        for (const key in initialValues) {
      initialErrors[key] = null;
    }
    return initialErrors;
  });
}