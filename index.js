  //selcting input
  let titleEl=document.getElementById('title');
  //selecting ul
  let listEl=document.getElementById('list');
  //selecting button for event triggering
  let addbuttonEl=document.getElementById('add-btn');

  addbuttonEl.addEventListener('click',function(){
      //extracting vallue from input
      let titleText=titleEl.value;
      //creating the li for eppending
      let li=document.createElement('li');
      //inserting the text insiide li from the inout value
      li.innerText=titleText;

      //new created li hai usse epeend/add krna
      listEl.appendChild(li);

      //clear kr do imput ko
      titleEl.value='';

      //delete element after selecting(maine khud kiya jalwa)
      li.addEventListener('click',function(){
          li.remove();
      });
  })