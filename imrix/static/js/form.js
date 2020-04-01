$(document).ready(function() {
  $("#subscribe-validate-form").validate({
    rules: {
      subscribe: {
        required: true,
        email: true
      }
    },

    submitHandler: function(form) {
      formSubmission(form);
    }
  });

  $("#subscribe-validate-form-2").validate({
    rules: {
      subscribe: {
        required: true,
        email: true
      }
    },

    submitHandler: function(form) {
      formSubmission(form);
    }
  });

  $("#contact-form-validate").validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },

    submitHandler: function(form) {
      formSubmission(form);
    }
  });

  function formSubmission(form) {
    try {
      $(form)
        .find("button[type=submit]")
        .addClass("process-btn")
        .attr("disabled", "true");

      var method = $(form).attr("method");
      var action = $(form).attr("action");

      var $data = {};

      $(form)
        .find("input, textearea, select")
        .each(function() {
          $data[this.name] = $(this).val();
        });

      ajax(
        method,
        action,
        JSON.stringify($data),

        function() {
          $(form)
            .find(".form")
            .addClass("d-none");
          $(form)
            .find(".form-status")
            .removeClass("d-none");
        },

        function(e) {
          $(form)
            .find(".form-error")
            .removeClass("d-none")
            .text(e);
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  // helper function for sending an AJAX setRequestHeader
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;

      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };

    xhr.send(data);
  }
});
