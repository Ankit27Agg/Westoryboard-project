import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
                                {/* <!-- Input for Phone Number --> */}
  <div>
    <h3>Email PART</h3>
    <label for="Email:">Email:</label>
    <input type="text" />
  </div>
                                  
                                  
                                  
                                    {/* <!-- Input for Phone Number --> */}
  <div>
    <h3>date of birth PART</h3>
    <label for="Email:">DOB:</label>
    <input type="date" />
  </div>




                                    {/* <!-- Input for Phone Number --> */}
  <div>
    <h3>Phone number PART</h3>
    <label for="Email:">Phone No:</label>
    <input class="phone-no" id="phone-no" type="text" placeholder="Type your Phone Number"/>
  </div>




  <div>
    <h3>File Picker PART</h3>
    <input type="file" class="select-file" />
  </div>




  
                                        {/* <!-- Default Dropdown --> */}
  <h3>Default Dropdown PART</h3>
  <select name="names" id="names">
    <option value="default">Select an option</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  <br/>




                                        {/* <!-- Dropdown for GENDER --> */}
  <h3>Gender Dropdown PART</h3>
  <label>Gender</label>
  <select name="names" id="names">
    <option value="default">Select an option</option>
    <option value="male">MALE</option>
    <option value="female">FEMALE</option>
  </select>

    </div>
  );
}

export default App;



// //************************  GET EVENTS FROM HTML  *********************************** */
// const phoneNo = document.getElementById('phone-no');
// const email = document.getElementById('email');


// //**********************************  VALIDATIONS   *************************** */
// const validation = () => {
//   let phoneVal = /^[0-9]+$/;
//   let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// //                                 for phone number

//   if(!phoneVal.test(phoneNo.value)){
//     alert('Wrong Input OR field is empty');
//     return false;
//   }

// //                                 for email 
//   if(!emailVal.test(email.value)){
//     alert('Wrong Input OR field is empty');
//     return false;
//   }

//   return true;
// }


