const myRequest = "http://52.25.115.99:8080/ServiceManager/Macro/ExecMacro/EBS_SalesOrders_GetItems"
const loader = $(".donut-container")
fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) {
       /* process your JSON further */
    let data = json.Response.EBS_SalesOrders_GetItemsTableArray.EBS_SalesOrders_GetItemsArrayItem
    let listData = data.map(function(item) {
      return item.System_space_Items;
    })
    loader.hide();
    autocomplete("#ap-autocomplit-input", "#ul-container", listData)
  })
  .catch(function(error) { console.log(error); });