/*
============================================
; Title: Web 330 Group Project
; Author: Lance Desrouleaux, Troy Martin, Adam Donner, Reva Baumann
; Date: 06/17/2019
; Modified By:
; 06/17/2019 Troy Martin Created initial file
; Description: Custom Knockout bindings
;===========================================
*/

/*
; Params: none
; Response: none
; Description: Format the text on the button for a pre or span tag based on if we are displaying code or text
*/
ko.bindingHandlers.buttonText = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    // get the value
    var unwrapped = ko.unwrap(valueAccessor());
    // is the value for the button code
    var isCodeValue = allBindings.get('isCode') || false;

    // default the format to a span tag
    var answerFormat = "span";
    // if code put in a pre tag for formatting
    if(isCodeValue){
      answerFormat = "pre";
    }
    // set the html on the element
    $(element).html(`<${answerFormat}>${unwrapped}<${answerFormat}>`);
  }
};

/*
; Params: none
; Response: none
; Description: When the last question is answered enable the element
*/
ko.bindingHandlers.quizComplete = {
  update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    // get the value (causes update to fire if watched)
    var unwrapped = ko.unwrap(valueAccessor());
    // get the current scoring summary
    var summary = quizModule.getSummary();

    // test to see if all questions have been answered
    if(summary
    && summary.noAnswer
    && (!summary.noAnswer.length
    || summary.noAnswer.length === 0)){
      // enable the element
      $(element).removeAttr("disabled").removeClass("disabled").attr("title","Click submit to score your quiz.");
    }
  }
};
