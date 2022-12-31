import React, { useState } from "react";
import { useContext } from "react";
import StepperContext from "../../context/StipperContext";

function About() {
  const { userData, setUserData } = useContext(StepperContext);
  const [radioValue, setRadioValue] = useState("yes");
  const [radioGiftValue, setRadioGiftValue] = useState("no");

  const handleChangeDate = (type) => {
    setUserData({ ...userData,About:{ ...userData.About,date:type}});
  };
  const handleChangeFirstName = (type) => {
    setUserData({ ...userData,About:{...userData.About,first_name:type}});
  };
  const handleChangeSurname = (type) => {
    setUserData({ ...userData,About:{ ...userData.About,surname:type}});
  };
  const handleChangeM_number = (type) => {
    setUserData({ ...userData,About: {...userData.About,m_number:type}});
  };
  const handleChangeEmail = (type) => {
    setUserData({ ...userData,About:{ ...userData.About,email:type}});
  };
  const handleChangeBirthday = (type) => {
    setUserData({ ...userData,About:{ ...userData.About,birthday:type}});
  };
  const handleChangeAddress = (type) => {
    setUserData({ ...userData,About:{ ...userData.About,address:type}});
  };
  const handleChangeBillingAddress = (type) => {
    setUserData({ ...userData,About:{ ...userData.About,billingAddress:type}});
  };
  return (
    <div>
      <div className=" flex-col flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-xl mt-4">Tell us about you</h2>
            <p className=" mb-6">Please fill out all the fields.</p>

            <div className=" rounded  p-4 px-4 md:p-8 ">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 ">
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <p>Select date</p>
                      <div className="date-container">
                        <div className={`${userData?.About?.date === "Mr" ? 'bg-perprl text-white' : 'bg-VD text-Darkblue'} date`} onClick={()=>handleChangeDate("Mr")}>Mr.</div>
                        <div className={`${userData?.About?.date === "Miss" ? 'bg-perprl text-white' : 'bg-VD text-Darkblue'} date`} onClick={()=>handleChangeDate("Miss")}>Miss</div>
                        <div className={`${userData?.About?.date === "Mrs" ? 'bg-perprl text-white' : 'bg-VD text-Darkblue'} date`} onClick={()=>handleChangeDate("Mrs")}>Mrs</div>
                        <div className={`${userData?.About?.date === "Ms" ? 'bg-perprl text-white' : 'bg-VD text-Darkblue'} date`} onClick={()=>handleChangeDate("Ms")}>Ms</div>
                      </div>
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="first_name">Learner first name</label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="h-10  outline-none   mt-1 rounded px-4 w-full bg-VD"
                        value={userData?.About?.first_name}
                        onChange={(e)=>handleChangeFirstName(e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label for="surename">Learner surename </label>
                      <input
                        type="text"
                        name="surename"
                        id="surename"
                        className="h-10  outline-none   mt-1 rounded px-4 w-full bg-VD"
                        placeholder="Enter surename"
                        value={userData?.About?.surname}
                        onChange={(e)=>handleChangeSurname(e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label for="m_number">Learner mobile number </label>
                      <input
                        type="text"
                        name="m_number"
                        id="m_number"
                        className="h-10  outline-none   mt-1 rounded px-4 w-full bg-VD"
                        placeholder="Enter mobile number"
                        value={userData?.About?.m_number}
                        onChange={(e)=>handleChangeM_number(e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label for="email">Learner email address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10  outline-none   mt-1 rounded px-4 w-full bg-VD"
                        value={userData?.About?.email}
                        placeholder="Enter email"
                        onChange={(e)=>handleChangeEmail(e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label for="birth_day">Learner date of birth</label>
                      <input
                        type="text"
                        name="birth_day"
                        id="birth_day"
                        className="h-10  outline-none   mt-1 rounded px-4 w-full bg-VD"
                        placeholder="Enter date of birth (DD/MM/YYYY)"
                        value={userData?.About?.birthday}
                        onChange={(e)=>handleChangeBirthday(e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label for="adress">Learner pickup adress</label>
                      <input
                        type="text"
                        name="adress"
                        id="adress"
                        className="h-10  outline-none   mt-1 rounded px-4 w-full "
                        value={userData?.About?.address}
                        onChange={(e)=>handleChangeAddress(e.target.value)}
                        placeholder="Enter adress"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <p for="billing_adress">
                        Is your billing adress is same as pickup
                      </p>
                      <fieldset className="my_flex">
                        <div
                          className={
                            radioValue === "yes"
                              ? "radio_container active"
                              : "radio_container"
                          }
                        >
                          <input
                            onClick={(e) => {
                              setRadioValue(e.target.value);
                            }}
                            value="yes"
                            type="radio"
                            id="yes"
                            name="yes/no"
                            defaultChecked
                          />
                          <label htmlFor="yes">Yes</label>
                        </div>
                        <div
                          className={
                            radioValue === "no"
                              ? "radio_container active"
                              : "radio_container"
                          }
                        >
                          <input
                            onClick={(e) => {
                              setRadioValue(e.target.value);
                            }}
                            value="no"
                            type="radio"
                            id="no"
                            name="yes/no"
                          />
                          <label htmlFor="no">No</label>
                        </div>
                      </fieldset>
                    </div>

                    {radioValue === "no" && (
                      <div className="md:col-span-5">
                        <label for="billing_adress">
                          Learner billing adress
                        </label>
                        <input
                          type="text"
                          name="billing_adress"
                          id="billing_adress"
                          className="h-10  outline-none   mt-1 rounded px-4 w-full "
                          value={userData?.About?.billingAddress}
                          onChange={(e)=>handleChangeBillingAddress(e.target.value)}
                          placeholder="Enter billing adress"
                        />
                      </div>
                    )}

                    <div className="md:col-span-5">
                      <p for="billing_adress">Is this a gift</p>
                      <fieldset className="my_flex">
                        <div
                          className={
                            radioGiftValue === "yes"
                              ? "radio_container active"
                              : "radio_container"
                          }
                        >
                          <input
                            onClick={(e) => {
                              setRadioGiftValue(e.target.value);
                            }}
                            value="yes"
                            type="radio"
                            id="yes_gift"
                            name="gift"
                          />
                          <label htmlFor="yes_gift">Yes</label>
                        </div>
                        <div
                          className={
                            radioGiftValue === "no"
                              ? "radio_container active"
                              : "radio_container"
                          }
                        >
                          <input
                            onClick={(e) => {
                              setRadioGiftValue(e.target.value);
                            }}
                            value="no"
                            type="radio"
                            id="no_gift"
                            name="gift"
                            defaultChecked
                          />
                          <label htmlFor="no_gift">No</label>
                        </div>
                      </fieldset>
                    </div>

                    {/* <div className="md:col-span-2">
                      <label for="country">Country / region</label>
                      <div className="h-10  outline-none  bg-VD flex  -gray-200 rounded items-center mt-1">
                        <input
                          name="country"
                          id="country"
                          placeholder="Country"
                          className="px-4 appearance-none outline-none  w-full bg-VD"
                          value=""
                        />
                      </div>
                    </div> */}

                    {/* <div className="md:col-span-2">
                      <label for="state">State / province</label>
                      <div className="h-10  outline-none  bg-VD flex  -gray-200 rounded items-center mt-1">
                        <input
                          name="state"
                          id="state"
                          placeholder="State"
                          className="px-4 appearance-none outline-none  w-full bg-VD"
                          value=""
                        />
                      </div>
                    </div> */}

                    <div className="md:col-span-5">
                      <p>Can we contact you</p>
                      <div className="toggle-container">
                        <label htmlFor="email-contact">Email</label>
                        <input
                          type="checkbox"
                          name="contact"
                          className="contact-me"
                          id="email-contact"
                          defaultChecked
                        />
                      </div>
                      <div className="toggle-container">
                        <label htmlFor="sms-contact">SMS</label>
                        <input
                          type="checkbox"
                          name="contact"
                          className="contact-me"
                          id="sms-contact"
                          defaultChecked
                        />
                      </div>
                      <div className="toggle-container">
                        <label htmlFor="phone-contact">Phone</label>
                        <input
                          type="checkbox"
                          name="contact"
                          className="contact-me"
                          id="phone-contact"
                          defaultChecked
                        />
                      </div>
                      <div className="toggle-container">
                        <label htmlFor="post-contact">Post</label>
                        <input
                          type="checkbox"
                          name="contact"
                          className="contact-me"
                          id="post-contact"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-5">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          className="form-checkbox"
                        />
                        <label for="billing_same" className="ml-2">
                          I accept terms and Policy.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
