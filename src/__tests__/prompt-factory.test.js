
const factory = require('../prompt-factory.mjs');
const gpt = require('../openai-api.mjs');

async function main() {

  const test = factory.predicate("2 + 2 es cuatro.")
  test(test, async () => {
    const response = await gpt.fetchGPT4Response(test)
    
    expect(response.choices[0].message.content).toBe("yes")
  });


}
main()

