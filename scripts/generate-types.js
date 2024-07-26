import { json2ts } from 'json-ts';
import { readFileSync, writeFileSync } from 'fs';
const fileContent = readFileSync('assets/2344E0308327N.json', { encoding: 'utf8', flag: 'r' });

const interfacesOutput = json2ts(fileContent, { rootName: 'FullDpe', prefix: '' });
writeFileSync('types.d.ts', interfacesOutput, { encoding: 'utf8' });
