class Account {
    constructor(name,branch,accountNomber){
       this.name = name;
       this.branch = branch;
       this.accountNomber = accountNomber;
             
}
    
}

class UX {
    addCustomers (account) {
        const lists = document.getElementById ('account-list');
        const rows = document.createElement ('tr');
        rows.innerHTML = `
        <td>${account.name}</td>
        <td>${account.branch}</td>
        <td>${account.accountNomber}</td>
        <td><a href="" class="delete">X</a></td>
        `;

        lists.appendChild(rows);
    }

    showAlerts (Message,ClassName){
        const divs = document.createElement('div');

        //Add className

        divs.ClassName = `alerts ${ClassName}`;
        divs.appendChild(document.createTextNode(Message));
        const containers = document.querySelector('.containers');

        //Get Form

        const forms = document.querySelector('#account-form');

        //Insert alert

        containers.insertBefore(divs, forms);

        //timeOut after 3 sec

        setTimeout(function(){
            document.querySelector('.alerts').remove();
        },3000);
    }
    deleteAccounts(target){
        if(target.ClassName === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    
    clearField (){
        document.getElementById('name').value = '';
        document.getElementById('branch').value = '';
        document.getElementById('accountNomber').value = '';
    }
}

//Event Listening

document.getElementById('account-form').addEventListener('submit',function(e){
    //Get form Values

    const name = document.getElementById('name').value;
    const branch = document.getElementById('branch').value;
    const accountNomber = document.getElementById('accountNomber').value;

    //Instantiate form
    const accounts = new Account(name,branch,accountNomber);

    //Instantiate UI
    const ux = new UX();

    //Validate
    if(name === '' || branch === '' || accountNomber === '') {
        //Error alert
       
        ux.showAlerts('please fill in all fields', 'error')
       
    }else{
        //Add Customer
        ux.addCustomers(accounts);

        //show success
        ux.showAlerts("Account Added", 'success');

        //clear Fields
        ux.clearField();
    }
    e.preventDefault();
})

//Event Listening to delete
  document.getElementById('account-list').addEventListener('click',function(e){
   //Instantiate UL
   const ux = new UX();
    
   //Delete Customer
   ux.deleteAccounts(e.target);

   //Show Message

   ux.showAlerts('Account Removed', 'success');

   e.preventDefault();
});