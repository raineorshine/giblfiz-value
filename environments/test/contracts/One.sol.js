// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"word","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"whatever","type":"string"}],"name":"setMsg","outputs":[],"type":"function"}],
    binary: "6060604052610203806100126000396000f3606060405260e060020a60003504632f64d3868114610026578063c4784fd414610083575b005b61012960008054602060026001831615610100026000190190921691909104601f810182900490910260809081016040526060828152929190828280156101c25780601f10610197576101008083540402835291602001916101c2565b60206004803580820135601f810184900490930260809081016040526060848152610024946024939192918401918190838280828437509496505050505050508060006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101ca57805160ff19168380011785555b506101fa9291505b808211156101ff57838155600101610116565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101895780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b820191906000526020600020905b8154815290600101906020018083116101a557829003601f168201915b505050505081565b8280016001018555821561010e579182015b8281111561010e5782518260005055916020019190600101906101dc565b505050565b509056",
    unlinked_binary: "6060604052610203806100126000396000f3606060405260e060020a60003504632f64d3868114610026578063c4784fd414610083575b005b61012960008054602060026001831615610100026000190190921691909104601f810182900490910260809081016040526060828152929190828280156101c25780601f10610197576101008083540402835291602001916101c2565b60206004803580820135601f810184900490930260809081016040526060848152610024946024939192918401918190838280828437509496505050505050508060006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101ca57805160ff19168380011785555b506101fa9291505b808211156101ff57838155600101610116565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101895780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b820191906000526020600020905b8154815290600101906020018083116101a557829003601f168201915b505050505081565b8280016001018555821561010e579182015b8281111561010e5782518260005055916020019190600101906101dc565b505050565b509056",
    address: "0x8af636bff04b63b9e1966e9ed833353f05725b50",
    generated_with: "2.0.6",
    contract_name: "One"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("One error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("One error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("One error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("One error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.One = Contract;
  }

})();
