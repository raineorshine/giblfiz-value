// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"inputs":[{"name":"oneAddress","type":"address"}],"type":"constructor"}],
    binary: "606060405260405160208060ab8339506080604052517fc4784fd40000000000000000000000000000000000000000000000000000000060809081526020608452600460a4527f746573740000000000000000000000000000000000000000000000000000000060c4528190600160a060020a0382169063c4784fd49060009060e490829060648183886185025a03f11560025750505050505060068060a56000396000f3606060405200",
    unlinked_binary: "606060405260405160208060ab8339506080604052517fc4784fd40000000000000000000000000000000000000000000000000000000060809081526020608452600460a4527f746573740000000000000000000000000000000000000000000000000000000060c4528190600160a060020a0382169063c4784fd49060009060e490829060648183886185025a03f11560025750505050505060068060a56000396000f3606060405200",
    address: "",
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
