const file = document.getElementById("file");
const reader = new FileReader();
const emailRegex = /[\w\.-]+@[\w\.-]+/g;

file.addEventListener("change", (event) => {
  let userFile = file.files[0];
  if (!userFile) return;
  let read;
  let filtered;
  reader.onload = function () {
    let fileName = userFile.name.replace(".txt", "");
    fileName = fileName + "_FILTER";
    read = reader.result;
    filtered = filterStr(read).replace(" ", "");
    console.log(read);
    console.log(filtered);
    download(fileName, filtered);
  };

  reader.readAsText(userFile);
});

function filterStr(str) {
  let emails = str.match(emailRegex);
  for (let i = 0; i < emails.length; i++) {
    if (itemCount(emails, emails[i]) > 1) emails.splice(i, 1);
  }
  return emails.join("\n");
}

function itemCount(array, item) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == item) count++;
  }
  return count;
}

function download(file, text) {
  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8, " + encodeURIComponent(text));
  element.setAttribute("download", file);

  document.body.appendChild(element);

  //onClick property
  element.click();

  document.body.removeChild(element);
}
