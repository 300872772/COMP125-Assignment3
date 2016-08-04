/**
 * this is a mini profile extended web application which is all about Md Mamunur Rahman 
 * @Author Md Mamunur Rahman
 * @student ID: 300872772
 * @Version 0.0.2 Added funtionality to show value of fields of form in console
 * @Last Update 09-June-2016
 * @website: http://mamun-miniportfolio-extended.azurewebsites.net
 * @description: this file is main javascript file for the website
 */


// IIFE - Immediately Invoked Function Expression
(function () {

    // define arrays of HTML elements
    var paragraphHeading = [];
    var paragraphElements = [];


//FORM HANDLING IN CONTACT PAGE BEGIN++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //creat a reference to the button in contact page
    var sendButton = document.getElementById("sendButton");
    //check to see if endbutton exists
    if (sendButton) {
        //event listener 
        sendButton.addEventListener("click", sendButtonClick);
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

    // define your paragraphHeadingText array;
    var paragraphsHeadingText = [];

    // data for my Paragraph Heading
    paragraphsHeadingText[0] = "WELCOME TO MY WORLD";
    paragraphsHeadingText[1] = "MY PROJECTS";
    paragraphsHeadingText[2] = "MINI BIOGRAPHY";
    paragraphsHeadingText[3] = "MY BLOGS";
    paragraphsHeadingText[4] = "MY PHOTOGRAPHY";
    paragraphsHeadingText[5] = "CONTACT";
    // define your paragraphs array;
    var paragraphs = [];

    // data for my pages
    paragraphs[0] = "";
    //Content of Project Page
    paragraphs[1] = "<div class='row'><div class='photobook1'><div class='col-md-3'  style='height:430px; width:330px;'><span class='photobook'><br><b>PHOTOBOOK</b><br><br><small><p  align='justify' style='padding-right:10px;'>This web application is under development and is being developed by PHP-MSQL. This an application for public photography uploading. People can submit their photo and like other's photo as well. Search option yet to be added.</p></small><br><br><a href='http://photobook.azurewebsites.net/?p=2' target='_blank' class='list-group-item'><img src='../Assets/photobook.jpg' height='40%' width='99%'></a></span></div><div class='col-md-3' style='height:430px; width:330px;'><span class='photobook'><br><b>MY RASONA</b><br><br><small><p  align='justify' style='padding-right:10px;'>This is an Online shopping solution, particularly for grocery shop. There is an addcart option and product and product catagory uploading option. There is a customer registration and login system to ensure protected online sales.</p></small><br><br><a href='http://www.myrasona.com' target='_blank' class='list-group-item'><img src='../Assets/myrasona.jpg' height='40%' width='99%'></a></span></div><div class='col-md-3' style='height:430px; width:330px;'><span class='photobook'><br><b>PHOTOGRAPHER</b><br><br><small><p  align='justify' style='padding-right:10px;'>This website is just for displaying my own photography.All site decoration is based on CSS. There is no database for photo repository handling. Thsi is just a raw HTML website with CSS properties.</p></small><br><br><a href='http://photographers.azurewebsites.net' target='_blank' class='list-group-item'><img src='../Assets/photographer.jpg' height='40%' width='99%'></a></span></div></div><div class='photobook'><a href='https://github.com/300872772?tab=repositories' target='_blank' >My Github Links</a></div></div> ";
    //Content of Mini Biography Page
    paragraphs[2] = "<div class='row'><div class='photobook'><div class='col-md-3'><img src='../Assets/mamun.jpg' class='mamunImage'></div><div class='col-md-3'><span class='photobook'><small>Name:</small><br><b>MD MAMUNUR RAHMAN</b><br><small>Current Occupation:</small><br><b>Student of Software Engineering and Technology, Centennial College</b><br><small>Education:</small><br><b>MBA Major in Accounting</b></span></div><div class='col-md-3'><span class='photobook'><small>Passion:</small><br><b>Computer Programming</b><br><small>Hobby:</small><br><b>Photography, Musical Instrument Collection, Watching Movie, Reading Book, Travelling ....</b><br><small>Language:</small><br><b>English, Bengali, Hindi</b><br><small></span></div><div class='col-md-3'><span class='photobook'><small>Programming Language:</small><br><b>VBA, C#, Java Script, PHP, Java (Android Apps), Swift(OS Apps)</b><br><small>Top Skill:</small><br><b>WEB APPLICATION DEVELOPMENT, VBA MACRO TOOLS DEVELOPMENT, MANAGERIAL FINANCIAL ANALYSIS AND REPORTING.</b></span></div></div></div> <div class='row'><br><ul class='photobook'><h3>Summary of Experiences:</h3><h4><li>Web, Mobile and Desktop application developer. </li><li>Astute Visual Basic programmer and macro tools maker in MS Excel.<li> Have depth knowledge and experience in Business Intelligence (BI) designing and formatting and data analysis.</li><li>Also have 7 years working experience under SAP ERP platform.</li></li><li>Have experience of working in Shipping Lines, Airlines, Freight Forwarding and Supply Chain, Contract Logistics and FMCG sales & Distribution businesses under MGH Group, Singapore.</li><li>Have experience of working in Agro-Industrial and Food Business under C.P. Bangladesh Co. Ltd.</li><li>Have experience working in multicultural environment in different countries(Singapore, UAE, Egypt, Vietnam etc.)</li></h4></lu></div>";
    //Content of Blog Page
    paragraphs[3] = "<div class='containerDecoration' style='border-style: solid;border-color: lightgray;'><h4><u><b>IGNORANCE OF GLOBAL-WARMING ISSUE CANNOT AVOID DISASTER, BUT RATHER ENSURES WRITING AN EPITAPH FOR ENTIRE HUMAN SPECIES</b></u><h4><br><p align='justify'><small>Global-warming, the unseen truth is not just the title of a story or a myth, but the cruel reality for the human race. This is hard to recognize and visualize the global warming directly, but it is really happening around us.  The author Al Gore has explained in the essay “ The Moment of Truth” in detail about symptoms, causes and negative effects of global warming as well as reminded not to avoid the moment of truth.....<a href='http://mamunglobalwarming.blogspot.ca/2016/05/global-warmingthe-unseen-truth-is-not.html' target='_blank'>Read More</p></small></a></div><div class='containerDecoration' style='border-style: solid;border-color: lightgray;'><h4><u><b>THE ADOPTION OF DIGITAL TECHNOLOGY HAS BROUGHT A VISIBLE DIVIDE BETWEEN INDIVIDUALS, SOCIETIES, COUNTRIES OR DEMOGRAFIC AREAS DUE TO THE INQUEALITY IN ACCESS TO DIGITAL TECHNOLOGY</b></u><h4><br><p align='justify'><small>Digital technologies have changed the world, and have its influence in every aspect of socioeconomic life of human being. From agriculture to rocket science, every category of human activities has got a pace and a new benchmark of success embracing digital technologies. These technologies have entered into such a deep level of socioeconomic activities and have transformed the society to such a new shape; virtually nobody can think life without it. Unfortunately, the reality is, all human-being on Earth is not getting direct benefit out of these technologies, even in developed countries, because of the inability to access to this digital world......<a href='http://mamundigitaldivide.blogspot.ca' target='_blank'>Read More</p></small></a></div>";

    paragraphs[4] = "";
    //Content of Contact Page
    paragraphs[5] = "<div class='containerDecoration'>Address:<br>9 Crescent Place<br>Toronto,ON M4C5L8<br><br>Phone:<br>647-447-3215<br><br>Email: <br>mamun131@gmail.com<br></div>";

    //if paragraph exists then populate each paragraph heading and body 
    //content on the page

    for (var index = 0; index < paragraphElements.length; index++) {
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];
            paragraphHeading[index].innerHTML = paragraphsHeadingText[index]

        }
    }



})();