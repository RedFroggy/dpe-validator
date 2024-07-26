import { DpeDataFixture } from '../../../tests/fixtures/dpe/dpe.fixture.js';
import { DpeComparator } from './compare-dpe.service.js';

describe('Dpe comparator tests', () => {
  const service = new DpeComparator();

  it('should compare two DPE', async () => {
    const firstDpe = DpeDataFixture.aFullDpe();
    const secondDpe = DpeDataFixture.aFullDpe();
    secondDpe.logement.caracteristique_generale.annee_construction = 1970;

    const errors = service.compare(firstDpe, secondDpe);
    expect(errors).toStrictEqual({
      size: {},
      values: {
        annee_construction: {
          is: 1970,
          was: 1949
        }
      }
    });
  });

  it.each(['mur', 'plancher_bas', 'plancher_haut', 'baie_vitree', 'porte'])(
    'should return error when DPE has not the same collection "%s" size',
    (collection) => {
      let errors;
      const collectionName = `${collection}_collection`;

      const firstDpe = DpeDataFixture.aFullDpe();
      const secondDpe = DpeDataFixture.aFullDpe();
      firstDpe.logement.enveloppe[collectionName][collection] = undefined;
      secondDpe.logement.enveloppe[collectionName][collection] = undefined;

      errors = service.compare(firstDpe, secondDpe);
      expect(errors).toStrictEqual({
        size: {},
        values: {}
      });

      firstDpe.logement.enveloppe[collectionName][collection] = [{}];
      secondDpe.logement.enveloppe[collectionName][collection] = [{}, {}];

      errors = service.compare(firstDpe, secondDpe);
      const expectedResult = {
        size: {},
        values: {}
      };
      expectedResult['size'][collectionName] = { is: 2, was: 1 };
      expect(errors).toStrictEqual(expectedResult);
    }
  );
});
