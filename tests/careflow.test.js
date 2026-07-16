import test from 'node:test'; import assert from 'node:assert/strict'; import { readFile } from 'node:fs/promises'
test('CareFlow miniapp renders appointment and reminder cards', async()=>{const source=await readFile(new URL('../src/main.js',import.meta.url),'utf8'); assert.match(source,/预约挂号/); assert.match(source,/我的预约/); assert.match(source,/林医生/)})
