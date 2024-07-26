import React from "react";

export interface SearchInputProps {
  placeholder?: string;
  helpText?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
