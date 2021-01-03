pragma solidity >=0.4.22 <0.7.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

/**
 * @title        Degree Certificate
 * @author       Sandhiya S
 * Created       26.11.2020
 * Updated       03.02.2020
 */

contract Certificates is ERC721{
    
     mapping(uint => Certificate) CertList;

    /** Struct for Certificate Details */
    struct Certificate{
      
      uint256 Cert_Token_Id;        /* Certificate Unique Token ID */
      
      string Holder_Name;           /* Certificate Holder Name */
      
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
     
    constructor() ERC721("CertCoin","KCTC") public {
        
        
    }

    modifier isAuthorized {
      require(msg.sender == 0x87C3A852Ed53E9da4a4691b6721C8f8c27Bd3490, "Only Anna University can issue certificate.");
      _;
    }
     
    /** 
     * @dev Function to issue a Certificate 
     * @param ui_Cert_Token_Id              Certificate Unique Token ID
     * @param ui_Holder_Name                Certificate Holder Name
     * @param ui_Dept                       Holder Department
     * @param ui_Inst                       Holder Institution 
     * @param ui_Cls                        Holder Grade Classification
     * @param ui_Iss_date                   Certificate Issued Date
     * @param ui_Holder_addr                Holder Wallet Address
    */
    
    function issueCert(uint256 ui_Cert_Token_Id, string memory ui_Holder_Name, string memory ui_Dept, string memory ui_Inst, 
    string memory ui_Cls, string memory ui_Iss_date, address ui_Holder_addr) public isAuthorized {
                             
                             cert.Cert_Token_Id           = ui_Cert_Token_Id;
                             cert.Holder_Name             = ui_Holder_Name;
                             cert.Dept                    = ui_Dept;
                             cert.Inst                    = ui_Inst;
                             cert.Cls                     = ui_Cls;
                             cert.Iss_date                = ui_Iss_date;
                             cert.Holder_addr             = ui_Holder_addr;
                             
                             _mint(ui_Holder_addr, ui_Cert_Token_Id);
                             CertList[ui_Cert_Token_Id]   = cert;
    
        
    }
    
    
    /** 
     * @dev Function to check a Certificate 
     * @param ui_Cert_Token_Id           Certificate Unique Token ID
     * @param Holder_Name                Certificate Holder Name
     * @param Dept                       Holder Department
     * @param Inst                       Holder Institution 
     * @param Cls                        Holder Grade Classification
     * @param Iss_date                   Certificate Issued Date
     * @param Holder_addr                Holder Wallet Address
    */
    
    function retrieveCert(uint256 ui_Cert_Token_Id) public view returns ( string memory Holder_Name, string memory Dept, string memory Inst, 
    string memory Cls, string memory Iss_date, address Holder_addr, string memory msg) {
       
       Certificate storage Cid = CertList[ui_Cert_Token_Id];
       
       if(Cid.Holder_addr == 0x0000000000000000000000000000000000000000)
       {
           return(
              Cid.Holder_Name,
              Cid.Dept,
              Cid.Inst,
              Cid.Cls,
              Cid.Iss_date,
              Cid.Holder_addr,
              msg = "No certificate has been issued with the specified ID! "
              );
       }
       
       else {
       return(
              Cid.Holder_Name,
              Cid.Dept,
              Cid.Inst,
              Cid.Cls,
              Cid.Iss_date,
              Cid.Holder_addr,
              msg = "These are the certificate details"
              );
          } 
    }
    
    
    /** 
     * @dev Function to modify already issued Certificate 
     * @param ui_Cert_Token_Id              Certificate Unique Token ID
     * @param ui_Holder_Name                Certificate Holder Name
     * @param ui_Dept                       Holder Department
     * @param ui_Inst                       Holder Institution 
     * @param ui_Cls                        Holder Grade Classification
     * @param ui_Iss_date                   Certificate Issued Date
     * @param ui_Holder_addr                Holder Wallet Address
    */
    
    function updateCert(uint256 ui_Cert_Token_Id, string memory ui_Holder_Name, string memory ui_Dept, string memory ui_Inst, string memory ui_Cls, 
    string memory ui_Iss_date,  address ui_Holder_addr) public isAuthorized{
                             
                            Certificate storage Cid = CertList[ui_Cert_Token_Id];  
       
                            Cid.Holder_Name         = ui_Holder_Name;
                            Cid.Dept                = ui_Dept;
                            Cid.Inst                = ui_Inst;
                            Cid.Cls                 = ui_Cls;
                            Cid.Iss_date            = ui_Iss_date;
                            Cid.Holder_addr         = ui_Holder_addr;
    
                            CertList[ui_Cert_Token_Id]  = Cid;
    
        
    }
    
}