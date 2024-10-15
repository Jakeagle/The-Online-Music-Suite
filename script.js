$(document).ready(function () {
  // Define the notes and their keyboard mapping
  const notes = [
    { key: "Z", note: "C4", type: "white" },
    { key: "S", note: "C#4", type: "black" },
    { key: "X", note: "D4", type: "white" },
    { key: "D", note: "D#4", type: "black" },
    { key: "C", note: "E4", type: "white" },
    { key: "V", note: "F4", type: "white" },
    { key: "G", note: "F#4", type: "black" },
    { key: "B", note: "G4", type: "white" },
    { key: "H", note: "G#4", type: "black" },
    { key: "N", note: "A4", type: "white" },
    { key: "J", note: "A#4", type: "black" },
    { key: "M", note: "B4", type: "white" },

    { key: ",", note: "C5", type: "white" },
    { key: "L", note: "C#5", type: "black" },
    { key: ".", note: "D5", type: "white" },
    { key: ";", note: "D#5", type: "black" },
    { key: "/", note: "E5", type: "white" },
    { key: "Q", note: "F5", type: "white" },
    { key: "2", note: "F#5", type: "black" },
    { key: "W", note: "G5", type: "white" },
    { key: "3", note: "G#5", type: "black" },
    { key: "E", note: "A5", type: "white" },
    { key: "4", note: "A#5", type: "black" },
    { key: "R", note: "B5", type: "white" },

    { key: "T", note: "C6", type: "white" },
    { key: "6", note: "C#6", type: "black" },
    { key: "Y", note: "D6", type: "white" },
    { key: "7", note: "D#6", type: "black" },
    { key: "U", note: "E6", type: "white" },
    { key: "I", note: "F6", type: "white" },
    { key: "9", note: "F#6", type: "black" },
    { key: "O", note: "G6", type: "white" },
    { key: "0", note: "G#6", type: "black" },
    { key: "P", note: "A6", type: "white" },
    { key: "-", note: "A#6", type: "black" },
    { key: "[", note: "B6", type: "white" },

    { key: "]", note: "C7", type: "white" },
    { key: "=", note: "C#7", type: "black" },
    { key: "1", note: "D7", type: "white" },
    { key: "5", note: "D#7", type: "black" },
    { key: "8", note: "E7", type: "white" },
  ];

  // Dynamically generate piano keys
  notes.forEach(function (note) {
    const keyClass = note.type === "white" ? "white-key" : "black-key";
    const key = `<div class="key ${keyClass}" data-note="${note.note}" data-key="${note.key}">${note.key}</div>`;
    $("#piano").append(key);
  });

  // Play sound when a key is pressed on the keyboard
  $(document).on("keydown", function (e) {
    const keyPressed = e.key.toUpperCase();
    const note = notes.find((n) => n.key === keyPressed);
    if (note) {
      playSound(note.note);
      highlightKey(keyPressed);
    }
  });

  // Play the sound (You will need to have audio files for each note)
  function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
  }

  // Highlight the corresponding key on the screen
  function highlightKey(key) {
    const pianoKey = $(`[data-key="${key}"]`);
    pianoKey.addClass("active");
    setTimeout(function () {
      pianoKey.removeClass("active");
    }, 200);
  }
});
