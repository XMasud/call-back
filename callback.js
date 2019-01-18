//Example 1

function loadData(callback) {
  callback(1);
}

function gotData(data) {
  console.log(data);
}
loadData(gotData);

//Example 2

function getData() {
  $.ajax({
    url: "http://api.open-notify.org/astros.json",
    type: "GET",
    success: handleData
  });
}

function handleData(data) {
  console.log(data);
}

//Example 3

function loadDataFromApi(arg, callback) {
  $.ajax({
    success: function(data) {
      callback(data);
    }
  });
}

loadDataFromApi(arg, function(data) {
  console.log(data);
});

// Some resourceful Link
// https://stackoverflow.com/questions/9041321/return-ajax-callback-return
