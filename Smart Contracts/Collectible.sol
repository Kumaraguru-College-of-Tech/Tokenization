pragma solidity >=0.4.22 <0.7.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

/**
 * @title        Collectibles  
 * @author       Preetha P
 * Created       26.11.2020
 * Updated       27.12.2020
 */

contract Collectibles is ERC721{
    
     mapping(uint => Collectible) ColList;

    /** Struct for Collectible Details */
    struct Collectible{
        
      uint256 Art_Token_ID;             /* ArtWork Unique ID */
      
      string Art_Name;                  /* ArtWork Name */
      
      string Art_Year;                  /* ArtWork Created Year */
      
      string Art_Medium;                /* ArtWork Created Medium or Material  */
      
      uint Art_Size;                    /* ArtWork Size(inch or feet or meter) */
      
      string Art_Color;                 /* ArtWork Color */
      
      string Art_Sign;                  /* Signature Position in the ArtWork  */
      
      uint Art_Price;                   /* ArtWork Price */
      
      string Art_Desc;                  /* ArtWork Description */
      
      string Art_Cond;                  /* ArtWork Current Condition */

     
    }
      Collectible col;
    
    /**
     * @dev Create the Token by Passing the Name and Symbol to the ERC721 Cconstructor
     */
    constructor() ERC721("ArtCoin","KCTA") public {}
    
    
    /** 
     * @dev Function to Register Collectible Details
     * @param ui_Art_Token_ID             ArtWork Unique Token ID
     * @param ui_Art_Name                 ArtWork Name
     * @param ui_Art_Year                 ArtWork Created Year
     * @param ui_Art_Medium               ArtWork Created Medium or Material 
     * @param ui_Art_Size                 ArtWork Size(inch or feet or meter)
     * @param ui_Art_Color                ArtWork Color
     * @param ui_Art_Sign                 Signature Position in the ArtWork
     * @param ui_Art_Price                ArtWork Price
     * @param ui_Art_Desc                 ArtWork Description
     * @param ui_Art_Cond                 ArtWork Current Condition
    */
 
    function registerCol(uint256 ui_Art_Token_ID, string memory ui_Art_Name, string memory ui_Art_Year, string memory ui_Art_Medium, uint ui_Art_Size, 
                         string memory ui_Art_Color, string memory ui_Art_Sign, uint ui_Art_Price, string memory ui_Art_Desc, string memory ui_Art_Cond) public {
                             
                             col.Art_Token_ID           = ui_Art_Token_ID;
                             col.Art_Name               = ui_Art_Name;
                             col.Art_Year               = ui_Art_Year;
                             col.Art_Medium             = ui_Art_Medium;
                             col.Art_Size               = ui_Art_Size;
                             col.Art_Color              = ui_Art_Color;
                             col.Art_Sign               = ui_Art_Sign;
                             col.Art_Price              = ui_Art_Price;
                             col.Art_Desc               = ui_Art_Desc;
                             col.Art_Cond               = ui_Art_Cond;
                             _mint(msg.sender, ui_Art_Token_ID);
                             ColList[ui_Art_Token_ID]         = col;
    
        
    }
    
    /** 
      * @dev Function to Retrieve Collectible Details by specifying the Artwork ID
      * @param ui_Art_Token_ID          ArtWork Unique Token ID
      * @param Art_Name                 ArtWork Name
      * @param Art_Year                 ArtWork Created Year
      * @param Art_Medium               ArtWork Created Medium or Material 
      * @param Art_Size                 ArtWork Size(inch or feet or meter)
      * @param Art_Sign                 Signature Position in the ArtWork
      * @param Art_Price                ArtWork Price
      * @param Art_Cond                 ArtWork Current Condition
      * 
     */
    
    function retrieveCol(uint256 ui_Art_Token_ID) public view returns ( string memory Art_Name, string memory Art_Year, string memory Art_Medium, uint Art_Size, 
                         string memory Art_Sign, uint Art_Price, string memory Art_Cond) {
       
       Collectible storage Aid = ColList[ui_Art_Token_ID];  
       return(Aid.Art_Name,
              Aid.Art_Year,
              Aid.Art_Medium,
              Aid.Art_Size,
              Aid.Art_Sign,
              Aid.Art_Price,
              Aid.Art_Cond
              );
       
    }
    
    
    /** 
     * @dev Function to Update Collectible Details
     * @param ui_Art_Token_ID             ArtWork Unique Token ID
     * @param ui_Art_Name                 ArtWork Name
     * @param ui_Art_Year                 ArtWork Created Year
     * @param ui_Art_Medium               ArtWork Created Medium or Material 
     * @param ui_Art_Size                 ArtWork Size(inch or feet or meter)
     * @param ui_Art_Color                ArtWork Color
     * @param ui_Art_Sign                 Signature Position in the ArtWork
     * @param ui_Art_Price                ArtWork Price
     * @param ui_Art_Desc                 ArtWork Description
     * @param ui_Art_Cond                 ArtWork Current Condition
    */
 
    function updateCol(uint256 ui_Art_Token_ID, string memory ui_Art_Name, string memory ui_Art_Year, string memory ui_Art_Medium, uint ui_Art_Size, 
                         string memory ui_Art_Color, string memory ui_Art_Sign, uint ui_Art_Price, string memory ui_Art_Desc, string memory ui_Art_Cond) public {
                             
                             col.Art_Token_ID           = ui_Art_Token_ID;
                             col.Art_Name               = ui_Art_Name;
                             col.Art_Year               = ui_Art_Year;
                             col.Art_Medium             = ui_Art_Medium;
                             col.Art_Size               = ui_Art_Size;
                             col.Art_Color              = ui_Art_Color;
                             col.Art_Sign               = ui_Art_Sign;
                             col.Art_Price              = ui_Art_Price;
                             col.Art_Desc               = ui_Art_Desc;
                             col.Art_Cond               = ui_Art_Cond;
                             
                             ColList[ui_Art_Token_ID]         = col;
    
        
    }
    
}