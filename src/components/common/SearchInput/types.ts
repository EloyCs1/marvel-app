import React from "react";

export interface SearchInputProps {
  loading?: boolean;
  placeholder?: string;
  helpText?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
