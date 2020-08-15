window.__NUXT__=(function(a,b,c,d,e,f,g,h,i){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1597516961",layout:"default",error:null,serverRendered:true,routePath:"\u002Fabout",config:{},__i18n:{langs:{en:{home:{_title:"Home",_description:"Personal portfolio of web developer and web designer Ruslan Parkhomenko - fubarpatsharp. Contacts, opportunities, list of completed projects.",subtitle:"web developer and graphic designer"},cases:{_title:"Cases",_description:"Cases list of web developer and web designer Ruslan Parkhomenko - fubarpatsharp",list:{portfolio:{title:"This website",_description:"this website description",p1:"This site can be described as one example of my work. The background of this project is relatively short. At the beginning of creation of the site I was guided by the fact that there should be a place for publication of examples of my works. Over time a very logical requirement was added - a short resume and my contacts for cooperation with customers.",task:"personal portfolio development",p2:"The first website version was built makeshift and fast. Navigation and content are simple. Design sketches were created in Figma (\u003Ca class='link' rel='noreferrer' href='https:\u002F\u002Fbit.ly\u002F2BzKh7T' target='_blank'\u003Elink to project\u003C\u002Fa\u003E). In my head, the site was imaging in dark colors so I've focused on this while creating a design.",p3:"Technically, the site designed quite simply using Vue + Webpack + Babel. Pages were created by separate components, all data for projects were stored in different files. In the future, it would be a great addition to add the Content Control Panel (if there are enough completed projects). ",p3_image_header:a,p4:"In the second version of the site, I got more serious. Initially, it was clear that the Vue has a weak SEO optimization, which does not allow us to achieve the search for keywords. On this understanding, it predetermined in advance that an SSR solution is needed. To create a portfolio with SSR decided to use Vue, and Nuxt because it is the best wrapper for this framework with rendering on the server. ",p5:"Sometime after the release of the last version of the site was understand excessive simplicity of the visual. Getting closer to the beginning of the new release (April 2020) it was already determined that it is necessary to create an interface that speaks about my capabilities as a designer. It was decided not to torture any novelties in the tools, so I used the same Figma (link to the project) for prototyping. The mobile version and the development of each page gave me a clear understanding, as a web developer, what to create. In short, I use SASS preprocessor together with purge-css and bootstrap-grid library.",p5_image_header:b,p6:"I can't say any difficulties with developing Nuxt (which, by the way, I worked with for the first time). The experience is interesting so I am going to offer my customers this tool for resolving their businesses where appropriate",p7:"Mention should be made of the absolute advantage of the new version in multi-language (Ukrainian, English, and Russian), which is technically implemented using the nuxt-i18n package. ",p8:"To fill the site looked through a lot of mockups to create a cute preview and review many screenshots of my work. In each business should be captured almost halfway steps, which will make it clear, for example, a similar portfolio.",p9:"For the simplicity of the analysis of my work, I permitted using Vue devtools here. \u003Ca class='link' rel='noreferrer' href='https:\u002F\u002Fbit.ly\u002F2ZGKm1p' target='_blank'\u003ELink\u003C\u002Fa\u003E to second version of design",footer_dates:"Developed in 2019-2020",gallery:{"1":"Mockup of the first version","2":"Home page, the first version","3":"Cases list, the first version","4":"Case details, the first version","5":"About me page, the first version","6":"Mockup of the second version","7":"Home page of the second version","8":"Case details pt. 1, the second version","9":"Case details pt. 2, the second version","10":"Footer of case details page pt. 1, the second version","11":"Footer of case details page pt. 2, the second version","12":"About me, the second version","13":"Contacts page, the second version","14":"Images for page preview for OpenGraph protocol"},tools:{figma:{name:c,done:["Created UI\u002FUX for first and second website versions","Created images for OpenGraph protocol","Created own icon and avatar"]},vue:{name:d,done:["Used SPA mode","Components for easier development"]},nuxt:{name:"Nuxt",done:["Server-side rendering to improve SEO","Used nuxt-i18n library for multilingual feature"]}}},pocketlife:{title:"Pocketlife",_description:"Pocketlife - Minecraft game servers project. The full story about web development and design of the project from web developer and web designer Ruslan Parkhomenko - fubarpatsharp",p1:"Work with the project started in 2016 initially by petite changes to the actual layout based on the Bootstrap framework. Later the customer and I agreed on the need to create a template not based on somebody’s projects. According to the target audience and the scope of the project, the main development vector was formed.",task:"the development of a mobile-first website for the Minecraft server.",p2:"The first version of the site used Bootstrap, a library for the radial progress bar and jQuery to obtain data from the server and further processing this data - displaying the number of players on the game server.",p2_image_header:a,p3:"After a while, the customer has expanded the project. Because of the increased number of servers after the expansion the concept of the production version of the site was not appropriate. Accordingly, it was decided to develop a new version of the site.",p4:"As a UI-framework for the first time in commercial practice I used UIKit; for periodic data parsing from the server still used jQuery.",p4_image_header:b,p5:"For the version below, a remark is required. In the project, players were able to make donations in exchange for in-game privileges. Until the next version of the site, a third-party platform was used to automate the processing of these privileges, which was linked from the main project site and social networks. This platform, according to the customer, had its disadvantages: 1) commission from each exchange; 2) technical features of the platform, which didn’t allow to customize privileges. Based on the need to implement its own strapping site game server was created a third version of the site.",p6:"Technically and visually, the site became more advanced. PHP was used to process payments via backend. Vue was used as an experiment to simplify frontend development. Other details (UIKit framework and mobile-first design) were the same.",p7:"The backend was created without using frameworks, but with only one library to work with RCON (the interface between the game server and the outside world). Payment via bank systems and e-wallets was created by using the Interkassa payment system.",p7_image_header:"Third website version",p8:"During the development of the first versions of the site customer rarely said that it would be nice to create branding, which would same on the site and in social networks.",p9:"After many edits in Adobe Photoshop for the first time, I created a full design of the site, with a detailed visualization of pages. For branding, I also prepared several images for social networks: a header for the VKontakte group and news blanks. The design of the site was also incorporated techniques for creating a user control panel. Unfortunately, these things were not used later.",p10:"Functions in the equation of site creation remained the same, only the number of variables in these functions has changed – with Vue I used the Axios and Vue-Router libraries; in backend - Laravel. Once again, the integration with Interkassa remains the same. By the way, the customer offered to implement purchase notifications in the Telegram channel, which was successfully implemented.",p11:"By the existing sites of other projects this site was worthy, and also quite bright (although now I am convinced that the style is quite motley).",p11_image_header:"Fourth website version",p12:"Just about a year ago, the above version was existing. We agreed with the customer that the project needs a simpler and more concise solution, using a well-established color scheme.",p13:"In Adobe XD, I made the UI extremely simple. Technically, Laravel remained in backend with the same server bundling and integration with the payment system. On Frontend decided to make a small rollback to jQuery, because Vue's capabilities were extremely exhaustive.",p13_image_header:"Fifth website version",user_flow_title:"User flow demonstration",user_flow_description:"The gif-image quickly shows the user-flow of the latest version of the implemented project. Click on the image to zoom it.",footer_dates:"Created in 2016-2019",gallery:{v4_1:"Another screenshot of the fourth version of the site",v4_2:"Server selection page for donation",v4_3:"Game download page",v4_4:"Example of validation and modal for entering player's data",v4_5:"Heading for page in Vkontakte (screenshot from Adobe Photoshop)",v4_6:"Another version of the design of the fourth version of the site",v4_7:"Just a photo with website with St. Petersburg's background"},tools:{photoshop:{name:"Adobe Photoshop",done:["Prototyping of UI\u002FUX","Images for OpenGraph","Social media images"]},vue:{name:d,done:["SPA mode",e,f]},jquery:{name:"jQuery",done:[e,f]},laravel:{name:"Laravel",done:["Processing information about products","Invoice creation for payment systems","Interact with game server to give privileges for players","Notifications for Telegram channel"]}}},tf_landing:{title:"24serv.pro landing",_description:"Designing and development of landing page for popular in CIS game and virtual private servers provider 24serv.pro from web developer and web designer Ruslan Parkhomenko - fubarpatsharp",p1:"The popular in CIS games and VPS hosting provider offers its services since 2014. Following then, the company's website has not been updated. Low rates in Lighthouse began to worry customers because it is known that this tool is a marker of the Core Web Vitals, which affects the positions in search engines. Having just specific wishes based on the references sent by the customer was easy to express the goals of the project.",task:"visually and technically update the website without major changes in the structure and get a high-performance with good Lighthouse results.",p2:"A few words about the previous version of the site. Obviously, by this time my customers were using a ready-made template, such as those that are hundreds created for popular shops of such digital products. The lack of templates - a huge number of components, which will be used only a tiny part. The \"size\" of downloaded resources of landing about 3.9 MB! Nevertheless, the composition of the site is good, users can easily find what they need.",p3:"About UI. Although I liked the structure of the site, it is difficult to say about the main page, so I placed all tariffs on the root page so users did not have to search through the entire site of this information. Later, the customer made changes and offered to place only preselected tariffs. The main goal of UI to be a visually lightweight website.",p4:"Later, an SEO specialist from the customer's asked to add text blocks and feedback section.",p5:"About technical aspects. On the main page, in the head, instead of a slider, which was in the previous version, used a simple image that is implemented through a picture tag. This implementation is exhaustive because before that only one slide was used. The unquestionable advantage of it is using images with different aspect ratios and sizes. By the way, in the head image also used lazy-load with the LQIP (before loading the main image user sees a compressed preview).",p6:"The final chord of the symphony was the adaptation of the layout after its approval to an existing project on Laravel. The customer's logotypes were recreated in vector and divided config for the Laravel mix in two parts - landing page side and control panel side.",user_flow_title:"Live preview",user_flow_description:"Click on the link below \u003Ca href='https:\u002F\u002F24serv.pro' rel='noreferrer' target='_blank' class='link'\u003E24serv.pro\u003C\u002Fa\u003E",footer_dates:"Created in 2020",gallery:{new_1:"New home page",new_2:"New contacts page",new_3:"New services page",new_4:"New tariffs view for selected service",new_5:"New page of user agreement",new_6:"New page of the post",new_7:"New page with list of news",new_8:"Some UI components which have been used in new design",new_mobile:"How new design looks on phones",new_mobile_menu:"How new design looks on phones (navigation opened)",old_1:"Old home page",old_2:"Old contacts page",old_3:"Old services page",old_4:"Old tariffs view for selected service",old_5:"Old page of user agreement",old_6:"Old page of the post",old_7:"Old page with list of news",old_mobile:"How old design looked on phones"},tools:{illustrator:{name:"Adobe Illustrator",done:["Logotype vectorize"]},figma:{name:c,done:["UI\u002FUX for pages: Home, Contacts, News, User agreement, Services list, List of tariffs, Post page","Prototyping of user-flow"]},webpack:{name:"Webpack",done:["Compiling assets (like Feather Icons and Tiny Slider) into bundle old browsers friendly bundle"]}}},undercover:{title:"Undercover projects",_description:"Design, layout, and other projects for which there is no space on the main page of cases are collected here from web developer and web designer Ruslan Parkhomenko - fubarpatsharp",project_1:"Design for university trade union",p1:"Being active and one of the key positions in the university trade union, I often create various projects, mostly related to design (more than twenty projects have been created).",p2:"The first project was to create a union logo with the website. The site itself was created on WordPress, which uses one of the free templates with the color scheme of the corresponding university. The logo is visually simple, somewhat imitates the university’s visual identity, but with the use of grotesque.",p3:"The design is focused on Instagram and Facebook. I had to work in Adobe Photoshop, Adobe Illustrator, and Adobe InDesign. The latter I use for printing, such as posters or badges. But the main tool is Figma.",project_2:"Skyisland.pro",p4:"This project can be a brother of the latest version of the Pocketlife project. Ideologically there were no changes, only the implementation has changed because I was only engaged in the creation of the design and frontend because the backend was already ready at the customer's site.",project_3:"IOT platform",p5:"Design of dashboard for a university project that should monitor air quality. There is also a design of the WiFi connection page for a device that would measure these indicators.",project_4:"GS (secret project)",p6:"One of the projects that is still under development (customers are still finalizing it). In general, it consists of two subprojects: the first one is labeling for the main site of the platform, which provides donations for the game from the list and gives in-game privileges; the second one is labeling for customers of this platform, with possible customization such as a complete change of all links, project name, and display a list of products with the possibility of buying.",p7:"The first project is a simple adaptation of the existing template by changing the color scheme to the project branding; the second one had to completely turn the whole site from scratch focusing on the created design and integrating Vue for the features I wrote above.",project_5:"Other projects",p8:"Projects I also worked with:\u003Cbr\u003Ehttps:\u002F\u002Fserialochka.ru\u002F - fix in layout, adaptation for mobile devices\u003Cbr\u003Ehttps:\u002F\u002Fbankfinunion.org.ua\u002F - installation of the site in several languages, an adaptation of the template to the customer's requirements (added several blocks, optimization of all assets).\n",user_flow_description:g,footer_dates:"Created in ∞"},playpay:{title:"Play-Pay",_description:"Play-Pay - the history of JavaScript integration into the product marketplace with a video demonstration of features from web developer and web designer Ruslan Parkhomenko - fubarpatsharp",footer_dates:"Created in 2019-2020",user_flow_title:h,user_flow_description:g,p1:"This is the first project I can call serious. The idea of the case - marketing of products related to games (items, services, in-game currency). The task is laconic - to revive the existing layout by creating a frontend (that is, integrate JS) and backend.",p2:"Before getting acquainted with the ready template (which was created by another performer), he hoped that he would work on the project alone, without any help. However, I offered customers to join the backend developer.",p3:"",p4_image_header:"About the technical details",p4:"There were certain requirements from customers regarding the technologies to be used: backend building on Laravel, for a chat using Laravel Echo; at the same time, it was necessary to create a multi-page application. At first, there were no problems with the last technology, but later on, with a partner from backend, we realized that Laravel Echo is uncomfortable to create a chat because it provides only for sending socket notifications to the client without feedback. In advance, we solved this problem by sending messages via API (i.e. HTTP requests) and received messages via Laravel Echo.",p5:"It should be noted that clients were focused on an existing popular project. I am satisfied with my front-end development, where we dared to use technically perfect tools like Vue rather than morally and technically outdated jQuery. On the other hand, perfection in JS is compensated by problems in templates created by the designer and a fellow layout-developer, such as lack of a DRY principle.",p6_image_header:"About JavaScript",p6:"Earlier I mentioned a multi-page application rather than a single page application, so all Vue components were directly embedded into blade templates. After all, the public part of the site implemented about 20 components, of which 16 are divided into groups: feedback components, homepage components, product components, private chat, public chat, common components. The most interesting for development were the chat and products. This was because we worked with Laravel Echo, and for the first time solved the problem of how to send an image and make a preview of it; then we had to create an updatable list of all dialogs, where the conversation with a new message would move up. For me and the backend of the developer of products and categories was a dark forest, because we didn't understand how we could create a separate game inside which there would be a kind of products with dynamic fields, for example, where we had to save the in-game currency in which the price would be calculated according to the wishes of the customer, and in another category, we had to implement the type of \"service\". Finally, this \"dark forest\" was easily formed thanks to JSON, stored for each game in the database (code sample added to the gallery).",p7_image_header:"About the admin panel",p7:"When the core part of the project was implemented, customers continued their cooperation with us and also added the goal to create an admin panel where they could manage users, payments for sellers, a list of products, and a list of games with categories. The technology stack did not change, but UIKit used the framework without the existing template.",p8:"Above mentioned that this is the first really serious and now also a big project, so with the timing, everything was really bad, which auctioned off inflated deadlines."},tf_panel:{title:"24serv.pro panel",_description:"Details of the updated version of the control panel of the popular hosting provider 24serv.pro virtual private servers and Minecraft servers, Minecraft: Bedrock Edition from the developer fubarpatsharp (Ruslan Parkhomenko)",footer_dates:"Created in 2019",user_flow_title:h,user_flow_description:"The video shows almost all the features of the created platform available to the regular user and the view of the site by the administrator.",p1:"At the end of 2019, in tandem with the development of \u003Ca class='link' href='\u002Fcases\u002Fplay-pay'\u003EPlay-Pay\u003C\u002Fa\u003E, I started working on a new version of the control panel for the popular hosting provider of the game and virtual private servers 24serv.pro (the case of the development of this project is \u003Ca class='link' href='\u002Fcases\u002F24serv.pro-landing'\u003Ehere\u003C\u002Fa\u003E).",task:"visual and technical improvement of the control panel",p2:"Unfortunately, the term \"visual improvement\" should only be understood as the assembly of elements in an existing template rather than creating or rethinking an existing design. In a case associated with this project already said that the problem and advantage of ready-made templates are too exhaustive functionality. After all, having a ready set of elements is easy to build something cute",p3:"Let's take a look at the site map that was used to create the new panel",p3_image_header:"Site Map",p4:"It agreed with the customer that it is necessary to keep the interactivity of the site, however without a single page application. Traditionally, the choice has already been taken advantage of Vue, which was integrated into the blade at point blade. Also, to implement basic functionality, used the libraries: Vue slider component (slider component), vform (validation of entered data), Vue toast notification (\"toast\" for displaying notifications), socket.io client and ansi_up (server console; ANSI color parsing), lodash-es (used functions to normalize information about the available services)."}}},contacts:{_title:"Contacts",_description:"Contact web developer and web designer Ruslan Parkhomenko - fubarpatsharp",cooperation:"Cooperation",cooperation_paragraph:"If you are interested to work with me, please contact my Telegram or other social networks. I am ready to work on short-term and long-term projects. I love product vision and respect the customers with the prepared technical task.",cooperation_paragraph_2:"Now I prefer freelance, but I'm ready to discuss any options, like full-time or teamwork.",social:"Social links",social_priority:"Priority",mail:"E-Mail"},about:{_title:"About me",_description:"Useful information about web developer and web designer Ruslan Parkhomenko - fubarpatsharp",who_am_i:"Who am i",who_am_i_paragraph:"I am Ruslan - a student, web developer, and designer. Now I live in Ukraine, Cherkasy. Mainly interested in frontend development. I am a fan of minimalistic and convenient design, which rarely create for myself and commerce. I've been in IT since 2012. I started my web-artist path in 2014.",who_am_i_paragraph_2:"Besides IT, I am involved in university life. Sometimes it is difficult to combine.",technologies:i,technologies_paragraph_1:"I'm designing in Figma (lead tool), Adobe XD, Adobe Photoshop and Adobe Illustrator.",technologies_paragraph_2:"In frontend development, my best friends are ECMAScript 6+, Vue, and Webpack.",technologies_paragraph_3:"In the backend sometimes I use Laravel.",technologies_paragraph_4:"Had experience with socket, Laravel Echo and REST API. I use Git (Github) in my work.",what_do_i_can:"What can I do",what_do_i_can_paragraph:"I am creating websites (turnkey projects including); design: UI\u002FUX, avatars, infographics, posts for social networks; fix bugs in sites (e.g. layout); provide consultations on the web of your projects."},_common:{tags:{design:"UI\u002FUX",layout:"Layout",js_integration:"JS integration",backend:"Backend",frontend:"Frontend"},technologies_stack:i,task:"Main task",about_project:"About project",enlarge_image:"Zoom image",gallery:"Gallery",more_projects:"More projects",cookie:"The website uses 🍪 to offer a better browsing experience"}}}}}}("First website version","Second website version","Figma","Vue","Get info about products from API","User data validation","For a detailed understanding of what the project is all about, check out the video.","How it works","Technologies stack"));