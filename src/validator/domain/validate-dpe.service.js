import { ValidationErrorCode, ValidationErrorLevel } from '../../core/domain/error.model.js';
import { isArray } from 'node:util';

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

    collections.forEach((collection) => {
      const collectionName = `${collection}_collection`;

      if (
        !enveloppe[collectionName] ||
        !enveloppe[collectionName][collection] ||
        !isArray(enveloppe[collectionName][collection])
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
