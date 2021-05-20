// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.1.0/contracts/token/ERC1155/ERC1155.sol";

/**
 * @title        Degree Certificate
 * @author       Sandhiya S
 * Updated       03.04.2021
 */

contract Certificates is ERC1155 {
    
     mapping(uint => Certificate) CertList;

    /** Struct for Certificate Details */
    struct Certificate{
      
      uint256 Cert_Token_Id;        /* Certificate Unique Token ID */
      
      string Holder_Name;           /* Certificate Holder Name */
      
      string Holder_ID;             /* Holder Unique ID */
      
      string Dept;                  /* Holder Department */
      
      string Inst;                  /* Holder Institution  */
      
      string Cls;                   /* Holder Grade Classification */
      
      string Iss_date;              /* Certificate Issued Date */
     
      address Holder_addr;          /* Holder Wallet Address */
      
     
    }
      Certificate cert;
      
      
    /**
     * @dev Create the Token by Passing the Name and Symbol to the ERC721 Constructor
     */
     
     constructor() public ERC1155("KCTC") { }

    modifier isAuthorized {
      require(msg.sender == 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "Only Authorized University can issue certificate.");
      _;
    }
     
    /** 
     * @dev Function to issue a Certificate 
     * @param ui_Cert_Token_Id              Certificate Unique Token ID
     * @param ui_Holder_Name                Certificate Holder Name
     * @param ui_Holder_ID                  Certificate Holder Unique ID
     * @param ui_Dept                       Holder Department
     * @param ui_Inst                       Holder Institution 
     * @param ui_Cls                        Holder Grade Classification
     * @param ui_Iss_date                   Certificate Issued Date
     * @param ui_Holder_addr                Holder Wallet Address
    */
    
     function issueCert(uint256 ui_Cert_Token_Id, string memory ui_Holder_Name, string memory ui_Holder_ID, string memory ui_Dept, string memory ui_Inst, 
    string memory ui_Cls, string memory ui_Iss_date, address ui_Holder_addr) public isAuthorized{
        
                             
                             cert.Cert_Token_Id           = ui_Cert_Token_Id;
                             cert.Holder_Name             = ui_Holder_Name;
                             cert.Holder_ID               = ui_Holder_ID;
                             cert.Dept                    = ui_Dept;
                             cert.Inst                    = ui_Inst;
                             cert.Cls                     = ui_Cls;
                             cert.Iss_date                = ui_Iss_date;
                             cert.Holder_addr             = ui_Holder_addr;
                             
                             _mint(ui_Holder_addr, ui_Cert_Token_Id, 1, "");
                             CertList[ui_Cert_Token_Id]   = cert;
    
        
    }
    
    
    /** 
     * @dev Function to check a Certificate 
     * @param ui_Cert_Token_Id           Certificate Unique Token ID
     * @param Holder_Name                Certificate Holder Name
     * @param Holder_ID               Certificate Holder Unique ID
     * @param Dept                       Holder Department
     * @param Inst                       Holder Institution 
     * @param Cls                        Holder Grade Classification
     * @param Iss_date                   Certificate Issued Date
     * @param Holder_addr                Holder Wallet Address
    */
    
    function retrieveCert(uint256 ui_Cert_Token_Id) public view returns (string memory Holder_Name, string memory Holder_ID, string memory Dept, string memory Inst, 
    string memory Cls, string memory Iss_date, address Holder_addr) {
       
       Certificate storage Cid = CertList[ui_Cert_Token_Id];
       
       return(
              Cid.Holder_Name,
              Cid.Holder_ID,
              Cid.Dept,
              Cid.Inst,
              Cid.Cls,
              Cid.Iss_date,
              Cid.Holder_addr
              );
    }
    
    
    /** 
     * @dev Function to modify already issued Certificate 
     * @param ui_Cert_Token_Id              Certificate Unique Token ID
     * @param ui_Holder_Name                Certificate Holder Name
     * @param ui_Holder_ID                  Certificate Holder Unique ID
     * @param ui_Dept                       Holder Department
     * @param ui_Inst                       Holder Institution 
     * @param ui_Cls                        Holder Grade Classification
     * @param ui_Iss_date                   Certificate Issued Date
     * @param ui_Holder_addr                Holder Wallet Address
    */
    
    function updateCert(uint256 ui_Cert_Token_Id, string memory ui_Holder_Name, string memory ui_Holder_ID, string memory ui_Dept, string memory ui_Inst, string memory ui_Cls, 
    string memory ui_Iss_date,  address ui_Holder_addr) public isAuthorized{
                             
                            Certificate storage Cid = CertList[ui_Cert_Token_Id];  
       
                            Cid.Holder_Name         = ui_Holder_Name;
                            Cid.Holder_ID           = ui_Holder_ID;
                            Cid.Dept                = ui_Dept;
                            Cid.Inst                = ui_Inst;
                            Cid.Cls                 = ui_Cls;
                            Cid.Iss_date            = ui_Iss_date;
                            Cid.Holder_addr         = ui_Holder_addr;
    
                            CertList[ui_Cert_Token_Id]  = Cid;
    
        
    }
    
}