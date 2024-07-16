import React, { useEffect } from "react";
import "./Earning.css";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchEarningTableRequest } from "../../redux/reduxActions/earningActions/EarningTableAction";
import { fetchEarningTopCountryRequest } from "../../redux/reduxActions/earningActions/EarningTopCountryAction";

const Earning = () => {
  const dispatch = useDispatch();
  const { itemSales } = useSelector((state) => state.earning_table);
  const { topCountries } = useSelector((state) => state.earning_top_country);

  useEffect(() => {
    dispatch(fetchEarningTableRequest());
    dispatch(fetchEarningTopCountryRequest());
  }, [dispatch]);

  //Calculate the total earnings
  const totalEarning = itemSales.reduce((acc, itemSale) => {
    return acc + itemSale.earning;
  }, 0);

  const formattedTotalEarning = totalEarning.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

  //Calculate thr total item
  const totalItem = itemSales.reduce((acc, itemSale) => {
    return acc + itemSale.numberOfItems;
  }, 0);

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
              <div className="earning-heading-2">$1,146.78</div>
            </div>
          </div>
          <div className="earning-paragraph-background">
            <div className="earning-heading-1-wrapper">
              <div className="earning-heading-1">Your balance:</div>
            </div>
            <div className="earning-heading-2-wrapper">
              <div className="earning-heading-2">$1,146.78</div>
            </div>
          </div>
          <div className="earning-paragraph-background">
            <div className="earning-heading-1-wrapper">
              <div className="earning-heading-1">
                Total value of your sales, before taxes:
              </div>
            </div>
            <div className="earning-heading-2-wrapper">
              <div className="earning-heading-2">$95,895.54</div>
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
                {topCountries.map((country) => (
                  <tr key={country.id}>
                    <td>{country.country}</td>
                    <td className="earning-table-coin">${country.price}</td>
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
                  {itemSales.map((item) => (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.numberOfItems}</td>
                      <td>{item.formattedEarning}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td>{totalItem}</td>
                    <td>{formattedTotalEarning}</td>
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
