// lovList = Array of my html inputs and ul elements for auotocomplete,
// Make shure to use the same  div.list-componet order like in this HTML example..
const lovList = [{
  inputId: "#ap-autocomplit-input",
  listContainerId: "#ul-container",
  data: ["gal", "lior", "nir", "asaf", "ben", "rammy", "galgal", "ban", "banban", "ram"]
},
{
  inputId: "#ap-autocomplit-input1",
  listContainerId: "#ul-container1",
  data: ["anna", "anny", "gal", "sara", "danna", "rammy", "galgal", "ban", "banban", "ram"]
}]

lovList.forEach(function (lov) {
  autocomplete(lov.inputId, lov.listContainerId, lov.data);
})
// ******************************************************************************
//  the generic autocomplete function rendering data list of values for input 
function autocomplete(input, listContainer, data) {
  let AutocompleteInput = $(input);
  let ListContainer = $(listContainer);
  
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

  function resetInput() {
    AutocompleteInput.val("");
    renderList(data);
  }
}



