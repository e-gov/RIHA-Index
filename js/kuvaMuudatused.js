
function kuvaMuudatused() {
  $.get('https://api.github.com/repos/e-gov/RIHA-Index/commits?page=1&per_page=5', 
    function(data, status) {
      // alert(status);
      // alert(data.toString());
      data.map(function(commitRecord) { 
        // Vorminda kuupäev
        var date = new Date(commitRecord.commit.committer.date);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dt = date.getDate();
        if (dt < 10) {
          dt = '0' + dt;
        }
        if (month < 10) {
          month = '0' + month;
        }
        var kirje = $('<tr></tr>').
          html('<td>' + dt + '.' + month + '.' + year + '</td><td>' +
            commitRecord.commit.committer.name + '</td><td>' +
            commitRecord.commit.message + '</td>');
        $('#muudatused').append(kirje);
        
      });
    });  
}
