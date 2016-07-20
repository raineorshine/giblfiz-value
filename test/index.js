contract('One', function(accounts) {
  contract('Two', function() {
    it("set the word and send ETH", function() {
      var one = One.deployed()
      var two = Two.deployed()

      return two.Main(one.address, { from: accounts[0], value: 500 })
        .then(one.word.call)
        .then(function(word) {
          assert.equal(word, 'test')
          assert.equal(web3.eth.getBalance(one.address), 100)
        })
    })
  })
})
