// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require spree/backend

//= require_tree .
//= require spree/backend/spree_digital

$(document).ready(function() {
  var namefield, descfield, namecount, desccount, namenum, descnum, namemax, descmax, totalname, totaldesc;


  namemax = 100;
  descmax = 500;

  namefield = $("#name-field-form-edit");
  descfield = $("#description-field-form-edit");

  namecount = $("#number-container-name");
  desccount = $("#number-container-description");

  var initialname = namefield.val().length;
  var initialdesc = descfield.val().length;

  namecount.html(namemax - initialname);
  desccount.html(descmax - initialdesc);

  namefield.on("keyup", function() {
    var length = $(this).val().length;
    var totalname = namemax - length;
    namecount.html(totalname);
  });

  descfield.on("keyup", function() {
    var length = $(this).val().length;
    var totaldesc = descmax - length;
    desccount.html(totaldesc);
  });

  var field1, field2, field3, field4, field5, field6, fields;
  var numberaux1, numberaux2, numberaux3, numberaux4, numberaux5, numberaux6, numberauxs;
  var max1, max2;

  max1 = 150;
  max2 = 130;

  numberauxs = $(".text-field-number-aux");
  numberaux1 = numberauxs[0];
  numberaux2 = numberauxs[1];
  numberaux3 = numberauxs[2];
  numberaux4 = numberauxs[3];
  numberaux5 = numberauxs[4];
  numberaux6 = numberauxs[5];

  fields = $(".property-field-text");
  field1 = $("#product_product_properties_attributes_0_value");
  field2 = $("#product_product_properties_attributes_1_value");
  field3 = $("#product_product_properties_attributes_2_value");
  field4 = $("#product_product_properties_attributes_3_value");
  field5 = $("#product_product_properties_attributes_4_value");
  field6 = $("#product_product_properties_attributes_5_value");

  field1.on("keyup", function() {
    var length = $(this).val().length;
    var totalname = max1 - length;
    numberaux1.html(totalname);
  });

  field2.on("keyup", function() {
    var length = $(this).val().length;
    var totalname = max1 - length;
    numberaux2.html(totalname);
  });

  field3.on("keyup", function() {
    var length = $(this).val().length;
    var totalname = max2 - length;
    numberaux3.html(totalname);
  });

  field4.on("keyup", function() {
    var length = $(this).val().length;
    var totalname = max2 - length;
    numberaux4.html(totalname);
  });

  field5.on("keyup", function() {
    var length = $(this).val().length;
    var totalname = max2 - length;
    numberaux5.html(totalname);
  });

  field6.on("keyup", function() {
    var length = $(this).val().length;
    var totalname = max2 - length;
    numberaux6.html(totalname);
  });


});
