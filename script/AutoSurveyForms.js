/*
 * Copyright (c) 2016 - ALOK DETHE. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*
* version 1.0
*
* 
*/


/* Initiate function call and start execution  */
( function( g ) {
    
    if( !g.jQuery ) { alert( " Api Requires Jquery To Be Loaded First ! " ); return ; }
    
    g.init = { 
        
         /* check for header */
         header : "0",
        
         /* check for image */
         imgCntTotal : 0,
        
         /* keep total question count */
         questCntTotal : 0,
         questVar : "Q",
        
         /* keep total radio count */
         radioCntTotal : 0, 
         radioVar : "r",
        
         /* keep total checkbox count */
         checkBoxCntTotal : 0,
         checkBoxVar : "cxbx",
        
         /* keep total dropdown count */
         dropDownCntTotal : 0,
         dropDownVar : "dd",
        
         /* keep total textarea count */
         textAreaCntTotal : 0,
         textAreaVar : "txtAr",
        
         /* keep total textarea count */
         uploadFileCntTotal : 0,
         uploadFileVar : "upAr",
         
         /* keep track of activities */
         trackObj: { 
             
               quest : "" , 
               opt : "" ,
               upfile : "" ,
               questRec : ""
            
         },
        
         heading : '<!DOCTYPE html>' +
                    '<html lang="en">' +
                    '<head>' +
                            '<meta charset="utf-8" >' +
                            '<meta name="viewport" content="width=device-width, initial-scale=1.0" >' +
                            
                            '<link type="text/css" rel="stylesheet" href="css/normalize.css" >' +
                            '<link type="text/css" rel="stylesheet" href="css/grid.css" >' +
                            
                            '<link type="text/css" rel="stylesheet" href="css/customcss.css" >' +
                   '</head>' +
    
                   '<body>' +
    
                    '<header class="row container-for-head">' +

                        '<nav class="col span-2-of-2">' +

                            '<h2> Survey Form And Template Generator </h2>' +

                        '</nav>' +

                    '</header>' +
        
                    '<div class="row" > <div class="col span-2-of-2 holder-col" > <ul> ' ,
        
         footer : ' </ul> </div> </div> <footer class="row container-for-footer" >' +
        
            '<div class="col span-1-of-3">' +
                '<p></p>' +
            '</div>' +
            
            '<div class="col span-1-of-3 copyRT">' +
                '<p>&copy; 2016 SURVEY FORMS - Alok Dethe</p>' +
            '</div>' +
            
            '<div class="col span-1-of-3">' +
                '<p></p>' +
            '</div>'+
        
        '</footer>' +
    
        
        '<script   src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>' +
        
        '<script   src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"   integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="   crossorigin="anonymous"></script>' +
        
        '<script type="text/javascript" src="script/AutoSurveyForms.js" ></script>' +
        
       '</body>' +
    
       '</html>',
        
         /* keep recent Add info */
         recentAdd : ""
        
    };
    
    
    $( "#heading-id" ).draggable( { containment: ".container-box-o", handle: "p", helper : 'clone' } );
   
    $( "#question-id" ).draggable( { containment: ".container-box-o", handle: "p", helper : 'clone' } );
    
    $( "#image-id" ).draggable( { containment: ".container-box-o", handle: "p", helper : 'clone' } );
    
    $( "#radio-id" ).draggable( { containment: ".container-box-o", handle: "p", helper : 'clone' } );
    
    $( "#dropdown-id" ).draggable( { containment: ".container-box-o", handle: "p", helper : 'clone' } );
    
    $( "#txt-area-id" ).draggable( { containment: ".container-box-o", handle: "p", helper : 'clone' } );
    
    $( "#check-box-id" ).draggable( { containment: ".container-box-o", handle: "p", helper : 'clone' } );
    
    $( "#upload-id" ).draggable( { containment: ".container-box-o", handle: "p", helper : 'clone' } );
    
    $( "#sor" ).sortable({
      revert: true
    });
    
    
    
    $( ".holder-col" ).droppable( {
        
      drop: function( event, ui ) {
          
        /*$( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );*/
          
          console.log( " o " +$( ui.draggable ).first().attr( 'id' ) );
          
          if( $( ui.draggable ).first().attr( 'id' ) === "heading-id" )
              {
                  g.provideFn.addHeading ( this , init , event , ui );
              }
          
          if( $( ui.draggable ).first().attr( 'id' ) === "question-id" )
              {
                  g.provideFn.addQuestions ( this , init , event , ui );
              }
          if( $( ui.draggable ).first().attr( 'id' ) === "image-id" )
              {
                  g.provideFn.addImage( this , init , event , ui );
                  
              }
          if( $( ui.draggable ).first().attr( 'id' ) === "radio-id" )
              {
                  g.provideFn.addRadioOpt( this , init , event , ui );
              }
          if( $( ui.draggable ).first().attr( 'id' ) === "dropdown-id" )
              {
                  g.provideFn.addDropDownOpt( this , init , event , ui );
              }
          if( $( ui.draggable ).first().attr( 'id' ) === "txt-area-id" )
              {
                  g.provideFn.addTextArea( this , init , event , ui );
              }
          if( $( ui.draggable ).first().attr( 'id' ) === "check-box-id" )
              {
                  g.provideFn.addCheckBoxOpt( this , init , event , ui );
                  
              }
          if( $( ui.draggable ).first().attr( 'id' ) === "upload-id" )
              {
                   g.provideFn.addUploadFile( this , init , event , ui );
              }
          
          //console.log("id through event "+$(event).attr('id'));
         
      }
        
    } );
    
    
    g.surveryForm_optionsAccessIds = {
    
            /* Get all image id's */
            getAllImageIds: function(){
                return "got image ids";
            },

            /* Get all question id's */
            getAllQuestionIds: function(){

            },

            /* Get all radio options */
            getAllRadioIds: function(){

            },

            /* Get all dropDown options */
            getAllDropDownIds: function(){

            },

            /* Get all upload document id's */
            getAllUploadDocIds: function(){

            }
    
    }
    
    g.provideFn = { } ; 
    
    g.provideFn.addCheckBoxOpt = function ( comp , init , event , ui )
    {
        if ( g.init.header === "0" ) { alert( "Heading missing!" ); return ; }
        
        if ( g.provideFn.checkTrack( 'CxBx' ) ) {  return ; }
        
        g.init.checkBoxCntTotal = g.init.checkBoxCntTotal + 1;
        
        var li = $("<li></li>");
        
        li.append( $( ui.draggable ).clone() );
        
        $( comp ).find("#sor").append( li );
        
        var qAdd = ( $( li ).children().get(0).childNodes ).item( 1 );
        
        //querySelectorAll('input[id^="Q1Rad"]');                   Parser video Related
        
        qAdd.setAttribute( 'id' , g.init.trackObj.questRec + 'CxBx' + g.init.checkBoxCntTotal );
        
        qAdd.setAttribute( 'name' , g.init.trackObj.questRec + 'CxBx' );
        
        //append( $( ui.draggable ).clone() );
        g.provideFn.setTrack( 'CxBx' );  
        //g.init.recentAdd = "CxBx";
        
        var o = $( comp ).find( "#delete-check-id" );
              
          if( o !== null || o !== undefined )
              {
                          //init.header = "1";
                          $( comp ).find( "#delete-check-id" ).css( "display" , "block" );
                          $( comp ).find( "#delete-check-id" ).addClass("invSurvey");
                          /* Register */
                          g.provideFn.reg( '' , '' );
              }
        
    }
    
    g.provideFn.addUploadFile = function ( comp , init , event , ui )
    {
        if ( g.init.header === "0" ) { alert( "Heading missing!" ); return ; }
        
        if ( g.provideFn.checkTrack( 'Up' ) ) {  return ; }
        
        g.init.uploadFileCntTotal = g.init.uploadFileCntTotal + 1;
    
        var li = $("<li></li>");
        
        li.append( $( ui.draggable ).clone() );
        
        $( comp ).find("#sor").append( li );
        
        //$( comp ).append( $( ui.draggable ).clone() );
        g.provideFn.setTrack( 'Up' );  
        //g.init.recentAdd = "Up";
        
        var o = $( comp ).find( "#delete-uploadfile-id" );
              
          if( o !== null || o !== undefined )
              {
                          //init.header = "1";
                          $( comp ).find( "#delete-uploadfile-id" ).css( "display" , "block" );
                          $( comp ).find( "#delete-uploadfile-id" ).addClass("invSurvey");
                          /* Register */
                          g.provideFn.reg( '' , '' );
              }
    }
    
    g.provideFn.addRadioOpt = function ( comp , init , event , ui )
    {
        if ( g.init.header === "0" ) { alert( "Heading missing!" ); return ; }
        
        if ( g.provideFn.checkTrack( 'Rad' ) ) {  return ; }
        
        g.init.radioCntTotal = g.init.radioCntTotal + 1;
    
        var li = $("<li></li>");
        
        li.append( $( ui.draggable ).clone() );
        
        $( comp ).find("#sor").append( li );
        
        var qAdd = ( $( li ).children().get(0).childNodes ).item( 1 );
        
        //querySelectorAll('input[id^="Q1Rad"]');                   Parser video Related
        
        qAdd.setAttribute( 'id' , g.init.trackObj.questRec + 'Rad' + g.init.radioCntTotal );
        
        qAdd.setAttribute( 'name' , g.init.trackObj.questRec + 'Rad' );
        
        //$( comp ).append( $( ui.draggable ).clone() );
        g.provideFn.setTrack( 'Rad' );  
        //g.init.recentAdd = "Rad";
        
        var o = $( comp ).find( "#delete-radio-id" );
              
          if( o !== null || o !== undefined )
              {
                          //init.header = "1";
                          $( comp ).find( "#delete-radio-id" ).css( "display" , "block" );
                          $( comp ).find( "#delete-radio-id" ).addClass("invSurvey");
                          /* Register */
                          g.provideFn.reg( '' , '' );
              }
        
    }
    
    g.provideFn.addDropDownOpt = function ( comp , init , event , ui )
    {
        if ( g.init.header === "0" ) { alert( "Heading missing!" ); return ; }
        
        if ( g.provideFn.checkTrack( 'DD' ) ) { return; }
        
        g.init.dropDownCntTotal = g.init.dropDownCntTotal + 1;
    
         var li = $("<li></li>");
        
         li.append( $( ui.draggable ).clone() );
        
         $( comp ).find("#sor").append( li );
        
        var qAdd = ( $( li ).children().get(0).childNodes ).item( 1 );
        
        qAdd.setAttribute( 'id' , g.init.trackObj.questRec + 'DD' + g.init.dropDownCntTotal );
        
        //$( comp ).append( $( ui.draggable ).clone() );
        g.provideFn.setTrack( 'DD' );  
        //g.init.recentAdd = "DD";
        
        var o = $( comp ).find( "#delete-dropdown-id" );
              
          if( o !== null || o !== undefined )
              {
                          //init.header = "1";
                          $( comp ).find( "#delete-dropdown-id" ).css( "display" , "block" );
                          $( comp ).find( "#delete-dropdown-id" ).addClass("invSurvey");
                          /* Register */
                          g.provideFn.reg( '' , '' );
              }
        
    }
    
    g.provideFn.addTextArea = function ( comp , init , event , ui )
    {
        if ( g.init.header === "0" ) { alert( "Heading missing!" ); return ; }
        
        if ( g.provideFn.checkTrack( 'TxtA' ) ) {  return ; }
        
        g.init.textAreaCntTotal = g.init.textAreaCntTotal + 1;
    
         var li = $("<li></li>");
        
         li.append( $( ui.draggable ).clone() );
        
         $( comp ).find("#sor").append( li );
        
        var qAdd = ( $( li ).children().get(0).childNodes ).item( 1 );
        
        //querySelectorAll('input[id^="Q1Rad"]');                   Parser video Related
        
        qAdd.setAttribute( 'id' , g.init.trackObj.questRec + 'TxtA' + g.init.textAreaCntTotal );
        
        //$( comp ).append( $( ui.draggable ).clone() );
        g.provideFn.setTrack( 'TxtA' );  
        //g.init.recentAdd = "TxtA";
        
        var o = $( comp ).find( "#delete-textarea-id" );
              
          if( o !== null || o !== undefined )
              {
                          //init.header = "1";
                          //init.header = "1";
                          $( comp ).find( "#delete-textarea-id" ).css( "display" , "block" );
                          $( comp ).find( "#delete-textarea-id" ).addClass( 'TxtA' + g.init.textAreaCntTotal );
                          
                          /* Register */
                          g.provideFn.reg( 'TxtA' + g.init.textAreaCntTotal , 'TxtA' );
              }
        
    }
    
    g.provideFn.addImage = function ( comp , init , event , ui )
        {
        
          if ( g.init.header === "0" ) { alert( "Heading missing!" ); return ; }
        
          if( g.provideFn.checkTrack( 'I' ) ) { return ; }
        
          g.init.imgCntTotal = g.init.imgCntTotal + 1;
        
          var arrop = $( ui.draggable ).clone();
        
          g.provideFn.setTrack( 'I' );  
        
          //g.init.recentAdd = "I";
          
          //g.init.questCntTotal = g.init.questCntTotal + 1;
           
          /* assign unique id */
          $( arrop ).get(0).getElementsByTagName( 'img' ).item(0).setAttribute( 'id' , 'img' + g.init.imgCntTotal );
    
          console.log( ' img ' + $( arrop ).get(0).getElementsByTagName( 'img' ).item(0).getAttribute( 'id' ) );
        
          var li = $("<li></li>");
        
          li.append( arrop );
        
          $( comp ).find("#sor").append( li );
        
          //$( comp ).append( arrop );
    
          var o = $( comp ).find( "#delete-image-id" );
              
          if( o !== null || o !== undefined )
              {
                          //init.header = "1";
                  
                          $( comp ).find( "#delete-image-id" ).css( "display" , "block" );
                          $( comp ).find( "#delete-image-id" ).addClass( 'img' + g.init.imgCntTotal );
                          /* Register */
                          g.provideFn.reg( 'img' + g.init.imgCntTotal , 'I' );
                  
                          
              }
        }
    
    /* Track Activities */
    g.provideFn.setTrack = function ( o )
    {
        if( o === 'Q' ) g.init.trackObj.quest = o;
        
        if( o !== 'Q' ){
            
            if( o === 'Up' )
            {
                    g.init.trackObj.upfile = o;
            }
            else if ( o === 'I' ) /* video edit */
            {
                    g.init.trackObj.quest = o;
            }
            else
            {
                    g.init.trackObj.opt = o;
            }
            
        } 
    }
    
    /* Common Track Check Function */
    g.provideFn.commonTrackCheck_1 = function ( o )
    {
        
         if( g.init.trackObj.quest === 'Q' )
                  {  
                        if ( g.init.trackObj.opt === o )
                            {
                                return false;
                            }
                        else if ( g.init.trackObj.opt !== '' ) {
                               alert( "Only One Type Of Option's Are Allowed !" );
                               return true;
                            }
                        else  if ( g.init.trackObj.opt === '' ){
                               return false;
                        }
                
                  }
                  else{
                      alert( "Add A Question First !" );
                      return true;
                  }
        
    }
    
    /* Common Track Check Function */
    g.provideFn.commonTrackCheck_2 = function ( o )
    {
        if( g.init.trackObj.quest === 'Q' )
                  {  
                        if( g.init.trackObj.opt ===  o )
                            {
                                alert( "Already Added !" );
                                return true;
                            }
                        else if ( g.init.trackObj.opt !== '' ) {
                               alert( "Only One Type Of Option's Are Allowed !" );
                               return true;
                            }
                        else  if ( g.init.trackObj.opt === '' ){
                               return false;
                        }
                
                  }
                  else{
                      alert( "Add A Question First !" );
                      return true;
                  }
    }
    
    /* Check Activities */
    g.provideFn.checkTrack = function ( o )
    {
        if( o === 'Q' )
            {
                if( g.init.trackObj.quest === 'Q' )
                  {  
                        if( g.init.trackObj.opt === '' )
                            {
                                alert( "Set Options For Previous Question Before Adding Next Question !" );
                                return true;
                            }
                        else {
                               alert( "Please Save Question Before Adding Next Question !" );
                               return true;
                        }
                
                  }
                else if( g.init.trackObj.quest === '' )
                    {
                        //alert( "Question Save !" );
                        console.log ( " Always show this opt " + g.init.trackObj.opt + " quest " + g.init.trackObj.quest + " upfile " + g.init.trackObj.upfile   );
                        return false;
                    }
                else if ( g.init.trackObj.quest === 'I' ) /* Video Edit */
                    {
                        g.provideFn.resetTrack ( );
                         console.log ( " Always show this opt " + g.init.trackObj.opt + " quest " + g.init.trackObj.quest + " upfile " + g.init.trackObj.upfile   );
                        return false;
                    }
                
            }
        
        if( o === 'I' )
            {
                if( g.init.trackObj.quest === '' )
                  {  
                        return false;
                  }
                else if( g.init.trackObj.quest === 'I' )
                    {
                        alert( "Image Already Added !" );
                        return true;
                    }
                else {
                        alert( "Image Should Be Added Before Selecting Question Or After Saving Old Question !" );
                        return true;
                }
            }
        
        if( o === 'TxtA' || o === 'DD' ) 
            {
                return g.provideFn.commonTrackCheck_2 ( o );
            }
        
        if ( o === 'CxBx' || o === 'Rad' )
            {
                return g.provideFn.commonTrackCheck_1 ( o );
            }
        
        
        if( o === 'Up' )
            {
                
                if( g.init.trackObj.quest === 'Q' )
                  {  
                        if( g.init.trackObj.upfile ===  'Up' )
                            {
                                alert( "File Upload Already Added !" );
                                return true;
                            }
                        else  if ( g.init.trackObj.upfile === '' ){
                               return false;
                        }
                
                  }
                  else{
                      alert( "Add A Question First !" );
                      return true;
                  }
                
            }
        
    }
    
    /* Reset Activities */
    g.provideFn.resetTrack = function ( )
    {
        
        g.init.trackObj.quest = "";
        
        g.init.trackObj.opt = "";
        
        g.init.trackObj.upfile = "";
        
        g.init.trackObj.questRec = "";
        
        
    }
    
    g.provideFn.addQuestions = function ( comp , init , event , ui )
    {
          if ( g.init.header === "0" ) { alert( "Heading missing!" ); return ; }
    
           if( g.provideFn.checkTrack( 'Q' ) ) { return ; }
        
           var li = $("<li></li>");
        
           li.append( $( ui.draggable ).clone() );
        
           $( comp ).find("#sor").append( li );
          //$( comp ).append( $( ui.draggable ).clone() );
        
           g.init.questCntTotal = g.init.questCntTotal + 1;
           
           ( $( li ).children().get(0).childNodes ).item( 1 ).setAttribute( 'id' , 'Q' + g.init.questCntTotal );
            
           g.init.trackObj.questRec = 'Q' + g.init.questCntTotal ;   
        
           g.provideFn.setTrack( 'Q' );
        
          //g.init.recentAdd = "Q";
        
          var o = $( comp ).find( "#delete-survey-id" );
              
    
          if( o !== null || o !== undefined )
              {
                          //init.header = "1";
                          $( comp ).find( "#delete-survey-id" ).css( "display" , "block" );
                          $( comp ).find( "#delete-survey-id" ).addClass( 'Q' + g.init.questCntTotal );
                          /* Register */
                          g.provideFn.reg( 'Q' + g.init.questCntTotal , 'Q' );
              }
    }

    g.provideFn.addHeading = function ( comp , init , event , ui )
    {
        /* Don't repeat heading */
        if( g.init.header === "0" ) { 
            
            var li = $("<li></li>");
        
            li.append( $( ui.draggable ).clone() );
        
            $( comp ).find("#sor").append(li);
            
            ( $( li ).children().get(0).childNodes ).item( 1 ).setAttribute( 'id' , 'H' );
            
            $('.holder-col').css( 'height' , 'auto' );
                //.append(li);
            //$( comp ).append( $( ui.draggable ).clone() ); 
        
        } else { alert("One Heading Per Form !") }
        
        g.init.recentAdd = "H";
        
          /* Get an element after adding it, and set the css to display  */
          var o = $( comp ).find( "#delete-heading-id" );
          
          if( o !== null || o !== undefined )
              {
                  if( g.init.header === "0" )
                      {
                          g.init.header = "1";
                          $( comp ).find( "#delete-heading-id" ).css( "display" , "block" );
                          $( comp ).find( "#delete-heading-id" ).addClass("invHead");
                          /* Register */
                          g.provideFn.reg( 'invHead' , '' );
                      }
                  else{
                      
                  }
              }
    }
    
    /* It is used to set track object back to original */
    g.provideFn.commonTrackCheck_3 = function ( cnt ) {
        
        if( cnt.length === 0 )
        {
            g.init.trackObj.opt = '';
        }
        
    }
    
    g.com_surveyForms_predefined_DD = function ( o , typeOf ) {
        
        if( typeOf === 'DD' )
            {
                //console.log ( "get len --> " +  ( $( o ).parent() ).children( 'select' ).attr( 'id' ).length );
                if( ( $( o ).parent() ).children( 'select' ).attr( 'id' ).length !== 0 )
                    {
                        alert ( 'Version 1.0, Functionality is in Beta Version' );
                    }
            }
        
    }
    
    g.com_surveyForms_predefined_del = function ( o , typeOf ) {
        
                    if( typeOf !== 'I' )  ($( o ).parent()).parent().remove();
        
                    if( typeOf === 'Q' )
                        {
                            g.provideFn.resetTrack();
                            console.log(' remove all options ! ');
                        }
                    
                    if( typeOf === 'I' ) /* video Related */
                        {
                            ($( o ).parent()).parent().remove();
                            
                            if( g.init.trackObj.quest === 'I' )
                            {
                                g.provideFn.resetTrack();
                            }
                            
                            console.log( ' remove all image related detail ' );
                        }
        
                    if( typeOf === 'TxtA' )
                        {
                            
                            /* Check If More Rad Is Avaialbe ? */
                            var cnt = document.querySelectorAll( 'input[ id^="' + g.init.trackObj.questRec +  'TxtA" ]' );
                            
                            /* If not found, then reset the trackObj */
                            g.provideFn.commonTrackCheck_3 ( cnt );
                            
                        }
                    
                    if( typeOf === 'Rad' )
                        {
                            /* Check If More Rad Is Avaialbe ? */
                            var cnt = document.querySelectorAll( 'input[ id^="' + g.init.trackObj.questRec +  'Rad" ]' );
                            
                            /* If not found, then reset the trackObj */
                            g.provideFn.commonTrackCheck_3 ( cnt );
                           
                            
                        }
                    
                    if( typeOf === 'CxBx' )
                        {
                            /* Check If More Rad Is Avaialbe ? */
                            var cnt = document.querySelectorAll( 'input[ id^="' + g.init.trackObj.questRec +  'CxBx" ]' );
                            
                            /* If not found, then reset the trackObj */
                            g.provideFn.commonTrackCheck_3 ( cnt );
                            
                        }
        
                    if( typeOf === 'DD' )
                        {
                            
                            /* Check If More Rad Is Avaialbe ? */
                            var cnt = document.querySelectorAll( 'input[ id^="' + g.init.trackObj.questRec +  'DD" ]' );
                            
                            /* If not found, then reset the trackObj */
                            g.provideFn.commonTrackCheck_3 ( cnt );
                            
                        }
           
                     if( typeOf === 'Up' )
                         {
                             
                             /* Check If More Rad Is Avaialbe ? */
                            /*var cnt = document.querySelectorAll( 'input[ id^="' + g.init.trackObj.questRec +  'Up" ]' );*/
                            
                             g.init.trackObj.upfile = '';
        
                         }
        
                    
        
        
    }
    
    /* Register */
    g.provideFn.reg = function ( str , typeOf )
    {
        
        if( str === 'invHead' )
            {
                $(".invHead").click(function(){
                    
                    alert(" Cannot Delete Heading !");
            
                });
            }
        
    }
    
    g.provideFn.downloadFile = function (data, filename, type) 
    {
        
            var a = document.createElement("a"), file = new Blob([data], {type: type});
        
            if ( window.navigator.msSaveOrOpenBlob ) // IE10+
                {
                    window.navigator.msSaveOrOpenBlob( file , filename );
                }
            else { // Others
                
                var url = URL.createObjectURL( file );
                
                a.href = url;
                
                a.download = filename;
                
                document.body.appendChild(a);
                
                a.click();
                
                setTimeout(function() {
                    
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url); 
                    
                }, 0); 
            }
    }
    
    g.provideFn.downloadableData = function ( ) 
    {
        var heading = g.init.heading;
        var footer = g.init.footer;
        
        var bodySec = $("#sor").html();
        
        return heading + '' + bodySec + '' + footer ;
    }
    
    g.provideFn.hideUnhideButtonsBeforeGenerating = function ( o )
    {
        var fty = '' , fteen = '' ; 
        
        if( o === 'on' ) { fty = '50px'; fteen = '15px'; $('.drag').css( 'display' , 'none' ); }
        
        if( o === 'off' ) { fty = '0px'; fteen = '0px'; $('.drag').css( 'display' , 'inline-block' ); }
        
         $('#H').css( 'margin-bottom' , fty );
        
        var cnt = document.querySelectorAll( 'input[ id^="Q" ]' );
        
        $( cnt ).each( function ( index ) {
            
            console.log( "show node list " + ( cnt.item( index ) ).getAttribute( 'id' ).length );
            
            if( ( cnt.item( index ) ).getAttribute( 'id' ).length === 2 )
                { 
                    $( cnt.item( index ) ).css( 'display' , 'block' );
                    $( cnt.item( index ) ).css( 'margin-top' , fteen );
                    $( cnt.item( index ) ).css( 'margin-bottom' , fteen );
                }
            
        } );
        
        if( o === 'on' )
            {
                        var cnto = document.querySelectorAll( 'input[ id^="delete-" ]' );

                        $( cnto ).each( function ( index ) {

                                $( cnto.item( index ) ).css( 'display' , 'none' );

                            } );
            }
        
        if( o === 'off' )
            {
                        var cnto = document.querySelectorAll( 'input[ id^="delete-" ]' );

                        $( cnto ).each( function ( index ) {

                                $( cnto.item( index ) ).css( 'display' , 'block' );

                            } );
            }
        
        
        
    }
    
    $('#cTemp').click(function(){
        //alert('Work in progress for this API  !');
        g.provideFn.hideUnhideButtonsBeforeGenerating ( 'on' );
        
        g.provideFn.downloadFile ( g.provideFn.downloadableData( ) , 'Template.html' , 'html' );
        
        g.provideFn.hideUnhideButtonsBeforeGenerating ( 'off' );
        
    });
    
    $('#cForm').click(function(){
        alert(' Version 1.0, Functionality is in Beta Version ');
    });
    
    $('#cReset').click(function(){
        location.reload();
    });
    
    $('#cQuest').click(function(){
        //alert("In Save Form!");
        
        //$('#H').css( 'margin-bottom' , '50px' );
        
        /*var cnt = document.querySelectorAll( 'input[ id^="Q" ]' );
        
        $( cnt ).each( function ( index ) {
            
            console.log( "show node list " + ( cnt.item( index ) ).getAttribute( 'id' ).length );
            
            if( ( cnt.item( index ) ).getAttribute( 'id' ).length === 2 )
                { 
                    $( cnt.item( index ) ).css( 'display' , 'block' );
                    $( cnt.item( index ) ).css( 'margin-top' , '15px' );
                    $( cnt.item( index ) ).css( 'margin-bottom' , '15px' );
                }
            
        } );*/
        
        
          if( g.init.trackObj.quest === 'Q' )
              {
                  if( g.init.trackObj.opt === '' )
                      {
                          alert( "Please Add Option's To Question Before Saving!" );
                      }
                  else {
                      
                      var r = confirm("Saving Question Will Not Allow You To Modify Options, Do You Wish To Continue !");
                            if (r == true) {
                                                g.provideFn.resetTrack();
                                } else {
                                                
                                        }
                      
                         
                      
                  }
              }
        else {
            alert("Question Not Found Or Question Already Saved !");
        }
          
    });
    
  }( this ) );


