var telInput = $("#phone"),
  errorMsg = $("#error-msg"),
  validMsg = $("#valid-msg");

  telInputTwo = $("#phone-2"),
  errorMsgTwo = $("#error-msg-2"),
  validMsgTwo = $("#valid-msg-2");

// initialise plugin
telInput.intlTelInput({

  allowExtensions: true,
  formatOnDisplay: true,
  autoFormat: true,
  autoHideDialCode: true,
  autoPlaceholder: true,
  defaultCountry: "auto",
  ipinfoToken: "yolo",

  nationalMode: false,
  numberType: "MOBILE",
  //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
  preventInvalidNumbers: true,
  separateDialCode: true,
  initialCountry: "eg",
  geoIpLookup: function(callback) {
  $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    var countryCode = (resp && resp.country) ? resp.country : "";
    callback(countryCode);
  });
},
   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.min.js"
});
telInputTwo.intlTelInput({

  allowExtensions: true,
  formatOnDisplay: true,
  autoFormat: true,
  autoHideDialCode: true,
  autoPlaceholder: true,
  defaultCountry: "auto",
  ipinfoToken: "yolo",

  nationalMode: false,
  numberType: "MOBILE",
  //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
  preventInvalidNumbers: true,
  separateDialCode: true,
  initialCountry: "eg",
  geoIpLookup: function(callback) {
  $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    var countryCode = (resp && resp.country) ? resp.country : "";
    callback(countryCode);
  });
},
   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.min.js"
});
var reset = function() {
  telInput.removeClass("error-num");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
};
var reset2 = function() {
  telInputTwo.removeClass("error-num");
  errorMsgTwo.addClass("hide");
  validMsgTwo.addClass("hide");
};
// on blur: validate
telInput.blur(function() {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error-num");
      errorMsg.removeClass("hide");
    }
  }
});
telInputTwo.blur(function() {
  reset2();
  if ($.trim(telInputTwo.val())) {
    if (telInputTwo.intlTelInput("isValidNumber")) {
      validMsgTwo.removeClass("hide");
    } else {
      telInputTwo.addClass("error-num");
      errorMsgTwo.removeClass("hide");
    }
  }
});
// on keyup / change flag: reset
telInput.on("keyup change", reset);
telInputTwo.on("keyup change", reset2);