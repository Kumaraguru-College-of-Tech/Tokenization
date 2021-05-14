
// Certificate ERC-721 ABI
var cert_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Cert_Token_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Holder_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Holder_ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Dept",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Inst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Cls",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Iss_date",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ui_Holder_addr",
				"type": "address"
			}
		],
		"name": "issueCert",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Cert_Token_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Holder_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Holder_ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Dept",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Inst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Cls",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Iss_date",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ui_Holder_addr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "ui_reason",
				"type": "string"
			}
		],
		"name": "updateCert",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Cert_Token_Id",
				"type": "uint256"
			}
		],
		"name": "retrieveCert",
		"outputs": [
			{
				"internalType": "string",
				"name": "Holder_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Holder_ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Dept",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Inst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Cls",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Iss_date",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Holder_addr",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
// Certificate ERC-721 contract address
var cert_contractaddress = '0xc3CC94BC77E42d4a2DE4618CAffB655e9D552108';
	
// Certificate ERC-1155 ABI
var cert_abi2 = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Cert_Token_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Holder_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Holder_ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Dept",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Inst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Cls",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Iss_date",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ui_Holder_addr",
				"type": "address"
			}
		],
		"name": "issueCert",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Cert_Token_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Holder_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Holder_ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Dept",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Inst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Cls",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Iss_date",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ui_Holder_addr",
				"type": "address"
			}
		],
		"name": "updateCert",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Cert_Token_Id",
				"type": "uint256"
			}
		],
		"name": "retrieveCert",
		"outputs": [
			{
				"internalType": "string",
				"name": "Holder_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Holder_ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Dept",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Inst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Cls",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Iss_date",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Holder_addr",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Certificate ERC-1155 contract address
var cert_contractAddress2 = '0xF685fbc4dbA695680139240204925Ba9Bf759304';

// ERC-721 ABI
var land_abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ui_Land_Type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc_Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Bound_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Lat_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Long_Det",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Patta_No",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Doc_No",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ui_Land_Owner_Adr",
				"type": "address"
			}
		],
		"name": "issueLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Land_Token",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc_Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Bound_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Lat_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Long_Det",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Patta_No",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Doc_No",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ui_Land_Owner_Adr",
				"type": "address"
			}
		],
		"name": "updateLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Land_Id",
				"type": "uint256"
			}
		],
		"name": "retrieveLand",
		"outputs": [
			{
				"internalType": "string",
				"name": "Land_Type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Loc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Loc_Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Land_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Land_Bound_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Lat_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Long_Det",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Land_Patta_No",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Land_Doc_No",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Land_Owner_Adr",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
// Land ERC-721 Contract address
var land_contractaddress = '0x6f9aF1b0475EcB5BAdAe6F4Ba341159c53BDe5Fc';

// Land ERC-1155 contract address
var land_contract_address_1155 = '0xbF8CE6E21c6DFE32a9B67AD0A4cF8f9994D5c93c';

// Land ERC-1155 ABI
var land_abi2 = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ui_Land_Type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc_Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Bound_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Lat_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Long_Det",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Patta_No",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Doc_No",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ui_Land_Owner_Adr",
				"type": "address"
			}
		],
		"name": "issueLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Land_Token",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc_Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Bound_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Lat_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Long_Det",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Patta_No",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Doc_No",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ui_Land_Owner_Adr",
				"type": "address"
			}
		],
		"name": "updateLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Land_Id",
				"type": "uint256"
			}
		],
		"name": "retrieveLand",
		"outputs": [
			{
				"internalType": "string",
				"name": "Land_Type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Loc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Loc_Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Land_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Land_Bound_Det",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Land_Id",
				"type": "uint256"
			}
		],
		"name": "retrieveLand2",
		"outputs": [
			{
				"internalType": "string",
				"name": "Land_Lat_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Long_Det",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Land_Patta_No",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Land_Doc_No",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Land_Owner_Adr",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Artwork ERC-721 ABI
var col_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Created_Date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Medium",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Sign",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Cond",
				"type": "string"
			}
		],
		"name": "registerCol",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			}
		],
		"name": "retrieveCol",
		"outputs": [
			{
				"internalType": "string",
				"name": "Art_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Created_Date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Medium",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Art_Size",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			}
		],
		"name": "retrieveCol2",
		"outputs": [
			{
				"internalType": "string",
				"name": "Art_Color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Sign",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Art_Price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Art_Desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Cond",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Created_Date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Medium",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Sign",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Cond",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_reason",
				"type": "string"
			}
		],
		"name": "updateCol",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

// Artwork ERC-721 contract address
var col_contractaddress = '0xd444b6b9a0A078Ff1b83D06F345b78Bc34144Cb2';	

// Artwork ERC-1155 contract address
var artwork_contract_address = '0xdF8312460Ae3457f510E2084D2E5597CCc1E8902';

// Artwork ERC-1155 ABI
var artwork_abi2 = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Year",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Medium",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Sign",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Cond",
				"type": "string"
			}
		],
		"name": "registerCol",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Year",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Medium",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Sign",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Cond",
				"type": "string"
			}
		],
		"name": "updateCol",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			}
		],
		"name": "retrieveCol",
		"outputs": [
			{
				"internalType": "string",
				"name": "Art_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Year",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Medium",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Art_Size",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			}
		],
		"name": "retrieveCol2",
		"outputs": [
			{
				"internalType": "string",
				"name": "Art_Color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Sign",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Art_Price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Art_Desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Cond",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
