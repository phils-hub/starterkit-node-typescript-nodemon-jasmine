import { Life } from './life'

describe("Life", function() {

  it("should be good", function() {
    expect(Life.status()).toBe('good')    
  })

})