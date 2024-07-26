import { ValidationErrorCode, ValidationErrorLevel } from '../../core/domain/error.model.js';

export class DpeValidator {
  /**
   * @param dpe {FullDpe}
   * @return {Promise<ValidationError[]>}
   */
  async validate(dpe) {
    // Check that all enveloppes ar defined
    return this.#validateEnveloppes(dpe);
  }

  /**
   * Return a list of validation errors for missing element collection (mur_collection, etc...)
   * @param dpe {FullDpe}
   * @return {ValidationError[]}
   */
  #validateEnveloppes(dpe) {
    /** @type(ValidationError[]) **/
    const errors = [];

    if (!dpe.logement.enveloppe.mur_collection) {
      errors.push({
        code: ValidationErrorCode.NO_MURS_COLLECTION,
        level: ValidationErrorLevel.ERROR
      });
    }

    return errors;
  }
}
