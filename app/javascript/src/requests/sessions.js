$.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });

  export function createSession (username, password, successCB, errorCB) {
    var request = {
        type: 'POST',
        url: 'api/sessions',
        data: {
            user: {
                username: username,              
                password: password
            }
        },
  
        success: successCB,
        error: errorCB
      }
    
      $.ajax(request);
  }