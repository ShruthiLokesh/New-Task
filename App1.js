class Customers {
    constructor(id,name,email){
       this.id = id;
       this.name = name;
       this.email = email;
             
}
    
}

class UI {
    addCustomer (customers) {
        const list = document.getElementById ('customer-list');
        const row = document.createElement ('tr');
        row.innerHTML = `
        <td>${customers.id}</td>
        <td>${customers.name}</td>
        <td>${customers.email}</td>
        <td><a href="" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    showAlert (message,className){
        const div = document.createElement('div');

        //Add className

        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');

        //Get Form

        const form = document.querySelector('#information-form');

        //Insert alert

        container.insertBefore(div, form);

        //timeOut after 3 sec

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
    deleteName(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    
    clearFields (){
        document.getElementById('id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    }
}

//Event Listening

document.getElementById('information-form').addEventListener('submit',function(e){
    //Get form Values

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    //Instantiate form
    const customers = new Customers(id,name,email);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(id === '' || name === '' || email === '') {
        //Error alert
       
        ui.showAlert('please fill in all fields', 'error')
       
    }else{
        //Add Customer
        ui.addCustomer(customers);

        //show success
        ui.showAlert("customer Added", 'success');

        //clear Fields
        ui.clearFields();
    }
    e.preventDefault();
})

//Event Listening to delete
document.getElementById('customer-list').addEventListener('click',function(e){
   //Instantiate UL
   const ui = new UI();
    
   //Delete Customer
   ui.deleteName(e.target);

   //Show Message

   ui.showAlert('name Removed', 'success');

   e.preventDefault();
});