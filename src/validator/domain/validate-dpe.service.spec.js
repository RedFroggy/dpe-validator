import { DpeValidator } from './validate-dpe.service.js';
import { DpeDataFixture } from '../../../tests/fixtures/dpe/dpe.fixture.js';

describe('Dpe validator tests', () => {
  it('should validate a DPE', async () => {
    const service = new DpeValidator();

    const dpe = DpeDataFixture.aFullDpe();

    const errors = await service.validate(dpe);
    expect(errors).toStrictEqual([]);
  });

  it('should return error when DPE has no mur_collection', async () => {
    const dpe = DpeDataFixture.aFullDpe();
    dpe.logement.enveloppe.mur_collection = undefined;

    const service = new DpeValidator();

    const errors = await service.validate(dpe);
    expect(errors).toStrictEqual([
      {
        code: 'NO_MURS_COLLECTION',
        level: 'ERROR'
      }
    ]);
  });
});
