import * as React from 'react';
import './style.css';


class InfoPage extends React.Component<{}, {}> {
  content = () => {
    return (
      <section className="details">
        <h2 className="details-heading">Your details</h2>

        <p className="details-subtext">We'd love to find out more about you. It'll help us make sure our website and apps tick
          the right boxes.</p>
        <div className="rui-message rui-error hide">
          <span>Please enter only numeric values</span>
        </div>
        <fieldset className="name-fields rui-clearfix">
          <h4 className="details-subheading">Your name</h4>
          <input placeholder="First name" type="text" id="firstName" className="rui-input field-container preference-update" value="" />
          <input placeholder="Last name" type="text" id="lastName" className="rui-input field-container preference-update" value="" />
        </fieldset>
        <fieldset className="birthYear-fields">
          <h4 className="details-subheading">Year of birth</h4>
          <div className="birthYear field-container">
            <select className="rui-input rui-select preference-update rui-select-rendered" name="birthYear">
              <option selected={true} value="">Select</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
            </select>
            <div className="rui-select-wrapper">
              <div id="" className="rui-select-link rui-input rui-select preference-update">
                <span>Select</span>
                <input type="text" />
                <i className="rui-icon rui-icon-arrow-down" />
              </div>
              <ul className="rui-select-menu">
                <li className="rui-select-list rui-selected" data-value="" data-label="Select">Select</li>
                <li className="rui-select-list" data-value="2014" data-label="2014">2014</li>
                <li className="rui-select-list" data-value="2013" data-label="2013">2013</li>
                <li className="rui-select-list" data-value="2012" data-label="2012">2012</li>
              </ul>
            </div>
          </div>
          <div className="field-container ratherNotSay">
            <input id="cbAge" type="checkbox" name="cbAge" />
            <label>I’d rather not say</label>
          </div>
        </fieldset>
        <fieldset className="gender-fields">
          <h4 className="details-subheading">Gender</h4>
          <div className="field-container">
            <input id="rbFemale" type="radio" value="FEMALE" className="preference-update" />
            <label>Female</label>
          </div>
          <div className="field-container">
            <input id="rbMale" type="radio" value="MALE" className="preference-update" />
            <label>Male</label>
          </div>
        </fieldset>
        <div className="rui-clearboth"></div>
        <fieldset className="address-fields">

          <div>
            <h4 className="details-subheading address-heading">Your street address</h4>
            <div className="rui-message rui-error address-warning hide">
              You need to complete all address details before saving.
        </div>
            <div className="rui-message rui-error invalid-address hide">
              We can't find that address, you might want to double check your details.
        </div>
            <fieldset className="rui-field-group">
              <div className="field-container address-container">
                <input placeholder="Address" type="text" id="address" className="propertyId rui-input name rui-location-box rui-auto-complete-input" value="" />
              </div>

              <div className="field-container property-type-container">
                <select className="rui-input rui-select propertyType rui-select-rendered">
                  <option value="default" selected={true} disabled={true}>Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                </select>
                <div className="rui-select-wrapper">
                  <div id="" className="rui-select-link rui-input rui-select propertyType">
                    <span>Property Type</span>
                    <input type="text" />
                    <i className="rui-icon rui-icon-arrow-down" />
                  </div>
                  <ul className="rui-select-menu">
                    <li className="rui-select-list rui-selected rui-disabled" data-value="default">Property Type</li>
                    <li className="rui-select-list" data-value="house">House</li>
                    <li className="rui-select-list" data-value="apartment" data-label="Apartment">Apartment</li>
                  </ul>
                </div>
              </div>
              <div className="field-container bedrooms-container">
                <select className="rui-input rui-select bedrooms rui-select-rendered">
                  <option value="default" selected={true} disabled={true}>Beds</option>
                  <option value="0">Studio</option>
                  <option value="1">1 Bed</option>
                  <option value="2">2 Beds</option>
                </select>
                <div className="rui-select-wrapper">
                  <div id="" className="rui-select-link rui-input rui-select bedrooms">
                    <span>Beds</span>
                    <input type="text" />
                    <i className="rui-icon rui-icon-arrow-down" />
                  </div>
                  <ul className="rui-select-menu">
                    <li className="rui-select-list rui-selected rui-disabled" data-value="default">Beds</li>
                    <li className="rui-select-list" data-value="0">Studio</li>
                    <li className="rui-select-list" data-value="1" data-label="1 Bed">1 Bed</li>
                    <li className="rui-select-list" data-value="2" data-label="2 Beds">2 Beds</li>
                  </ul>
                </div>
              </div>
              <div className="field-container relationship-container">
                <select className="rui-input rui-select relationshipType rui-select-rendered">
                  <option value="default" selected={true} disabled={true}>Own or Rent</option>
                  <option value="owner-occupier">Owner</option>
                  <option value="investor">Investor</option>
                </select>
                <div className="rui-select-wrapper">
                  <div id="" className="rui-select-link rui-input rui-select relationshipType">
                    <span>Own or Rent</span>
                    <input type="text" />
                    <i className="rui-icon rui-icon-arrow-down"></i>
                  </div>
                  <ul className="rui-select-menu">
                    <li className="rui-select-list rui-selected rui-disabled" data-value="default" >Own or Rent</li>
                    <li className="rui-select-list" data-value="owner-occupier">Owner</li>
                    <li className="rui-select-list" data-value="investor">Investor</li>
                  </ul>
                </div>
              </div>
            </fieldset>
          </div></fieldset>
        <fieldset className="household-fields">
          <section className="rui-clearfix">
            <div>
              <h4 className="details-subheading">What's your combined household income?</h4>
              <div className="income field-container">
                <select className="rui-input rui-select preference-update rui-select-rendered">
                  <option selected={true} value="">Please select</option>
                  <option value="UNDER_15K">Under $15,000</option>
                  <option value="15_TO_30K">$15,000 - $29,999</option>
                  <option value="30_TO_50K">$30,000 - $49,999</option>
                </select>
                <div className="rui-select-wrapper">
                  <div id="" className="rui-select-link rui-input rui-select preference-update">
                    <span>Please select</span>
                    <input type="text" />
                    <i className="rui-icon rui-icon-arrow-down" />
                  </div>
                  <ul className="rui-select-menu">
                    <li className="rui-select-list rui-selected" data-value="">Please select</li>
                    <li className="rui-select-list" data-value="UNDER_15K" data-label="Under $15,000">Under $15,000</li>
                    <li className="rui-select-list" data-value="15_TO_30K" data-label="$15,000 - $29,999">$15,000 - $29,999</li>
                    <li className="rui-select-list" data-value="30_TO_50K" data-label="$30,000 - $49,999">$30,000 - $49,999</li>
                  </ul></div>
              </div>
            </div>
          </section>
          <section className="rui-clearfix">
            <div>
              <h4 className="details-subheading">Which scenario describes your household?</h4>
              <div className="householdStatus field-container">
                <select className="rui-input rui-select preference-update rui-select-rendered">
                  <option selected={true} value="">Please select</option>
                  <option value="YOUNG_SINGLES">Young Singles</option>
                  <option value="YOUNG_COUPLES">Young Couples</option>
                </select><div className="rui-select-wrapper">
                  <div id="" className="rui-select-link rui-input rui-select preference-update">
                    <span>Please select</span>
                    <input type="text" />
                    <i className="rui-icon rui-icon-arrow-down" />
                  </div>
                  <ul className="rui-select-menu">
                    <li className="rui-select-list rui-selected" data-value="">Please select</li>
                    <li className="rui-select-list" data-value="YOUNG_SINGLES">Young Singles</li>
                    <li className="rui-select-list" data-value="YOUNG_COUPLES" data-label="Young Couples">Young Couples</li>
                  </ul></div>
              </div>
            </div>
          </section>
        </fieldset>
        <div className="profile-saved rui-message rui-success rui-dismissible hide">
          <ul>
            <li>Your account details have been saved</li>
          </ul>
        </div>
        <div className="rui-message rui-error saving-error rui-dismissible hide">
          <strong>Error</strong>
          <ul>
            <li>There was an error saving. Please try again</li>
          </ul>
        </div>
        <div className="button-holder">
          <button className="rui-button-brand save-profile" type="submit">Save profile</button>
        </div>
        <div className="skip rui-clearfix">
          <div className="left-line"></div>
          <div className="or">or</div>
          <div className="right-line"></div>
        </div>
        <div className="complete-later">
          <a href="/goback.ds">Complete my profile later</a>
        </div>

        <div className="privacy-policy rui-disclaimer">
          We will collect and use your personal information (which may include cookies we collect through your use of
          realestate.com.au and our other websites) to give you a personalised user experience (eg. recommending properties you may be interested in or
          receiving saved searches by email) and to promote the services of realestate.com.au and third parties.
          Our <a target="_blank" href="https://about.realestate.com.au/privacy/">Privacy Policy</a> further explains how we collect,
          use and disclose personal information and how to access, correct or complain about the handling of personal information.
      </div>

      </section>
    );
  }
  render() {
    return (
      <div className="infoPage">
        {this.content()}
      </div>
    );
  }
}

export default InfoPage;