function testNoteListMakesInstanceOfNoteList() {
  var notelist = new NoteList();
  assert.isTrue(notelist instanceof NoteList);
};


function testNoteListReturnArray() {
  var notelist = new NoteList();
  assert.isTrue(notelist.getNoteList() instanceof Array);
};

function testAddNoteToNoteList() {
  var notelist = new NoteList();
  var text = 'live is awesome!';
  notelist.addNote(text)
  // notelist.getNoteList();
  assert.isTrue(notelist.getNoteList().length === 1);
  // assert.isTrue(notelist.notes().length === 1);

};


testNoteListMakesInstanceOfNoteList();
testNoteListReturnArray();
testAddNoteToNoteList();
