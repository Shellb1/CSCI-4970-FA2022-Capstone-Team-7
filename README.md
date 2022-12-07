This is the code repository for team #7 of the University of Nebraska-Omaha's CS Capstone class of Fall 2022. 

Our project is creating a client-side PDF annotations application for Buildertrend Inc, an Omaha-based company which
provides construction management software. This application will take the form of an Angular-based web application served on an 
Amazon EC2 instance. 

To run this locally, *node* version 16+ and *npm* version 8+ are required. To start, run *npm install* in the root
directory of the project to install all necessary dependencies. Then, run *ng serve* to start the application locally. 

Deploys to the EC2 server are done manually by the team, and any future deploys to different infrastructure
will have to be done manually. 

To run the test cases, please run *ng test* in the root directory. This will direct Karma to run all of the 
automated tests within the .spec.ts files in the project. 

RELEASE NOTES FOR MILESTONE 1:

    Deployment environment (EC2 server) set up. 

    Barebones Angular project created and deployed on the instance. 

    Routing between various pages has been set up. 

    All of the code for this release resides in the main branch. 

RELEASE NOTES FOR MILESTONE 2:

    PDF.js viewer built into application. The viewer has features such as searching, 
    opening PDF's fully client-side, and more. Annotations are not present yet but will be
    in a future release. 

    Development started on other pages. 

    Added a banner to the top of the application that is present across all pages. 

    Other libraries beginning to be explored, but no active development as of now. 

RELEASE NOTES FOR MILESTONE 3:

    PDF.js viewer with annotation features implemented. 2 other libraries are also in the project. An about section for PDF.js was added
    highlighting some of the features of the application. 

    Pages for the other 2 libraries are created with viewers for each. No about section quite yet though for these pages. This will be done
    in milestone 4. 

    Stylistic reworks of some of the pages as necessary. 

RELEASE NOTES FOR MILESTONE 4:

    Other viewers fully implemented in the application.Info sections about other viewers implemented on the respective pages. 
    On 2 of the pages, the default PDF was removed so the user can open their own PDF right away. 

    A 4th page was added with a features comparison table. As part of milestone 5, this table will be built out 
    to include features of the various libaries and summarized info. 

    Stylistic reworks of some of the pages as necessary. 

RELEASE NOTES FOR MILESTONE 5:

    Comparison table finished with key comparisons made in the table. Updated the overall styling to reflect Buildertrend's color 
    scheme. Also updated the styling of the table to make it centered. 
    
    We also attempted to port the application to React, but unfortunately this did not work. The work documented
    for this change can be found at https://github.com/Shellb1/CSCI-4970-FA2022-Capstone-Team-7/tree/attempted-react-migration. 
