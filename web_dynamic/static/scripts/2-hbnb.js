$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    const myListName = [];
    const myId = [];
    $('input[type=checkbox]:checked').each(function () {
      myListName.push($(this).attr('data-name'));
      myId.push($(this).attr('data-id'));
    });
    if (myListName.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(myListName.join(', '));
    }
    console.log(myId);
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    dataType: 'json',
    success: function (json) {
      if (json.status === "OK") {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    },
    error: function (xhr, status) {
      console.log('error ' + status);
      $('div#api_status').removeClass('available');
    }
  });
});

