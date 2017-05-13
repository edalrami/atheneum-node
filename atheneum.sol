pragma solidity 0.4.8;
contract mortal{

	address public owner;
	function mortal(){
		owner = msg.sender;
	}
	modifier onlyOwner{
		if (msg.sender != owner){
			throw;
		}else{
			_;
		}
	}
	function kill() onlyOwner{
		suicide(owner);
	}
}

contract download_request is mortal{
    //leftover test code
	string public userName;
	//variables
	uint256 cost = 1;
	address downloader;
	address uploader;
	bool transfer_success;
	//Constructor leftover from test
	function download_request(string _name){
		userName = _name;
	}
	//Funcionality to transfer ether in order to download a file
	//Arguments: The address of the file owner who will be paid
	function pay(address _ul){
	    //Check if there are enough funds to download
	    if(msg.sender.balance < cost) {
	        throw;
	    }
	    else{
	        uploader = _ul;
	        //Send() returns a bool if it was successful
	        transfer_success = uploader.send(cost);
	    }
	    //Check for any errors in the transfer
	    if(!transfer_success) {
	        throw;
	    }
	}
}