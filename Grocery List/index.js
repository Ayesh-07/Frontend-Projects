
let groceryList = []


    // Add Items

    let item = document.querySelector('#add-items')
    let btn  =  document.querySelector('.add-btn')

    btn.addEventListener(('click'), ()=>{
      
      let value = item.value.trim()
      if (value != '') {
      groceryList.push(value)
      console.log(`"${value}"  item  successfully added.`);
      item.value = '';
      
      let display = document.querySelector('.items')
      groceryList.forEach(() => {
      display.innerHTML = groceryList
      
    });
    
      }})



    // Delete Items

     let delItems = document.querySelector('#del-item') 
     let del= document.querySelector('.del-btn')
     let delItem = document.querySelector('.delItem')       
     del.addEventListener(('click') , ()=>{   
    let delvalue = delItems.value.trim()         
    const index = groceryList.indexOf(delvalue);
    if (delvalue) {
        groceryList.splice(index, 1)
        delItem.innerText=`" ${delvalue}"  item  successfully removed`;
        let dis = document.querySelector('.items')
         groceryList.forEach(() => {
         dis.innerHTML = groceryList
      
    });

    }

     })


     // Edit Items


     let editBtn = document.querySelector('.edit-btn')
     let oldItem = document.querySelector('#oldItem')
      let newItem = document.querySelector('#newItem')
      let editedValue = document.querySelector('.editedValue')
      
   editBtn.addEventListener('click' , ()=>{

     const index = groceryList.indexOf(oldItem.value);
    if (index !== -1) {
        groceryList.splice(index, 1, newItem.value);
       editedValue.innerText = `"${oldItem.value}" updated to "${newItem.value}"`;
    } else {
        editedValue.innerText = ` "${oldItem.value}" not found`;
    }


   })
   



    // Search Items

    
    let searchItem = document.querySelector('#search-item')
    let searchBtn = document.querySelector('.searchBtn')
    let searchedItem = document.querySelector('.SItem')
    
    searchBtn.addEventListener('click', ()=>{
        let Searchitm = searchItem.value.trim()
       const index = groceryList.indexOf(Searchitm);

        if (index !== -1) {
        searchedItem.innerText = `Your item "${Searchitm}" found at position ${index + 1}`;
    }
    else {
        searchedItem.innerText = ` Your item" ${Searchitm}"  item is not found`;
    }



    })
     

    // Filter Items

    
     let filterBtn = document.querySelector('.filterItem')
     let filterItem = document.querySelector('#filter-item')
     let filteredItem = document.querySelector('.found')

     filterBtn.addEventListener('click' , ()=>{
      
  if (filterItem) {
    let filtered = groceryList.filter((item) => 
      item.toLowerCase().startsWith(filterItem.value.toLowerCase())
    );

    if (filtered.length > 0) {
      filteredItem.innerText = ` Items starting with "${filterItem.value}": is ${filtered.join(", ")}`
     
    } else {
        filteredItem.innerText = ` No items found starting with "${filterItem.value}".`;
    }
  }
     })
  
  
