import React from "react";
import "./Earning.css";
import { MdOutlineAttachMoney } from "react-icons/md";

const Earning = () => {
  const countries = [
    {
      id: 1,
      country: "United States",
      coin: "$48",
    },
    {
      id: 2,
      country: "Bulgaria",
      coin: "$35",
    },
    {
      id: 3,
      country: "Dominica",
      coin: "$25",
    },
    {
      id: 4,
      country: "Italy",
      coin: "$18",
    },
    {
      id: 5,
      country: "Korea, Republic of",
      coin: "$18",
    },
    {
      id: 6,
      country: "Malaysia",
      coin: "$10",
    },
    {
      id: 7,
      country: "Netherlands",
      coin: "$8",
    },
    {
      id: 8,
      country: "Thailand",
      coin: "$5",
    },
  ];

  const itemSales = [
    {
      id: 1,
      date: "1,Wednesday",
      item: 3,
      earning: "$120.50",
    },
    {
      id: 2,
      date: "2,Thursday",
      item: 2,
      earning: "$84.00",
    },
    {
      id: 3,
      date: "4,Saturday",
      item: 4,
      earning: "$150.50",
    },
    {
      id: 4,
      date: "5,Sunday",
      item: 3,
      earning: "$102.24",
    },
    {
      id: 5,
      date: "6,Monday",
      item: 2,
      earning: "$80.50",
    },
    {
      id: 6,
      date: "7,Tuesday",
      item: 3,
      earning: "$70.50",
    },
    {
      id: 7,
      date: "8,Wednesday",
      item: 5,
      earning: "$130.00",
    },
    {
      id: 8,
      date: "9,Thursday",
      item: 3,
      earning: "$95.50",
    },
    {
      id: 9,
      date: "10,Friday",
      item: 4,
      earning: "$152.50",
    },
    {
      id: 10,
      date: "11,Saturday",
      item: 3,
      earning: "$100.40",
    },
    {
      id: 11,
      date: "12,Sunday",
      item: 2,
      earning: "$60.14",
    },
  ];

  return (
    <main className="earning">
      <div className="earning-wrapper">
        <div className="earning-title">
          <div className="earning-label">
            <div className="earning-icon">
              <MdOutlineAttachMoney className="earning-coin-icon" />
            </div>
            <h3 className="earning-earning">Earning</h3>
          </div>
        </div>

        <div className="earning-summary">
          <div className="earning-paragraph-background">
            <div className="earning-heading-1-wrapper">
              <div className="earning-heading-1">
                Sales earnings this month (April), after edututs+ fees, & before
                taxes:
              </div>
            </div>
            <div className="earning-heading-2-wrapper">
              <div className="earning-heading-2">$1146.78</div>
            </div>
          </div>
          <div className="earning-paragraph-background">
            <div className="earning-heading-1-wrapper">
              <div className="earning-heading-1">Your balance:</div>
            </div>
            <div className="earning-heading-2-wrapper">
              <div className="earning-heading-2">$1146.78</div>
            </div>
          </div>
          <div className="earning-paragraph-background">
            <div className="earning-heading-1-wrapper">
              <div className="earning-heading-1">
                Total value of your sales, before taxes:
              </div>
            </div>
            <div className="earning-heading-2-wrapper">
              <div className="earning-heading-2">$95895.54</div>
            </div>
          </div>
        </div>

        <div className="earning-table-wrapper">
          <div className="earning-table-1">
            <table className="earning-table-countries">
              <thead>
                <tr>
                  <th className="earning-table-top-countries">
                    Your Top Countries
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country) => (
                  <tr key={country.id}>
                    <td>{country.country}</td>
                    <td className="earning-table-coin">{country.coin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="earning-table-2">
            <div className="earning-time-sale">
              <div className="earning-item-sale">
                <select name="sale" id="sale">
                  <option value="" hidden>
                    Item Sales
                  </option>
                  <option value="total">Total Sales</option>
                  <option value="2020">2020</option>
                </select>
              </div>
              <div className="earning-items">
                <a href="#"> All Time</a>
                <div className="earning-symbol">/</div>
                <a href="#">2020</a>
                <div className="earning-symbol">/</div>
                <div className="earning-month">April</div>
              </div>
            </div>

            <div className="earning-table-data">
                <table className="earning-table-items">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Item Sales Counts</th>
                            <th>Earning</th>
                        </tr>
                    </thead>
                    <tbody>
                    {itemSales.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.item}</td>
                            <td>{item.earning}</td>
                        </tr>
                    ))}
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>34</td>
                            <td>$1146.78</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Earning;
