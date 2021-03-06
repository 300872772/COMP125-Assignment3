/**
 * This is a mini profile extended web application which is all about Md Mamunur Rahman 
 * 
 * @FileName: app.js
 * @Author Md Mamunur Rahman
 * @student ID: 300872772
 * @Last Update 04-August-2016
 * @website: http://mamun-miniportfolio-extended.azurewebsites.net
 * @description: this file is main javascript file for the website
 */


// IIFE - Immediately Invoked Function Expression
(function () {

    // define objects, arrays and variabes
    var paragraphHeading = [];
    var paragraphElements = [];
    var xhrParagraphDataFile;

    //FILE READING PROCESS HANDLING FOR PARAGRAPH GENERATION BEGIN+++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    /**
     * This function is for reading data from file
     * 
     * @method readData
     * @return {void} 
     */
    function readData() {

            // data loaded                                      everything is ok
        if ((xhrParagraphDataFile.readyState === 4) && (xhrParagraphDataFile.status === 200)) {

            var paragraphFile = JSON.parse(xhrParagraphDataFile.responseText);
            var paragraphs = paragraphFile.paragraphs;

            var counter=0;
            //extracting data from object
            paragraphs.forEach(function (paragraph) {                
	            if (paragraphElements[counter]) {
                    	paragraphHeading[counter].innerHTML = paragraph.paragraphHeading;
                        paragraphElements[counter].innerHTML = paragraph.paragraphDetail;
                }   
                console.log(paragraph.paragraphDetail);
            counter++;

            }, this);

        } 

    }
    /**
     * This function is for connecting with file and to ope for file reading
     * 
     * @method readParagraphFile
     * @return {void} 
     */
    function readParagraphFile() {
        xhrParagraphDataFile = new XMLHttpRequest(); // create xhr object

        xhrParagraphDataFile.open("GET", "../Scripts/paragraphs.json", true); // open request

        xhrParagraphDataFile.send(null); // send request

        xhrParagraphDataFile.addEventListener("readystatechange", readData);


    }

    //FILE READING PROCESS HANDLING FOR PARAGRAPH GENERATION END+++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    //FORM HANDLING IN CONTACT PAGE BEGIN++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    /**
     * This function is for handling form in contact page
     * 
     * @method formHandlingContactPage
     * @return {void} 
     */
    function formHandlingContactPage() {
        //creat a reference to the button in contact page
        var sendButton = document.getElementById("sendButton");
        //check to see if endbutton exists
        if (sendButton) {
            //event listener 
            sendButton.addEventListener("click", sendButtonClick);
        }


        //create a references for fields in contatc page form
        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var email = document.getElementById("email");
        var contactNumber = document.getElementById("contactNumber");
        var message = document.getElementById("message");

        //create a reference to the form
        var contactForm = document.getElementById("contactForm");

        if (contactForm) {
            //event listener
            contactForm.addEventListener("submit", contactFormSubmit);
        }
    }
    /**
     * This function is a event handler function for sendButtonClick event
     * 
     * @method sendButtonClick
     * @return {void} 
     */
    function sendButtonClick(event) {
        console.log("clicked");

    }

    /**
     * This function is a event handler function for formsubmit event
     * 
     * @method contactFormSubmit
     * @return {void} 
     */
    function contactFormSubmit(event) {
        event.preventDefault();
        console.log("submitted");
        showFormInput();
        contactForm.reset();
    }
    /**
     * This function shows the input from each form field on console
     * 
     * @method showFormInput
     * @return {void} 
     */
    function showFormInput() {
        console.log("+++++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("Last Name: " + lastName.value);
        console.log("Email: " + contactNumber.value);
        console.log("Contact Number: " + email.value);
        console.log("Message: " + message.value);
        console.log("+++++++++++++++++++++++++++++++++++");
    }
    //FORM HANDLING IN CONTACT PAGE END++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    /**
     * This function binds paragraph element and headings
     * 
     * @method handlingParagraph
     * @return {void} 
     */
    function handlingParagraph() {

        //bonding ids with paragraphHeading arrays
        paragraphHeading[0] = document.getElementById("homeHeading");
        paragraphHeading[1] = document.getElementById("projectsHeading");
        paragraphHeading[2] = document.getElementById("biographyHeading");
        paragraphHeading[3] = document.getElementById("blogsHeading");
        paragraphHeading[4] = document.getElementById("photographyHeading");
        paragraphHeading[5] = document.getElementById("contactHeading");

        //bonding ids with paragraphElements arrays
        paragraphElements[0] = document.getElementById("homePara");
        paragraphElements[1] = document.getElementById("projectsPara");
        paragraphElements[2] = document.getElementById("biographyPara");
        paragraphElements[3] = document.getElementById("blogsPara");
        paragraphElements[4] = document.getElementById("photographyPara");
        paragraphElements[5] = document.getElementById("contactPara");
    }

    // app entry function
    function init() {
        formHandlingContactPage();
        handlingParagraph();
        readParagraphFile();
    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})();