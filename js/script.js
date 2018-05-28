const data = ["gal","lior","nir","asaf","ben","rammy","galgal","ban","banban"];
// keyFilter --> string 

function filterList(listArr,val){
  let newList = listArr.filter(function(item){
    return  item.startsWith(val);
  });
  renderList(newList)
  return newList;
}

let input = $("#ap-autocomplit-input");
input.keyup(function() {
  let val = input.val();
  filterList(data, val);
});

const setInputVal = function (value) {
    input.val(value); 
    let newList = []
    renderList(newList);
}

function renderList(list){
    let element = $("#ul-a-container");
    let ul = document.createElement("ul");
   
    list.map(function(item){
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = item;
        li.appendChild(span);
        span.addEventListener("click",setInputVal.bind(event,item) )
        ul.appendChild(li);
    })
    element.html(ul);
}
renderList(data);