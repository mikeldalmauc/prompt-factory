import assert from 'assert'

import {fetchGPT4Response} from '../src/openai-api.mjs'
import { asJson } from '../src/prompt-factory.mjs'

describe('Prompt tests', () => {

  it('Should return: yes', async () => {
    const response = await fetchGPT4Response(predicate("2 + 2 es 4"))
    assert.strictEqual(response.choices[0].message.content, "yes");
  });

  it('Should return json', async () => {
    const response = await fetchGPT4Response(asJson("Lista de 5 razas de pajaros y 5 razas de perros."))
    const content = response.choices[0].message.content;

    const responseJson = JSON.parse(content);

    assert.equal(responseJson.pajaros.length, 5);
    assert.equal(responseJson.perros.length, 5);
  });

})
