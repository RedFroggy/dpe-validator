import { DpeValidator } from './validate-dpe.service.js';
import { DpeDataFixture } from '../../../tests/fixtures/dpe/dpe.fixture.js';
import { ValidationErrorCode, ValidationErrorLevel } from '../../core/domain/error.model.js';

describe('Dpe validator tests', () => {
  const service = new DpeValidator();

  it('should validate a DPE', async () => {
    const service = new DpeValidator();

    const dpe = DpeDataFixture.aFullDpe();

    const errors = service.validate(dpe);
    expect(errors).toStrictEqual([]);
  });

  it('should return error for an unsupported dpe model version', async () => {
    const service = new DpeValidator();

    const dpe = DpeDataFixture.aFullDpe();
    dpe.administratif.enum_modele_dpe_id = '3';

    const errors = service.validate(dpe);
    expect(errors).toStrictEqual([
      {
        code: ValidationErrorCode.UNSUPPORTED_VERSION,
        level: ValidationErrorLevel.ERROR,
        metadata: {
          originalValue: '3',
          expectedValue: '1'
        }
      }
    ]);
  });

  it.each(['mur', 'plancher_bas', 'plancher_haut', 'baie_vitree', 'porte'])(
    'should return error when DPE has no "%s"',
    (collection) => {
      let errors;
      const collectionName = `${collection}_collection`;

      const dpe = DpeDataFixture.aFullDpe();
      dpe.logement.enveloppe[collectionName] = undefined;

      errors = service.validate(dpe);
      expect(errors).toStrictEqual([
        {
          code: `NO_${collection.toUpperCase()}`,
          level: 'ERROR'
        }
      ]);

      dpe.logement.enveloppe[collectionName] = {};
      dpe.logement.enveloppe[collectionName][collection] = undefined;

      errors = service.validate(dpe);
      expect(errors).toStrictEqual([
        {
          code: `NO_${collection.toUpperCase()}`,
          level: 'ERROR'
        }
      ]);

      dpe.logement.enveloppe[collectionName][collection] = {};

      errors = service.validate(dpe);
      expect(errors).toStrictEqual([
        {
          code: `NO_${collection.toUpperCase()}`,
          level: 'ERROR'
        }
      ]);
    }
  );

  it.each(['mur', 'plancher_bas', 'plancher_haut', 'baie_vitree', 'porte'])(
    'should return warning when DPE has empty "%s"',
    (collection) => {
      let errors;
      const collectionName = `${collection}_collection`;

      const dpe = DpeDataFixture.aFullDpe();
      dpe.logement.enveloppe[collectionName][collection] = [];

      errors = service.validate(dpe);
      expect(errors).toStrictEqual([
        {
          code: `EMPTY_${collection.toUpperCase()}`,
          level: 'WARNING'
        }
      ]);
    }
  );
});
