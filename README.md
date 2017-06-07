# Atheneum-Node
CMPS 115 Project  
Link to old repository [here](https://github.com/thraxxed/CryptocurrencyTracker)


Essentials to the Project:

node_modules: Folder containing imported node packages used throughout project. 
              Subfolders and packages used include: ejs, firebase-admin, express,
              express session, dotenv, getmdl-select, mdl-selectfield, remodal, and web3.
              
public: Folder containing all css files, JavaScript files, and images that are viewable
        on the client side of the app.
        
routes: Contains functions.js and main. js
        main.js is used to define the modules for the pages defined in the ejs framework.
        functions.js is used to keep some of our JavaScript functions on the server side
        so that they shouldn't be viewable on the client side of the application, such as
        the functions we use to handle wallet transactions.
        
        NOTE: Due to time constraints we had, we did not move our JavaScript functions
        to functions.js, and decided to leave most of our JavaScript within the ejs files.
        We know this is bad practice, but we did not want to break our project right before the
        due date. 
        
views: Contains the main pages of our project which are, download.ejs, upload.ejs, and index.ejs.

        index.ejs: Home page of Atheneum with setup instructions, and login. You cannot
                   access the other pages of Atheneum without signing in.
                   
        download.ejs: Browse files and users have uploaded already and purchase them if
                      necessary
                      
        upload.ejs: Upload your own content to Atheneum.
        
app.js: Sets the server to admin access to our firebase database, initializes the express 
        framework, defines how sessions behave and are stored, creates GET requests to render
        each page. 
        
Atheneum-5adcbe47350f.json: This is a JSON key that grants the server admin access to firebase

atheneum.sol: The is the solidity contract that was written and deployed to the Ethereum
              Testnet Block Chain. Due to difficulties we decided to remove it from handling 
              transactions, but left it here as a proof of work.
              
CodingStandard,pdf: Outlines are style guildelines for our project

CONTRACT_INFO.txt: This includes the address of where the contract in atheneum.sol is published
                   on the Ethereum Testnet Blockchain and the corresponding ABI to interact with it. 

cors.json: Allows for cross domain requests

package.json: All node modules used for the project must also be written into this file or the 
              heroku server will crash. 
              
README.md: Lists all files and folders and their purpose

Sprint1Plan.pdf: Plan for sprint 1

Sprint1Report.pdf: Final summary of sprint 1

Sprint1Summary(1).pdf: Summary of the sprint 1

Sprint2Report.pdf: Summary of sprint 2

Sprint3Plan.pdf: Plan for sprint 3

Sprint3Report.pdf: Summary of sprint 3


NON-Essential:

accounts: This is the folder where accounts were handled before integrating them
          into the prototype.
          
functionality: This is the folder that contains all of our testing of our firebase
               functionality before integrating it into the prototype.
               
html-test: Folder containing the previous designs of the front-end of our project
           before integrating it into the prototype.

