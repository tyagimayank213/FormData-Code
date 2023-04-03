import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ firstName:"", lastName:"", email:"", country:"", streetAddress:"", city:"", state:"", postalCode:"", comments:false, candidates:false, offers:false, pushNotification:""} )

  // console.log(formData);
  function changeHandler(event){
    const {name, value, checked, type} = event.target;
      setFormData( prevData => {
          return {
              ...prevData,
              [name] : type === "checkbox" ? checked : value
          }
      });
  }
  function submitHandler(event){
    event.preventDefault();

    console.log("Finally printing Form Data\n");
    console.log(formData)
  }

  return (
    <div >
        <form className="w-5/12 border mx-auto border-gray-200 px-4 py-6" onSubmit={submitHandler}>
            <label htmlFor="firstName">First name</label>
            <input
                className=" border-gray-400 rounded-md border-2 w-full p-1 mt-1 mb-2"
                type="text"
                onChange={changeHandler}
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                id="firstName"
            />

            <label htmlFor="lastName">Last name</label>
            <input
                className=" border-gray-400 rounded-md border-2 w-full p-1 mt-1 mb-2"
                type="text"
                onChange={changeHandler}
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                id="lastName"
            />

            <label htmlFor="email">Email</label>
            <input
                className=" border-gray-400 rounded-md border-2 w-full p-1 mt-1 mb-2"
                type="text"
                onChange={changeHandler}
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                id="email"
            />

            <label htmlFor="country">Country</label>
            <select
                className=" border-gray-400 rounded-md border-2 w-full p-1 mt-1 mb-2"
                onChange={changeHandler}
                name="country"
                value={formData.country}
                id="country"
            >
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="United State">United State</option>
              <option value="Germany">Germany</option>
            </select>

            <label htmlFor="streetAddress">Street Address</label>
            <input
                className=" border-gray-400 rounded-md border-2 w-full p-1 mt-1 mb-2"
                type="text"
                onChange={changeHandler}
                name="streetAddress"
                placeholder="Address"
                value={formData.streetAddress}
                id="streetAddress"
            />

            <label htmlFor="city">City</label>
            <input
                className=" border-gray-400 rounded-md border-2 w-full p-1 mt-1 mb-2"
                type="text"
                onChange={changeHandler}
                name="city"
                placeholder="City"
                value={formData.city}
                id="city"
            />

            <label htmlFor="state">State / Province</label>
            <input
                className=" border-gray-400 rounded-md border-2 w-full p-1 mt-1 mb-2"
                type="text"
                onChange={changeHandler}
                name="state"
                placeholder="State"
                value={formData.state}
                id="state"
            />

            <label htmlFor="postalCode">ZIP / Postal Code</label>
            <input
                className=" border-gray-400 rounded-md border-2 w-full p-1 mt-1 mb-2"
                type="text"
                onChange={changeHandler}
                name="postalCode"
                placeholder="postalCode"
                value={formData.postalCode}
                id="postalCode"
            />
            <fieldset className="border-2 px-2 py-1">
              <legend className="font-bold px-1">By Email</legend>
              <div className="flex items-baseline space-x-3">
                <input
                    type="checkbox"
                    onChange={changeHandler}
                    name="comments"
                    placeholder="comments"
                    value={formData.comments}
                    id="comments"
                />
                <div>
                  <label htmlFor="comments" className="font-bold">Comments</label>
                  <p className="text-gray-400">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>

              <div className="flex items-baseline space-x-3">
                <input
                    type="checkbox"
                    onChange={changeHandler}
                    name="candidates"
                    placeholder="candidates"
                    value={formData.candidates}
                    id="candidates"
                />
                <div>
                  <label htmlFor="candidates" className="font-bold">Candidates</label>
                  <p className="text-gray-400">Get notified when a candidate applies for a job.</p>
                </div>
              </div>

              <div className="flex items-baseline space-x-3">
                <input
                    type="checkbox"
                    onChange={changeHandler}
                    name="offers"
                    placeholder="offers"
                    value={formData.offers}
                    id="offers"
                />
                <div>
                  <label htmlFor="offers" className="font-bold">Offers</label>
                  <p className="text-gray-400">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-3">
              <legend className="font-bold px-1">Push Notification</legend>
              <p className="text-gray-400 pl-1">
                These are delivered via SMS to your mobile phone.
              </p>

              <div className="px-2 mb-2">
                <input
                      type="radio"
                      onChange={changeHandler}
                      name="pushNotification"
                      value="everything"
                      id="everything"
                  />
                <label htmlFor="everything"     className="font-bold px-3">Everything
                </label>

              </div>

              <div className="px-2 mb-2">
                <input
                      type="radio"
                      onChange={changeHandler}
                      name="pushNotification"
                      value="same as email"
                      id="same as email"
                  />
                <label htmlFor="same as email"     className="font-bold px-3">Same as email
                </label>

              </div>

              <div className="px-2 mb-2">
                <input
                      type="radio"
                      onChange={changeHandler}
                      name="pushNotification"
                      value="no push notification"
                      id="no push notification"
                  />
                <label htmlFor="no push notification"     className="font-bold px-3">No push notification
                </label>

              </div>
            </fieldset>

            <button className="bg-blue-500 text-white
            font-bold rounded px-4 py-2">Save</button>
        </form>
    </div>
  )
}

export default App;
