
var options = [
{
  value: 0,
  content: "Choose"
},
{
  value: "friends",
  content: "Friends"
},
{
  value: "internet",
  content: "Internet"
},
{
  value: "add",
  content: "Add"
},
{
  value: "other",
  content: "Other"
}
];


var list = '<select name="chooselist" id="find-us" class="form-dimension">';
for (var i = 0; i < options.length; i++) {
  list += '<option value="'+ options[i].value + '">' + options[i].content + '</option>';
}

list += '</select>'
document.querySelector('#find-us').innerHTML = list;

