import React from "react";

export interface SearchInputProps {
  testId?: string;
  loading?: boolean;
  placeholder?: string;
  helpText?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
