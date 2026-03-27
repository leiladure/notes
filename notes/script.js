function addNote() {
  const input = document.getElementById("noteInput");
  const noteText = input.value;

  if (noteText === "") return;

  const li = document.createElement("li");
  li.textContent = noteText;

  li.onclick = function () {
    li.remove();
  };

  document.getElementById("notesList").appendChild(li);

  input.value = "";
}