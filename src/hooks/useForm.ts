import { useState, useCallback } from "react";

type Validator<T> = (value: string, values: T) => string | null