import { ValidationErrorCode, ValidationErrorLevel } from '../../core/domain/error.model.js';

export class DpeValidator {
  /**
   * @param dpe {FullDpe}
   * @return {ValidationError[]}
   */
  validate(dpe) {
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

    const collections = ['mur', 'plancher_bas', 'plancher_haut', 'baie_vitree', 'porte'];

    const enveloppe = dpe.logement.enveloppe;

    if (Number(dpe.administratif.enum_modele_dpe_id) !== 1) {
      errors.push({
        code: ValidationErrorCode.UNSUPPORTED_VERSION,
        level: ValidationErrorLevel.FATAL,
        metadata: {
          detectedVersion: dpe.administratif.enum_modele_dpe_id,
          expectedVersion: '1'
        }
      });
    }

    collections.forEach((collection) => {
      const collectionName = `${collection}_collection`;

      if (
        !enveloppe[collectionName] ||
        !enveloppe[collectionName][collection] ||
        !Array.isArray(enveloppe[collectionName][collection])
      ) {
        errors.push({
          code: ValidationErrorCode[`NO_${collection.toUpperCase()}`],
          level: ValidationErrorLevel.ERROR
        });
      } else if (enveloppe[collectionName][collection].length === 0) {
        errors.push({
          code: ValidationErrorCode[`EMPTY_${collection.toUpperCase()}`],
          level: ValidationErrorLevel.WARNING
        });
      }
    });

    return errors;
  }
}
