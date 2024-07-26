import { validate_dpe } from '../src';

describe('Should validate a DPE', () => {
  test('Error should be return', () => {
    const error = [
      {
        error: 'ERROR'
      }
    ];

    expect(validate_dpe()).toStrictEqual(error);
  });
});
