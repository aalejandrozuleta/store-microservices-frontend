export interface InputFieldsInterface {
  id: string;
  label: string;
  placeholder: string;
  icon?: string;
  type: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  maxLength?: number;
  minLength?: number;
  errorMessage?: string;
  errorMessageKey: string;
  labelKey: string;       
  placeholderKey: string; 
}