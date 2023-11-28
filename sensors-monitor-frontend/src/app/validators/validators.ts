import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export function lessThanValidator(
  controlLessKey: string,
  controlMoreKey: string
) {
  return (group: FormGroup): { [key: string]: any } | null => {
    let controlLess = group.controls[controlLessKey];
    let controlMore = group.controls[controlMoreKey];

    return controlLess.value >= controlMore.value
      ? {
          lessThanValidator: true,
        }
      : null;
  };
}

export function notEmptyObjectValidator(
  control: FormControl
): ValidationErrors | null {
  const isEmpty = control.value && Object.keys(control.value).length === 0;
  return isEmpty ? { emptyObject: true } : null;
}
