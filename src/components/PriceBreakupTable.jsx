import React from "react";
import info from "../assets/info2.svg";
import { PriceTableWrapper } from "../styles/PriceBreakupTable.Styles";
const PriceBreakupTable = () => {
  return (
    <>
      <PriceTableWrapper>
        <div className="table-container">
          <p className="price-breakup">
            PRICE BREAKUP <span>Less</span>
          </p>
          <table>
            <thead>
              <tr>
                <th> COMPONENT </th>
                <th> RATE </th>
                <th> APPROX. WEIGHT </th>
                <th> DISCOUNT </th>
                <th> VALUE </th>
              </tr>
            </thead>

            <p className="gold">Gold</p>
            <tbody>
              <tr>
                <td>14 KT Yellow Gold</td>
                <td>₹3,072/g</td>
                <td>
                  <section className="approx-weight">
                    <span>2.960g</span>
                    <span className="info-img">
                      <img src={info} alt="" />
                    </span>
                  </section>
                </td>
                <td></td>
                <td>₹9,093</td>
              </tr>
              <tr>
                <td>
                  <b>Total Gold Value</b>
                </td>
                <td>-</td>
                <td></td>
                <td></td>
                <td>
                  <b>₹9,093</b>
                </td>
              </tr>
            </tbody>
            <p className="diamond">Diamond</p>
            <tbody>
              <tr>
                <td>IJ-SI Round-4 Nos.</td>
                <td>-</td>
                <td>
                  <section className="approx-weight">
                    <span>0.206ct </span>
                    <span className="info-img">
                      <img src={info} alt="" />
                    </span>
                  </section>
                </td>
                <td>10%</td>
                <td>₹18,355</td>
              </tr>
              <tr>
                <td>Solitaire IJ-SI Round - Nos</td>
                <td>-</td>
                <td>
                  <section className="approx-weight">
                    <span>0.206ct </span>
                    <span className="info-img">
                      <img src={info} alt="" />
                    </span>
                  </section>
                </td>
                <td>10%</td>
                <td>₹18,355</td>
              </tr>
              <tr>
                <td>Emerald Stone 1 Nos</td>
                <td>-</td>
                <td>
                  <section className="approx-weight">
                    <span>0.206ct </span>
                    <span className="info-img">
                      <img src={info} alt="" />
                    </span>
                  </section>
                </td>
                <td>10%</td>
                <td>₹18,355</td>
              </tr>
              <tr>
                <td>
                  <b>Total Diamond Value</b>
                </td>
                <td>-</td>
                <td></td>
                <td></td>
                <td>
                  <b>₹18,355</b>
                </td>
              </tr>
              <tr>
                <td>Making Charges</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>₹4,144</td>
              </tr>
              <br />
              <br />
              <tr className="total-section">
                <td>Subtoatal</td>
                <td></td>
                <td></td>
                <td></td>
                <td>₹33,631</td>
              </tr>
              <tr className="total-section">
                <td>Tax</td>
                <td></td>
                <td></td>
                <td></td>
                <td>₹1,009</td>
              </tr>
              <tr className="total-section">
                <td>
                  <b>Grand Total</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td className="grand-total">
                  <b>₹34,640</b>
                  <br />
                  <b>(MRP Incl. of all taxes)</b>
                </td>
              </tr>
              {/* </section> */}
            </tbody>
          </table>
          <div className="certified">
            <span>100% Certified</span>
            <span>International Standard</span>
          </div>
        </div>
      </PriceTableWrapper>
    </>
  );
};

export default PriceBreakupTable;
