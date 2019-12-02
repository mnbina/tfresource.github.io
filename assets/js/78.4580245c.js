(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{192:function(e,t,a){"use strict";a.r(t);var o=a(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("span",{staticStyle:{background:"lightgrey",padding:"10px","border-left":"thick double #0000aa"}},[e._v(" This page is part of the Category [.")])]),e._v(" "),a("p",[e._v("The flexibility of destination choice models comes at a cost. While it is possible to represent the selection of trip destinations more rigorously, destination choice models tend to require more data and data with higher fidelity than traditional [. A theoretical discussion of "),a("a",{attrs:{href:"Factors_Affecting_Destination_Choice"}},[e._v("factors affecting destination choice")]),e._v(" provides a general discussion, while this page list specific data sources that are commonly used in destination choice modeling. There are two types of data that are relevant for destination choice models. "),a("a",{attrs:{href:"Destination_Choice_Data_Sources#Observed_Choice_Data"}},[e._v("Observed choice data")]),e._v(" describe origin-destination flows that have been observed in a survey, by counting or by passive data collection. "),a("a",{attrs:{href:"Destination_Choice_Data_Sources#Explanatory_Data"}},[e._v("Explanatory data")]),e._v(", on the other hand, refer to input data that describe either destinations or characteristics of the decision maker who chooses the destination.")]),e._v(" "),a("h2",{attrs:{id:"observed-choice-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observed-choice-data"}},[e._v("#")]),e._v(" Observed Choice Data")]),e._v(" "),a("p",[a("img",{attrs:{src:"DestinationChoiceArrows.png",alt:"",title:"fig:DestinationChoiceArrows.png"}}),e._v("Observed Choice Data describe actually chosen origin-destination pairs. Usually provided at a zone-to-zone resolution, these data provide at a minimum the origin and destination of individual trips. For "),a("a",{attrs:{href:"Tour_based_models"}},[e._v("tour-based")]),e._v(" or "),a("a",{attrs:{href:"Activity_Based_Models"}},[e._v("activity-based models")]),e._v(", an entire trip chain is provided, such as going from home to work, from work to a restaurant and the restaurant back home. Often, such data are stratified by trip purpose, mode, time of day and various socio-demographic characteristics of the traveler.")]),e._v(" "),a("h3",{attrs:{id:"household-travel-surveys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#household-travel-surveys"}},[e._v("#")]),e._v(" Household Travel Surveys")]),e._v(" "),a("p",[e._v("The most common source for Observed Choice Data are "),a("a",{attrs:{href:"Household_travel_surveys"}},[e._v("household travel surveys")]),e._v(". Origins and destinations usually are collected at the address level and translated into "),a("a",{attrs:{href:"Traffic_Analysis_Zone"}},[e._v("TAZ")]),e._v(" for data analysis. Long-distance data commonly are provided at a coarser geography, such as counties or metropolitan areas. Surveys have the benefit that they tend to provide rich information on the socio-demographic characteristics of the traveler as well as the purpose of the trip. In addition to individual trips, surveys also commonly allow the analyst to identify entire tours.")]),e._v(" "),a("h3",{attrs:{id:"census-journey-to-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#census-journey-to-work"}},[e._v("#")]),e._v(" Census Journey-to-Work")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"http://ctpp.transportation.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Census Transportation Planning Products Program"),a("OutboundLink")],1),e._v(" (CTPP), hosted by the American Association of State Highway and Transportation Officials (AASHTO) in cooperation with the states, collects data on work trips. The rich dataset includes where people live and work, their journey to work commuting patterns and the modes they use for getting to work. Commute flow data are provided at the county-to-county level by mode. No trip purposes other than journey to work are represented in this dataset.")]),e._v(" "),a("p",[e._v("The Longitudinal Employer-Household Dynamics, published by the U.S. census bureau, additionally offers the LEHD Origin-Destination Employment Statistics, or "),a("a",{attrs:{href:"https://lehd.ces.census.gov/data/#lodes",target:"_blank",rel:"noopener noreferrer"}},[e._v("LODES"),a("OutboundLink")],1),e._v(" dataset. These data provide commuter flows at the resolution of 2010 census blocks. Flow data are provided in 3 age groups (29 or younger, 30 to 54, 55 or older), 3 income groups (earnings $1250/month or less, 1251/month to 3333/month, greater than 3333/month) and 3 industry categories (Goods Producing industry sectors, Trade, Transportation, and Utilities industry sectors, All Other Services industry sectors).")]),e._v(" "),a("h3",{attrs:{id:"passively-collected-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passively-collected-data"}},[e._v("#")]),e._v(" Passively Collected Data")]),e._v(" "),a("p",[e._v("In contrast to survey data, passively collected data do not ask people about their travel behavior but rather collect data passively through cellular phones, GPS devices or other location-revealing technologies. While these data generally do not provide socio-demographic details of the traveler nor information on the motivation for a trip, these data have proven to be powerful because of their magnitude of coverage.")]),e._v(" "),a("p",[e._v("While surveys often cover 1 or 2 percent of the population, it is not uncommon for passively collected data to cover a quarter or a third of actual travel movements. An important benefit is the coverage of many origin-destination pairs. As an example, a household travel survey for the state of Tennessee covered with over 10,000 households roughly 40,000 origin-destination pairs, which is only 0.3 percent of all possible origin-destination pairs in Tennessee. Cell phone data, on the other hand, was able to capture 26 percent of all origin-destination pairs. There are many origin-destination pairs that are traveled very rarely (particularly from one rural area to another rural area in a different part of the state). Hence, it is expected that cell phone data was able to capture almost all origin-destination pairs that are actually traveled. The almost complete coverage has important benefits for the estimation of destination choice models, as the choice set is covered representatively.")]),e._v(" "),a("p",[e._v("A disadvantage of passively collected data is the lack of socio-economic characteristics of the traveler as well as missing information about the trip purpose. Sometimes, trip purposes are imputed by analyzing origin and destination. A trip from a residential area to a central business district could be classified as a home-to-work trip. The error margin of this imputation, however, is unknown. For this reason, passively collected data commonly are used for model calibration or validation purposes; however, they are also increasingly being used with "),a("a",{attrs:{href:"Data_Driven_Methods"}},[e._v("data driven methods")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"traffic-counts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#traffic-counts"}},[e._v("#")]),e._v(" Traffic Counts")]),e._v(" "),a("p",[e._v("Traffic counts commonly are provided by the local Department of Transportation or Metropolitan Planning Organization. Traffic counts also provide valuable information on origin-destination flows. For instance, traffic counts along "),a("a",{attrs:{href:"Destination_Choice_Calibration_and_Validation#Screenline_Counts"}},[e._v("screenlines")]),e._v(" can provide information on aggregate district-to-district flows and are commonly used for this reason in "),a("a",{attrs:{href:"Destination_Choice_Calibration_and_Validation#Estimation,_Calibration,_and_Validation"}},[e._v("destination choice model validation")]),e._v(". Traffic counts can also be used directly in model estimation to estimate model parameters (simultaneously with survey data)."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(" Finally, traffic counts may be used to impute origin-destination flows. In the so-called origin-destination matrix estimation (ODME), sometimes also called synthetic matrix estimation (SME), a trip matrix is synthesized that matches traffic count data.")]),e._v(" "),a("p",[e._v("ODME is a method to create a synthetic trip tables that resembles count data after assignment (Willumsen 1981"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v("). Such models often suffered from unexpectedly large differences in outcomes due to small changes in inputs (Aerde, Rakha and Paramahamsan 2003"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(") as well as their inability to reconcile inconsistent or erroneous traffic counts (Hazelton 2003"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v("). As traffic counts do not distinguish trip purposes or user classes, ODME cannot provide trip tables by purpose or trip tables that distinguish travelers by socio-economic characteristics. Moreover, proper and responsible application of ODME reflects the importance of the initial seed distribution of OD patterns required by ODME and limits its distortion either through the formulation of the objective function for the optimization or the imposition of constraints. While in the past trip matrices generated with ODME flows were often only used if no other origin-destination data sources are available, the availability of good seed OD patterns from passive big data may now present a better foundation for ODME.")]),e._v(" "),a("h2",{attrs:{id:"explanatory-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explanatory-data"}},[e._v("#")]),e._v(" Explanatory Data")]),e._v(" "),a("p",[a("img",{attrs:{src:"DestinationChoiceSizeTermData.png",alt:"",title:"fig:DestinationChoiceSizeTermData.png"}}),e._v("In addition to "),a("a",{attrs:{href:"Destination_Choice_Data_Sources#Observed_Choice_Data"}},[e._v("observed choice data")]),e._v(", destination choice models also need information on possible destinations, such as retail facilities, parks or hotels, and the corresponding "),a("a",{attrs:{href:"Impedance"}},[e._v("impedance")]),e._v(" to get there. Similarly, information about the travelers, such as age, sex or income, are relevant when estimating destination choice models. These data often are called Explanatory Data, or size term data. A more "),a("a",{attrs:{href:"Factors_Affecting_Destination_Choice#Size_Terms_/_Attractions"}},[e._v("theoretical discussion of explanatory data")]),e._v(" is provided elsewhere, this page here lists common data sources.")]),e._v(" "),a("h3",{attrs:{id:"land-use-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-use-data"}},[e._v("#")]),e._v(" Land Use Data")]),e._v(" "),a("p",[e._v("The most common attractor used in destination choice modeling are "),a("a",{attrs:{href:"Spatial_Data#Land_Use/Demographic/Socio-economic_Data"}},[e._v("socio-economic data")]),e._v(", i.e. population and employment. Employment often is distinguished by industry category, such as manufacturing, retail, office and other. Obviously, shopping trips are mostly attracted by retail employment, while trips for visiting most frequently are attracted by population. An important limitation of these data is that categories tend to be rather broad. Retail employment, for example, includes destinations as diverse as bakeries and car dealers, two very different retail facilities that in reality would attract very different trips. Further, is has been shown that larger facilities tend to attract more trips per employees than smaller facilities. Nevertheless, zonal land use data are the most common data source for modeling trip destinations.")]),e._v(" "),a("p",[a("strong",[e._v("Zonal population data")]),e._v(" usually are derived from "),a("a",{attrs:{href:"https://www.census.gov/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Census Data"),a("OutboundLink")],1),e._v(" that are provided at the Block Group Level. Population forecasts for future years are either developed manually (often using advise from an expert panel) or forecasted using [.")]),e._v(" "),a("p",[a("strong",[e._v("Zonal employment data")]),e._v(" commonly are developed from business registration data. Clean-ups are necessary, because firms are commonly registered at their main site (or head quarter), and different branches are not coded explicitly. Alternatively, commercial databases (such as InfoUSA, Dun & Bradstreet or Woods & Poole databases) have been used.")]),e._v(" "),a("h3",{attrs:{id:"accessibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessibilities"}},[e._v("#")]),e._v(" Accessibilities")]),e._v(" "),a("p",[a("img",{attrs:{src:"AccessibilityMunich.png",alt:"",title:"fig:AccessibilityMunich.png"}}),a("a",{attrs:{href:"Accessibilities"}},[e._v("Accessibilities")]),e._v(" are an aggregate measure that describes how easily from a given zone other destinations are accessible. The most commonly used definition of accessibilities are number of jobs that can be reached within a given time (such as 30 minutes), or the Potential Accessibility"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn5",id:"fnref5"}},[e._v("[5]")])]),e._v(" that discounts the size of destinations by their distance. Zones with higher accessibilities are generally assumed to attract larger number of travelers, all other things being equal. Zones with higher accessibilities tend to be located in neighborhoods that offer many trip attractions, and thereby, allow to link trips more easily.")]),e._v(" "),a("p",[e._v("A special form of accessibilities are "),a("a",{attrs:{href:"Skim_Matrix#Logsums"}},[e._v("mode choice logsums")]),e._v(" that do not only take into account travel time by one mode, but combine travel times by various modes. Modes may be weighted by the share they are used by a particular user class, which allows to better represent the relevance of transit access for low-income households.")]),e._v(" "),a("h3",{attrs:{id:"passively-collected-data-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passively-collected-data-2"}},[e._v("#")]),e._v(" Passively-Collected Data")]),e._v(" "),a("p",[e._v("While "),a("a",{attrs:{href:"Destination_Choice_Data_Sources#Land_Use_Data"}},[e._v("land use data")]),e._v(" usually are based on census and business registration data, passively-collected data are gathered from online data sources, such as Cuebiq, Facebook, Foursquare, Google or Twitter. Often, these data are also called Location-Based Social Network (LBSN) data. These websites provides Application Programming Interfaces (API) that allow downloading the location, type and size of various trip attractors. Trip attractors include, for example:")]),e._v(" "),a("ul",[a("li",[e._v("Restaurants and Bars")]),e._v(" "),a("li",[e._v("Hotels")]),e._v(" "),a("li",[e._v("Parks")]),e._v(" "),a("li",[e._v("Ski Resorts")]),e._v(" "),a("li",[e._v("Outdoor")]),e._v(" "),a("li",[e._v("Medical facilities")]),e._v(" "),a("li",[e._v("Grocery Stores")]),e._v(" "),a("li",[e._v("etc.")])]),e._v(" "),a("p",[e._v("The availability of categories depends on the LBSN site. Most LBSN websites allow downloading a small sample for free, while larger samples require paying a fee.")]),e._v(" "),a("h3",{attrs:{id:"choice-maker-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choice-maker-data"}},[e._v("#")]),e._v(" Choice-Maker Data")]),e._v(" "),a("p",[e._v("Choice makers often are stratified in different user groups. This classification may be done by income, household size, number of workers, number of cars, car sufficiency (usually defined as cars per worker), age of head of household, or any combination thereof. In essentially all cases, trip purposes further stratify destination choice modeling.")]),e._v(" "),a("p",[e._v("In "),a("a",{attrs:{href:"Trip_Based_Models"}},[e._v("trip-based models")]),e._v(", the stratification in destination choice is constrained by the stratification defined in trip generation. "),a("a",{attrs:{href:"Activity_Based_Models"}},[e._v("Activity-based models")]),e._v(", on the other hand, commonly work with "),a("a",{attrs:{href:"Synthetic_Population"}},[e._v("synthetic populations")]),e._v(", and therefore, allow defining any stratification of user groups that works best in destination choice.")]),e._v(" "),a("h3",{attrs:{id:"travel-time-and-travel-cost-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travel-time-and-travel-cost-data"}},[e._v("#")]),e._v(" Travel Time and Travel Cost Data")]),e._v(" "),a("p",[e._v("Finally, the destination choice model requires "),a("a",{attrs:{href:"Impedance"}},[e._v("impedances")]),e._v(" between zones. The impedance is commonly calculated as travel time, travel distance or travel costs. A combination of both is called generalized costs.")]),e._v(" "),a("p",[e._v("Costs may include parking, the costs for gasoline, maintenance costs, or the transit fare. For transit, access time, egress time, wait time and number of transit often is added to a generalized costs term.")]),e._v(" "),a("h4",{attrs:{id:"travel-time-conversions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travel-time-conversions"}},[e._v("#")]),e._v(" Travel Time Conversions")]),e._v(" "),a("p",[e._v("It is not uncommon to convert travel time into the log of travel time. Using the log puts more emphasis on differences between destinations that are close. For example, if one grocery store is 6 minutes away and another one is 10 minutes away, the difference of 4 minutes may be important for the trip maker. On the other hand, a grocery store that is 30 minutes away is not perceived as being as much further away than another one that is 26 minutes away. Even though, the difference is the same, a difference of 4 minutes is perceived to be more relevant for short-distance trips than for longer distance trips. The log-conversion nicely accounts for this perception.")]),e._v(" "),a("h4",{attrs:{id:"online-sources-for-impedances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#online-sources-for-impedances"}},[e._v("#")]),e._v(" Online Sources for Impedances")]),e._v(" "),a("p",[e._v("Most commonly, "),a("a",{attrs:{href:"Impedance"}},[e._v("impedances")]),e._v(" are skimmed from the network of a travel demand model. In some cases, however, such data are not available from the model, particularly when the model is still under development. Alternatively, these data may be scraped from online sites.")]),e._v(" "),a("p",[e._v("For "),a("strong",[e._v("short-distance travel")]),e._v(", the Google API allows downloading travel time and travel costs for a limited number of origin-destination pairs for free. For a large number of data requests, a fee has to be paid. Limiting the number of data requests per day may help avoid paying this fee. Where available, the Google API provides impedances by several modes.")]),e._v(" "),a("p",[e._v("For "),a("strong",[e._v("long-distance travel")]),e._v(", the Rome2rio API provides travel time, costs and number of transfers for a variety of modes. A limited number of requests per day can be accessed for free. For larger datasets, a fee has to be paid.")]),e._v(" "),a("h1",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[a("a",{attrs:{href:"Content_Charrette_Destination_Choice_Models"}},[e._v("Content Charrette: Destination Choice Models")])]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("Bernardin, V., S. Trevino, G. Slater & J. Gliebe. “Simultaneous Travel Model Estimation from Survey Data and Traffic Counts.” Transportation Research Record: Journal of the Transportation Research Board, No. 2496 (2015): p. 69-76. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[e._v("Willumsen, L. G. (1981) Simplified transport models based on traffic counts. In: "),a("em",[e._v("Transportation")]),e._v(" 10 (3):257-278. doi: 10.1007/BF00148462. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("p",[e._v("Aerde, Michel, Hesham Rakha, and Harinarayan Paramahamsan (2003) Estimation of Origin-Destination Matrices: Relationship Between Practical and Theoretical Considerations. In: "),a("em",[e._v("Transportation Research Record: Journal of the Transportation Research Board")]),e._v(" 1831 (-1):122-130. doi: 10.3141/1831-14. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[a("p",[e._v("Hazelton, M. L. (2003) Some comments on origin-destination matrix estimation. In: "),a("em",[e._v("Transportation Research Part A - Policy and Practice")]),e._v(" 37 (10):811-822. doi: Doi 10.1016/S0965-8564(03)00044-2. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[a("p",[e._v("Hansen, Walter G. (1959) How accessibility shapes land use. Journal of the American Institute of Planners 25: 73-76. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);