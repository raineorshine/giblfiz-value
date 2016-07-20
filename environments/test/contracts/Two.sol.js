// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"oneAddress","type":"address"}],"name":"Main","outputs":[],"type":"function"}],
    binary: "606060405260b18060106000396000f3606060405260e060020a6000350463c5c7681f8114601a575b005b60186004357fc4784fd40000000000000000000000000000000000000000000000000000000060609081526020606490815260046084527f746573740000000000000000000000000000000000000000000000000000000060a452829173ffffffffffffffffffffffffffffffffffffffff83169163c4784fd49160c490600090838181886185025a03f11560025750505050505056",
    unlinked_binary: "606060405260b18060106000396000f3606060405260e060020a6000350463c5c7681f8114601a575b005b60186004357fc4784fd40000000000000000000000000000000000000000000000000000000060609081526020606490815260046084527f746573740000000000000000000000000000000000000000000000000000000060a452829173ffffffffffffffffffffffffffffffffffffffff83169163c4784fd49160c490600090838181886185025a03f11560025750505050505056",
    address: "0xd014f7b801a0d9fa1d009cd67bf3801339696a8d",
    generated_with: "2.0.6",
    contract_name: "Two"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Two error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Two error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Two error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Two error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Two = Contract;
  }

})();
