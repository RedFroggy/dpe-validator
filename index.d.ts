declare namespace DpeValidator {
  class DpeValidator {
    validate(dpe: FullDpe): ValidationError[];
  }

  class DpeComparator {
    compare(firstDpe: FullDpe, secondDpe: FullDpe): ValidationError[];
  }
}

export = DpeValidator;
