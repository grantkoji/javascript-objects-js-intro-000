var playlist = {name: 'titles'};

function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  return playlist
}

function removeFromPlayList(playlist, name) {
  delete playlist.name;
  return playlist
}