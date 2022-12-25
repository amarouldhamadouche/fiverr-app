import React from "react";

function Credit() {
  return (
    <div>
      <div className=" container mt-4 bg-gray-50 px-4 pt-8 lg:mt-0">
        <p className="text-xl font-medium big-title">Summary</p>
        <div className="sumarry-line">
          <h4 className="summary-item">lesson 2hrs</h4>
          <div className="summary-price">$199</div>
        </div>
        <div className="sumarry-line">
          <h4 className="summary-item">Booking fee</h4>
          <div className="summary-price">$1</div>
        </div>
        <div className="sumarry-line total">
          <h4 className="summary-item">Total</h4>
          <div className="summary-price ">$200</div>
        </div>
        <h1 className="text-xl font-medium big-title">Card Details</h1>

        <div className="">
          {/* <label for="email" className="mt-4 mb-2 block text-sm font-medium">
            Email
          </label> */}
          {/* <div className="relative">
            <input
              type="text"
              id="email"
              name="email"
              className="w-full rounded-md   px-4 py-3 pl-11 text-sm shadow-sm outline-none "
              placeholder="your.email@gmail.com"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div> */}

          {/* <div className="flex">
            <div className="relative w-7/12 flex-shrink-0">
              <input
                type="text"
                id="card-no"
                name="card-no"
                className="w-full rounded-md   px-2 py-3 pl-11 text-sm shadow-sm outline-none "
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              name="credit-expiry"
              className="w-full rounded-md   px-2 py-3 text-sm shadow-sm outline-none "
              placeholder="MM/YY"
            />
            <input
              type="text"
              name="credit-cvc"
              className="w-1/6 flex-shrink-0 rounded-md   px-2 py-3 text-sm shadow-sm outline-none "
              placeholder="CVC"
            />
          </div> */}
          <div className="card-number">
            <label htmlFor="card_number">Card number</label>
            <input
              type="text"
              id="card_number"
              className="input-card"
              placeholder="812154554545f"
              value="812154554545f"
            />
          </div>

          <div className="card-number-split">
            <div className="card-number">
              <label htmlFor="card_number-y">Card number</label>
              <input
                type="text"
                id="card_number-y"
                className="input-card"
                placeholder="MM/YY"
              />
            </div>
            <div className="card-number">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                className="input-card"
                placeholder="812154554545f"
                value="XXX"
              />
            </div>
          </div>

          <label
            for="card-holder"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Name on card
          </label>
          <div className="relative">
            <input
              type="text"
              id="card-holder"
              name="card-holder"
              className="w-full rounded-md   px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none "
              placeholder="Your full name here"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credit;
