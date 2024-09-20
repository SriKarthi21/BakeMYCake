export default  function Filter(item,searchText){
    if(!searchText)return item;
return item.filter((data)=>data.category.toLowerCase().includes(searchText.toLowerCase()) )
}