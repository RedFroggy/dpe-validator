import { Utils } from '../../core/utils.js';

export class DpeComparator {
  /**
   * @param firstDpe {FullDpe}
   * @param secondDpe {FullDpe}
   * @return {Object}
   * Check that all fields in "caracteristique_generale" are the same and
   * compare collection length
   */
  compare(firstDpe, secondDpe) {
    return {
      values: this.#compareCaracteristiqueGenerale(firstDpe, secondDpe),
      size: this.#compareEnveloppes(firstDpe, secondDpe)
    };
  }

  /**
   * Return a list of difference between each fields of caracteristique_generale
   * @param firstDpe {FullDpe}
   * @param secondDpe {FullDpe}
   * @return {Object}
   */
  #compareCaracteristiqueGenerale(firstDpe, secondDpe) {
    return Utils.diff(
      firstDpe.logement.caracteristique_generale,
      secondDpe.logement.caracteristique_generale
    );
  }

  /**
   * Compare the length of each collection / should be the same
   * @param firstDpe {FullDpe}
   * @param secondDpe {FullDpe}
   * @return {Object}
   */
  #compareEnveloppes(firstDpe, secondDpe) {
    const collections = ['mur', 'plancher_bas', 'plancher_haut', 'baie_vitree', 'porte'];
    const errors = {};

    const firstEnveloppe = firstDpe.logement.enveloppe;
    const secondEnveloppe = secondDpe.logement.enveloppe;

    collections.forEach((collection) => {
      const collectionName = `${collection}_collection`;

      if (
        !firstEnveloppe[collectionName] ||
        !firstEnveloppe[collectionName][collection] ||
        !secondEnveloppe[collectionName] ||
        !secondEnveloppe[collectionName][collection]
      ) {
        return;
      }

      if (
        firstEnveloppe[collectionName][collection].length !==
        secondEnveloppe[collectionName][collection].length
      ) {
        errors[collectionName] = {
          was: firstEnveloppe[collectionName][collection].length,
          is: secondEnveloppe[collectionName][collection].length
        };
      }
    });

    return errors;
  }
}
