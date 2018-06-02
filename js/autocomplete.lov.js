//  must use Jquery
//  first list of value
const lov = {
  input: "#ap-autocomplit-input",
  listContainer: "#ul-container",
  data: ["gal", "lior", "nir", "asaf", "ben", "rammy", "galgal", "ban", "banban","ram"]
}

autocomplete(lov.input, lov.listContainer, lov.data);
// scound list of value
const lov1 = {
  input: "#ap-autocomplit-input1",
  listContainer: "#ul-container1",
  data: ["anna", "anny", "gal", "sara", "danna", "rammy", "galgal", "ban", "banban","ram"]
}

autocomplete(lov1.input,  lov1.listContainer, lov1.data);

//  the generic autocomplete function
function autocomplete(input, listContainer, data) {
  const AutocompleteInput = $(input);
  const ListContainer = $(listContainer);
  

  const setInputVal = function (value) {
    AutocompleteInput.val(value);
    emptyList()
  }

  function emptyList() {
    let emptyList = []
    renderList(emptyList);
  }

  function renderList(list) {
    let ul = document.createElement("ul");

    list.map(function (item) {
      let li = document.createElement("li");
      let span = document.createElement("span");
      span.innerText = item;
      li.appendChild(span);
      li.addEventListener("click", setInputVal.bind(event, item))
      ul.appendChild(li);
    })
    ListContainer.html(ul);
  }

  renderList(data);

  function filterList(listArr, val) {
    let newList = listArr.filter(function (item) {
      return item.startsWith(val);
    });
    if (newList.length > 0) {
      renderList(newList)
    }
    else {
      resetInput();
    }
    return newList;
  }

  AutocompleteInput.keyup(function () {
    let val = AutocompleteInput.val();
    filterList(data, val);
  });

  AutocompleteInput.focus()

  function resetInput() {
    AutocompleteInput.val("");
    renderList(data);
  }

}



