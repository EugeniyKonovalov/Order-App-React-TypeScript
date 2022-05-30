
type inputTypesObj = {
  id: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
}

export interface inputTypes {
  label: string;
  input: inputTypesObj;
};
