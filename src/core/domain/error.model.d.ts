interface ValidationError {
  code: ValidationErrorCode;
  level: ValidationErrorLevel;
  metadata?: { [key: string]: string };
}
