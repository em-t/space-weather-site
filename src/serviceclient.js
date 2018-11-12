export function fetchImage(callback) {
  fetch("/dailyimage", { accept: "application/json" }).then(function(response) {
    response.json().then(function(json) {
      if (response.status >= 400) callback(null, response.status);
      else callback(json);
    });
  });
}

export function fetchCMEdata(callback) {
  fetch("/DONKI/CME", { accept: "application/json" }).then(function(response) {
    response.json().then(function(json) {
      if (response.status >= 400) callback(null, response.status);
      else callback(json);
    });
  });
}

export function fetchCMEinfo(callback, type) {
  fetch("/spaceweather/" + type, { accept: "application/json" }).then(function(
    response
  ) {
    response.json().then(function(json) {
      if (response.status >= 400) callback(null, response.status);
      else callback(json);
    });
  });
}
