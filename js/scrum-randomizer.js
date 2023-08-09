const teams = {
    'External Products': [
      'A.J.',
      'Brandon',
      'Chuck',
      'Ruth',
      'Tommi'
    ]
}
    today = new Date();

const agendas = {
  'Monday': 'We should go over the task board!',
  'Tuesday': 'We should do individual updates!',
  'Wednesday': 'We should go over the task board!',
  'Thursday': 'We should do individual updates!',
  'Friday': 'We have virtual scrum!',
  'none': 'Uhm... it\'s the weekend...?'
}

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

function todaysAgenda( day ) {
  if ( !agendas.hasOwnProperty( day ) ) {
    return agendas.none;
  } else {
    return agendas[day];
  }

}

$( document ).ready( function() {
  var dateText = ( today.getMonth() + 1 ) + '/' + today.getDate() + '/' + today.getFullYear();
  $( '#date-today').text( dateText );
  const day = new Date().toLocaleDateString('en', {weekday:'long'});

  for ( var key in teams ) {
    var name = key,
        team = teams[key];
        content = orderTeam( team );
    $( 'body' ).append( '<h2>' + name + '</h2>');
    $( 'body' ).append( '<ol>' + content + '</ol>');
    $( 'body' ).append( '<h3>Today\'s agenda (' + day + '):</h3>'  );
    $( 'body' ).append( '<ul class="agenda"><li>' + todaysAgenda(day) + '</li></ul>' );
  }

});
