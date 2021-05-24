// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.7.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.1.0/contracts/token/ERC1155/ERC1155.sol";

/**
 * @title        Land
 * @author       K.Sowbharnika
 * Created       25.12.2020
 * Updated       03.04.2021
 */

contract Lands is ERC1155 {
   
     mapping(uint => Land) LandList;

    /** Struct for Land Details */
    
    struct Land {
     
      uint256 Land_Id;               /* Land Unique Token ID */
     
      string Land_Type;             /* Land Type */
     
      string Land_Loc;              /* Land Location */
     
      string Land_Loc_Type;         /* Land Location Type  */
     
      uint256 Land_Size;            /* Land Size */
     
      string Land_Bound_Det;        /*Land Boundary Details */
      
      string Land_Lat_Det;          /*Land Latitude Details */
      
      string Land_Long_Det;         /*Land Longitude Details */
     
      uint256 Land_Patta_No;        /* Land Patta Number */
     
      uint256 Land_Doc_No;          /*Land Document Number */
     
      address Land_Owner_Adr;       /* Land Owner Address */
      
      string Reason;                 /* Reason to Modify */ 
     
    }
      Land lan;

    /**
     * @dev Create the Token by Passing the Name and Symbol to the ERC1155 Constructor
     */
     
    constructor()  ERC1155("KCTL") public {
        lan.Land_Id                 = 2021000;
    }
    
    modifier isAuthorized {
      require(msg.sender == 0x87C3A852Ed53E9da4a4691b6721C8f8c27Bd3490, "Only Registrar can Register Land.");
      _;
    }
    
    
    /** 
     * @dev Function to issue a Land
     * @param ui_Land_Type                 Land Type
     * @param ui_Land_Loc                  Land Location 
     * @param ui_Land_Loc_Type             Land Location Type
     * @param ui_Land_Size                 Land Size          
     * @param ui_Land_Bound_Det            Land Boundary Details
     * @param ui_Land_Lat_Det              Land Latitude Details
     * @param ui_Land_Long_Det             Land Longitude Details
     * @param ui_Land_Patta_No             Land Patta Number
     * @param ui_Land_Doc_No               Land Document Number
     * @param ui_Land_Owner_Adr            Land Owner Address
    */
   
    function issueLand(string memory ui_Land_Type, string memory ui_Land_Loc, string memory ui_Land_Loc_Type, uint256 ui_Land_Size, string memory ui_Land_Bound_Det, string memory ui_Land_Lat_Det, string memory ui_Land_Long_Det, uint256 ui_Land_Patta_No,
                        uint256 ui_Land_Doc_No, address ui_Land_Owner_Adr) public isAuthorized{
                             
                             lan.Land_Id                 += 1;
                             lan.Land_Type               = ui_Land_Type;
                             lan.Land_Loc                = ui_Land_Loc;
                             lan.Land_Loc_Type           = ui_Land_Loc_Type;
                             lan.Land_Size               = ui_Land_Size;
                             lan.Land_Bound_Det          = ui_Land_Bound_Det;
                             lan.Land_Lat_Det            = ui_Land_Lat_Det;
                             lan.Land_Long_Det           = ui_Land_Long_Det;
                             lan.Land_Patta_No           = ui_Land_Patta_No;
                             lan.Land_Doc_No             = ui_Land_Doc_No;
                             lan.Land_Owner_Adr          = ui_Land_Owner_Adr;
                             
                             _mint(ui_Land_Owner_Adr, lan.Land_Id, 1, "");
                             LandList[lan.Land_Id]         = lan;
       
    }
    
    
    /** 
     * @dev Function to check a Land
     * @param Land_Id                   Land Unique Token ID
     * @param Land_Type                 Land Type
     * @param Land_Loc                  Land Location 
     * @param Land_Loc_Type             Land Location Type
     * @param Land_Size                 Land Size          
     * @param Land_Bound_Det            Land Boundary Details 
    */
   
    function retrieveLand(uint256 Land_Id) public view returns ( string memory Land_Type, string memory Land_Loc, string memory Land_Loc_Type, uint256 Land_Size,
    string memory Land_Bound_Det) {
       
      Land storage Lid = LandList[Land_Id];  
       return(
              Lid.Land_Type,
              Lid.Land_Loc,
              Lid.Land_Loc_Type,
              Lid.Land_Size,
              Lid.Land_Bound_Det
              );
    }
    
    /** 
     * @dev Function to check a Land
     * @param Land_Lat_Det              Land Latitude Details
     * @param Land_Long_Det             Land Longitude Details
     * @param Land_Patta_No             Land Patta Number
     * @param Land_Doc_No               Land Document Number
     * @param Land_Owner_Adr            Land Owner Address
    */
   
    function retrieveLand2(uint256 Land_Id) public view returns ( string memory Land_Lat_Det, string memory Land_Long_Det, uint256 Land_Patta_No, uint256 Land_Doc_No, address Land_Owner_Adr) {
       
      Land storage Lid = LandList[Land_Id];  
       return(
              Lid.Land_Lat_Det,
              Lid.Land_Long_Det,
              Lid.Land_Patta_No,
              Lid.Land_Doc_No,
              Lid.Land_Owner_Adr
             
              );
    }
    
    
    /** 
     * @dev Function to modify already issued Land
     * @param ui_Land_Type                 Land Type
     * @param ui_Land_Loc                  Land Location 
     * @param ui_Land_Loc_Type             Land Location Type
     * @param ui_Land_Size                 Land Size          
     * @param ui_Land_Bound_Det            Land Boundary Details        
     * @param ui_Land_Lat_Det              Land Latitude Details
     * @param ui_Land_Long_Det             Land Longitude Details
     * @param ui_Land_Patta_No             Land Patta Number
     * @param ui_Land_Doc_No               Land Document Number
     * @param ui_Land_Owner_Adr            Land Owner Address
     * @param ui_Reason                    Reason
    */
    
    function updateLand(uint256 ui_Land_Token, string memory ui_Land_Type, string memory ui_Land_Loc, string memory ui_Land_Loc_Type, uint256 ui_Land_Size, string memory ui_Land_Bound_Det, string memory ui_Land_Lat_Det, string memory ui_Land_Long_Det, uint256 ui_Land_Patta_No,
                        uint256 ui_Land_Doc_No, address ui_Land_Owner_Adr, string memory ui_Reason) public isAuthorized{
                             
                            Land storage Lid = LandList[ui_Land_Token];  
       
                             Lid.Land_Type               = ui_Land_Type;
                             Lid.Land_Loc                = ui_Land_Loc;
                             Lid.Land_Loc_Type           = ui_Land_Loc_Type;
                             Lid.Land_Size               = ui_Land_Size;
                             Lid.Land_Bound_Det          = ui_Land_Bound_Det;
                             Lid.Land_Lat_Det            = ui_Land_Lat_Det;
                             Lid.Land_Long_Det           = ui_Land_Long_Det;
                             Lid.Land_Patta_No           = ui_Land_Patta_No;
                             Lid.Land_Doc_No             = ui_Land_Doc_No;
                             Lid.Land_Owner_Adr          = ui_Land_Owner_Adr;
                             Lid.Reason                  = ui_Reason;
    
                            LandList[ui_Land_Token]  = Lid;
    
        
    }
   
}
