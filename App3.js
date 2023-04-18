class Transaction {
   constructor(Id,Amount,PaymentType){
      this.Id = Id;
      this.Amount = Amount;
      this.PaymentType = PaymentType;
            
}
   
}

class UY {
   addTransaction (person) {
       const listed = document.getElementById ('transaction-list');
       const rowss = document.createElement ('tr');
       rowss.innerHTML = `
       <td>${person.Id}</td>
       <td>${person.Amount}</td>
       <td>${person.PaymentType}</td>
       <td><a href="" class="delete">X</a></td>
       `;

       listed.appendChild(rowss);
   }

   showAlert (messaged,classname){
       const div = document.createElement('div');

       //Add className

       div.classname = `alert ${classname}`;
       div.appendChild(document.createTextNode(messaged));
       const contained = document.querySelector('.contained');

       //Get Form

       const formed = document.querySelector('#transaction-form');

       //Insert alert

       contained.insertBefore(div, formed);

       //timeOut after 3 sec

       setTimeout(function(){
           document.querySelector('.alert').remove();
       },3000);
   }
   deleteTransaction(target){
       if(target.classname === 'delete'){
           target.parentElement.parentElement.remove();
       }
   }
   
   clearFielded (){
       document.getElementById('Id').value = '';
       document.getElementById('Amount').value = '';
       document.getElementById('PaymentType').value = '';
   }
}

//Event Listening

document.getElementById('transaction-form').addEventListener('submit',function(e){
   //Get form Values

   const Id = document.getElementById('Id').value;
   const Amount = document.getElementById('Amount').value;
   const PaymentType = document.getElementById('PaymentType').value;

   //Instantiate form
   const person = new Transaction(Id,Amount,PaymentType);

   //Instantiate UI
   const uy = new UY();

   //Validate
   if(Id === '' || Amount === '' || PaymentType === '') {
       //Error alert
      
       uy.showAlerted('please fill in all fields', 'error')
      
   }else{
       //Add Customer
       uy.addTransaction(person);

       //show success
       uy.showAlerted("Amount Added", 'success');

       //clear Fields
       uy.clearFielded();
   }
   e.preventDefault();
})

//Event Listening to delete
   document.getElementById('transaction-list').addEventListener('click',function(e){
  //Instantiate UL
  const uy = new UY();
   
  //Delete Customer
  uy.deleteTransaction(e.target);

  //Show Message

  uy.showAlerted('Transaction Removed', 'success');

  e.preventDefault();
});