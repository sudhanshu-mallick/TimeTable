function fillCategory(){ 
    // this function is used to fill the category list on load
   addOption(document.drop_list.Year, "1st", "1st");
   addOption(document.drop_list.Year, "2nd", "2nd");
   addOption(document.drop_list.Year, "3rd", "3rd");
   addOption(document.drop_list.Year, "4th", "4th");
    
}
fillCategory();
SelectSubCat();
   
   function SelectSubCat(){
   // ON selection of category this function will work
   
       removeAllOptions(document.drop_list.SubCat);
       
   addOption(document.drop_list.SubCat, "", "SubCat");
   
   addOption(document.drop_list.SubCat,"IT", "Information Technology");
   addOption(document.drop_list.SubCat,"COE", "Computer Engineering");
   addOption(document.drop_list.SubCat, "ECE", "Electronics & Communication Engineering");
   addOption(document.drop_list.SubCat, "ICE", "Instrumentation & Control Engineering");
   addOption(document.drop_list.SubCat,"ME", "Mechanical Engineering");
       
       
//  
       
       
   
   }
   ////////////////// 
   
   function removeAllOptions(selectbox)
   {
       var i;
       for(i=selectbox.options.length-1;i>=0;i--)
       {
           //selectbox.options.remove(i);
           selectbox.remove(i);
       }
   }
   
   
   function addOption(selectbox, value, text )
   {
       var optn = document.createElement("OPTION");
       optn.text = text;
       optn.value = value;
   
       selectbox.options.add(optn);
   }
   ///////////////////
   
   function SelectRedirect(){
   // ON selection of Sub category  this function will work
   
   //alert( document.drop_list.SubCat.value);
       switch (document.drop_list.Year.value)
       {
           case "1st":
               {
            if(document.drop_list.SubCat.value=="IT")
            {
                 window.location.replace("/Project/1st/IT/timetable_page.html");
             }
                if(document.drop_list.SubCat.value=="COE")
            {
                 window.location.replace("Project/1st/COE/timetable_page.html");
                }
                if(document.drop_list.SubCat.value=="ECE")
            {
                 window.location.replace("Project/1st/ECE/timetable_page.html");
                }
                if(document.drop_list.SubCat.value=="ICE")
            {
                 window.location.replace("Project/1st/ICE/timetable_page.html");
                }
                if(document.drop_list.SubCat.value=="ME")
            {
                 window.location.replace("Project/1st/ME/timetable_page.html");
                   }
                   break;
                   
               }
            
            
           case "2nd":
               {
                if(document.drop_list.SubCat.value=="IT")
                {
                     window.location.replace("Project/2nd/IT/timetable_page.html");
                 }
                    if(document.drop_list.SubCat.value=="COE")
                {
                     window.location.replace("Project/2nd/COE/timetable_page.html");
                    }
                    if(document.drop_list.SubCat.value=="ECE")
                {
                     window.location.replace("Project/2nd/ECE/timetable_page.html");
                    }
                    if(document.drop_list.SubCat.value=="ICE")
                {
                     window.location.replace("Project/2nd/ICE/timetable_page.html");
                    }
                    if(document.drop_list.SubCat.value=="ME")
                {
                     window.location.replace("Project/2nd/ME/timetable_page.html");
                   }
                   break;
                   
               }
            
           case "3rd":
               {
                   
                if(document.drop_list.SubCat.value=="IT")
               {
                    window.location.replace("Project/3rd/IT/timetable_page.html");
                }
                   if(document.drop_list.SubCat.value=="COE")
               {
                    window.location.replace("Project/3rd/COE/timetable_page.html");
                   }
                   if(document.drop_list.SubCat.value=="ECE")
               {
                    window.location.replace("Project/3rd/ECE/timetable_page.html");
                   }
                   if(document.drop_list.SubCat.value=="ICE")
               {
                    window.location.replace("Project/3rd/ICE/timetable_page.html");
                   }
                   if(document.drop_list.SubCat.value=="ME")
               {
                    window.location.replace("Project/3rd/ME/timetable_page.html");
                   }
                   
                   
                        
                        
                    
                   break;
                   
               }
           
           case "4th":
           {
                if(document.drop_list.SubCat.value=="IT")
                {
                    window.location.replace("Project/4th/IT/timetable_page.html");
                }
                    if(document.drop_list.SubCat.value=="COE")
                {
                    window.location.replace("Project/4th/COE/timetable_page.html");
                    }
                    if(document.drop_list.SubCat.value=="ECE")
                {
                    window.location.replace("Project/4th/ECE/timetable_page.html");
                    }
                    if(document.drop_list.SubCat.value=="ICE")
                {
                    window.location.replace("Project/4th/ICE/timetable_page.html");
                    }
                    if(document.drop_list.SubCat.value=="ME")
                {
                    window.location.replace("Project/4th/ME/timetable_page.html");
                   }
                   break;
            }       
            
           
       }
   
  
   }