var teams = {
    'CFRPI': [
      'A.J.',
      'Carol',
      'Chuck',
      'Harry',
      'Marteki',
      'Tommi'
    ]
}
    today = new Date();

function getNextName( team ) {
  var n = today.getDate() + today.getMonth() + today.getFullYear(),
      i = n % ( team.length ),
      name = team[i];
  $( '#team-order' ).append( '<li>' + name + '</li>' );
  team.splice( i, 1 );
};

function orderTeam( team ) {
  var n = today.getDate() + today.getMonth() + today.getFullYear(),
      l = team.length,
      content = '';

  for ( var x = 0; x < l; x++ ) {
    var i = n % ( team.length ),
        name = team[i];

    content += '<li>' + name + '</li>';
    team.splice( i, 1 );
  }
  return content;
}

$( document ).ready( function() {
  var dateText = ( today.getMonth() + 1 ) + '/' + today.getDate() + '/' + today.getFullYear();
  $( '#date-today').text( dateText );

  for ( var key in teams ) {
    var name = key,
        team = teams[key];
        content = orderTeam( team );
    $( 'body' ).append( '<h2>' + name + '</h2>');
    $( 'body' ).append( '<ol>' + content + '</ol>');
  }

});
