import 'One.sol';

contract Two{
    function Main(address oneAddress){
        One o = One(oneAddress);
        o.setMsg.value(100)("test");
    }
}
