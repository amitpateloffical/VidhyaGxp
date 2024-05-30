import BreadCrumb from "../components/BreadCrumb"
import { useEffect, useRef, useState, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css"

function Contact() {
  const listRefs = useRef([]);
  const [contactValue, setContactValue] = useState("")
  useEffect(() => {
    AOS.init({ duration: 1400 });
    // AOS.refresh();
  }, []);

  useEffect(() => {
    if (listRefs.current) {
      ""
    }
    const observers = [];

    listRefs.current.forEach((listRef) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItems =
              listRef.current.querySelectorAll(".list-group-item");
            listItems.forEach((item) => {
              item.classList.add("list-item-animation");
            });
            observer.unobserve(entry.target);
          }
        });
      });

      if (listRef.current) {
        observer.observe(listRef.current);
      }
      observers.push(observer);
    });
  }, []);

  
  const countryCodes = [
    { name: "Afghanistan", code: "+93" },
    { name: "Åland Islands", code: "+358" },
    { name: "Albania", code: "+355" },
    { name: "Algeria", code: "+213" },
    { name: "American Samoa", code: "+1-684" },
    { name: "Andorra", code: "+376" },
    { name: "Angola", code: "+244" },
    { name: "Anguilla", code: "+1-264" },
    { name: "Antarctica", code: "+672" },
    { name: "Antigua and Barbuda", code: "+1-268" },
    { name: "Argentina", code: "+54" },
    { name: "Armenia", code: "+374" },
    { name: "Aruba", code: "+297" },
    { name: "Australia", code: "+61" },
    { name: "Austria", code: "+43" },
    { name: "Azerbaijan", code: "+994" },
    { name: "Bahamas", code: "+1-242" },
    { name: "Bahrain", code: "+973" },
    { name: "Bangladesh", code: "+880" },
    { name: "Barbados", code: "+1-246" },
    { name: "Belarus", code: "+375" },
    { name: "Belgium", code: "+32" },
    { name: "Belize", code: "+501" },
    { name: "Benin", code: "+229" },
    { name: "Bermuda", code: "+1-441" },
    { name: "Bhutan", code: "+975" },
    { name: "Bolivia", code: "+591" },
    { name: "Bosnia and Herzegovina", code: "+387" },
    { name: "Botswana", code: "+267" },
    { name: "Brazil", code: "+55" },
    { name: "British Indian Ocean Territory", code: "+246" },
    { name: "Brunei Darussalam", code: "+673" },
    { name: "Bulgaria", code: "+359" },
    { name: "Burkina Faso", code: "+226" },
    { name: "Burundi", code: "+257" },
    { name: "Cabo Verde", code: "+238" },
    { name: "Cambodia", code: "+855" },
    { name: "Cameroon", code: "+237" },
    { name: "Canada", code: "+1" },
    { name: "Cayman Islands", code: "+1-345" },
    { name: "Central African Republic", code: "+236" },
    { name: "Chad", code: "+235" },
    { name: "Chile", code: "+56" },
    { name: "China", code: "+86" },
    { name: "Christmas Island", code: "+61" },
    { name: "Cocos (Keeling) Islands", code: "+61" },
    { name: "Colombia", code: "+57" },
    { name: "Comoros", code: "+269" },
    { name: "Congo", code: "+242" },
    { name: "Congo (Democratic Republic of the)", code: "+243" },
    { name: "Cook Islands", code: "+682" },
    { name: "Costa Rica", code: "+506" },
    { name: "Côte d'Ivoire", code: "+225" },
    { name: "Croatia", code: "+385" },
    { name: "Cuba", code: "+53" },
    { name: "Curaçao", code: "+599" },
    { name: "Cyprus", code: "+357" },
    { name: "Czech Republic", code: "+420" },
    { name: "Denmark", code: "+45" },
    { name: "Djibouti", code: "+253" },
    { name: "Dominica", code: "+1-767" },
    { name: "Dominican Republic", code: "+1-809" },
    { name: "Ecuador", code: "+593" },
    { name: "Egypt", code: "+20" },
    { name: "El Salvador", code: "+503" },
    { name: "Equatorial Guinea", code: "+240" },
    { name: "Eritrea", code: "+291" },
    { name: "Estonia", code: "+372" },
    { name: "Ethiopia", code: "+251" },
    { name: "Falkland Islands (Malvinas)", code: "+500" },
    { name: "Faroe Islands", code: "+298" },
    { name: "Fiji", code: "+679" },
    { name: "Finland", code: "+358" },
    { name: "France", code: "+33" },
    { name: "French Guiana", code: "+594" },
    { name: "French Polynesia", code: "+689" },
    { name: "Gabon", code: "+241" },
    { name: "Gambia", code: "+220" },
    { name: "Georgia", code: "+995" },
    { name: "Germany", code: "+49" },
    { name: "Ghana", code: "+233" },
    { name: "Gibraltar", code: "+350" },
    { name: "Greece", code: "+30" },
    { name: "Greenland", code: "+299" },
    { name: "Grenada", code: "+1-473" },
    { name: "Guadeloupe", code: "+590" },
    { name: "Guam", code: "+1-671" },
    { name: "Guatemala", code: "+502" },
    { name: "Guernsey", code: "+44-1481" },
    { name: "Guinea", code: "+224" },
    { name: "Guinea-Bissau", code: "+245" },
    { name: "Guyana", code: "+592" },
    { name: "Haiti", code: "+509" },
    { name: "Heard Island and McDonald Islands", code: "+672" },
    { name: "Holy See", code: "+379" },
    { name: "Honduras", code: "+504" },
    { name: "Hong Kong", code: "+852" },
    { name: "Hungary", code: "+36" },
    { name: "Iceland", code: "+354" },
    { name: "India", code: "+91" },
    { name: "Indonesia", code: "+62" },
    { name: "Iran (Islamic Republic of)", code: "+98" },
    { name: "Iraq", code: "+964" },
    { name: "Ireland", code: "+353" },
    { name: "Isle of Man", code: "+44-1624" },
    { name: "Israel", code: "+972" },
    { name: "Italy", code: "+39" },
    { name: "Jamaica", code: "+1-876" },
    { name: "Japan", code: "+81" },
    { name: "Jersey", code: "+44-1534" },
    { name: "Jordan", code: "+962" },
    { name: "Kazakhstan", code: "+7" },
    { name: "Kenya", code: "+254" },
    { name: "Kiribati", code: "+686" },
    { name: "Korea (Democratic People's Republic of)", code: "+850" },
    { name: "Korea (Republic of)", code: "+82" },
    { name: "Kuwait", code: "+965" },
    { name: "Kyrgyzstan", code: "+996" },
    { name: "Lao People's Democratic Republic", code: "+856" },
    { name: "Latvia", code: "+371" },
    { name: "Lebanon", code: "+961" },
    { name: "Lesotho", code: "+266" },
    { name: "Liberia", code: "+231" },
    { name: "Libya", code: "+218" },
    { name: "Liechtenstein", code: "+423" },
    { name: "Lithuania", code: "+370" },
    { name: "Luxembourg", code: "+352" },
    { name: "Macao", code: "+853" },
    { name: "Macedonia (the former Yugoslav Republic of)", code: "+389" },
    { name: "Madagascar", code: "+261" },
    { name: "Malawi", code: "+265" },
    { name: "Malaysia", code: "+60" },
    { name: "Maldives", code: "+960" },
    { name: "Mali", code: "+223" },
    { name: "Malta", code: "+356" },
    { name: "Marshall Islands", code: "+692" },
    { name: "Martinique", code: "+596" },
    { name: "Mauritania", code: "+222" },
    { name: "Mauritius", code: "+230" },
    { name: "Mayotte", code: "+262" },
    { name: "Mexico", code: "+52" },
    { name: "Micronesia (Federated States of)", code: "+691" },
    { name: "Moldova (Republic of)", code: "+373" },
    { name: "Monaco", code: "+377" },
    { name: "Mongolia", code: "+976" },
    { name: "Montenegro", code: "+382" },
    { name: "Montserrat", code: "+1-664" },
    { name: "Morocco", code: "+212" },
    { name: "Mozambique", code: "+258" },
    { name: "Myanmar", code: "+95" },
    { name: "Namibia", code: "+264" },
    { name: "Nauru", code: "+674" },
    { name: "Nepal", code: "+977" },
    { name: "Netherlands", code: "+31" },
    { name: "New Caledonia", code: "+687" },
    { name: "New Zealand", code: "+64" },
    { name: "Nicaragua", code: "+505" },
    { name: "Niger", code: "+227" },
    { name: "Nigeria", code: "+234" },
    { name: "Niue", code: "+683" },
    { name: "Norfolk Island", code: "+672" },
    { name: "Northern Mariana Islands", code: "+1-670" },
    { name: "Norway", code: "+47" },
    { name: "Oman", code: "+968" },
    { name: "Pakistan", code: "+92" },
    { name: "Palau", code: "+680" },
    { name: "Palestine, State of", code: "+970" },
    { name: "Panama", code: "+507" },
    { name: "Papua New Guinea", code: "+675" },
    { name: "Paraguay", code: "+595" },
    { name: "Peru", code: "+51" },
    { name: "Philippines", code: "+63" },
    { name: "Pitcairn", code: "+64" },
    { name: "Poland", code: "+48" },
    { name: "Portugal", code: "+351" },
    { name: "Puerto Rico", code: "+1-787" },
    { name: "Qatar", code: "+974" },
    { name: "Réunion", code: "+262" },
    { name: "Romania", code: "+40" },
    { name: "Russian Federation", code: "+7" },
    { name: "Rwanda", code: "+250" },
    { name: "Saint Barthélemy", code: "+590" },
    { name: "Saint Helena, Ascension and Tristan da Cunha", code: "+290" },
    { name: "Saint Kitts and Nevis", code: "+1-869" },
    { name: "Saint Lucia", code: "+1-758" },
    { name: "Saint Martin (French part)", code: "+590" },
    { name: "Saint Pierre and Miquelon", code: "+508" },
    { name: "Saint Vincent and the Grenadines", code: "+1-784" },
    { name: "Samoa", code: "+685" },
    { name: "San Marino", code: "+378" },
    { name: "Sao Tome and Principe", code: "+239" },
    { name: "Saudi Arabia", code: "+966" },
    { name: "Senegal", code: "+221" },
    { name: "Serbia", code: "+381" },
    { name: "Seychelles", code: "+248" },
    { name: "Sierra Leone", code: "+232" },
    { name: "Singapore", code: "+65" },
    { name: "Sint Maarten (Dutch part)", code: "+1-721" },
    { name: "Slovakia", code: "+421" },
    { name: "Slovenia", code: "+386" },
    { name: "Solomon Islands", code: "+677" },
    { name: "Somalia", code: "+252" },
    { name: "South Africa", code: "+27" },
    { name: "South Georgia and the South Sandwich Islands", code: "+500" },
    { name: "South Sudan", code: "+211" },
    { name: "Spain", code: "+34" },
    { name: "Sri Lanka", code: "+94" },
    { name: "Sudan", code: "+249" },
    { name: "Suriname", code: "+597" },
    { name: "Svalbard and Jan Mayen", code: "+47" },
    { name: "Swaziland", code: "+268" },
    { name: "Sweden", code: "+46" },
    { name: "Switzerland", code: "+41" },
    { name: "Syrian Arab Republic", code: "+963" },
    { name: "Taiwan", code: "+886" },
    { name: "Tajikistan", code: "+992" },
    { name: "Tanzania, United Republic of", code: "+255" },
    { name: "Thailand", code: "+66" },
    { name: "Timor-Leste", code: "+670" },
    { name: "Togo", code: "+228" },
    { name: "Tokelau", code: "+690" },
    { name: "Tonga", code: "+676" },
    { name: "Trinidad and Tobago", code: "+1-868" },
    { name: "Tunisia", code: "+216" },
    { name: "Turkey", code: "+90" },
    { name: "Turkmenistan", code: "+993" },
    { name: "Turks and Caicos Islands", code: "+1-649" },
    { name: "Tuvalu", code: "+688" },
    { name: "Uganda", code: "+256" },
    { name: "Ukraine", code: "+380" },
    { name: "United Arab Emirates", code: "+971" },
    { name: "United Kingdom of Great Britain and Northern Ireland", code: "+44" },
    { name: "United States of America", code: "+1" },
    { name: "Uruguay", code: "+598" },
    { name: "Uzbekistan", code: "+998" },
    { name: "Vanuatu", code: "+678" },
    { name: "Venezuela (Bolivarian Republic of)", code: "+58" },
    { name: "Viet Nam", code: "+84" },
    { name: "Wallis and Futuna", code: "+681" },
    { name: "Western Sahara", code: "+212" },
    { name: "Yemen", code: "+967" },
    { name: "Zambia", code: "+260" },
    { name: "Zimbabwe", code: "+263" }
  ];
  
  // Function to handle changes in the contact value input
  const handleContactChange = (e) => {
    setContactValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Submitted:", contactValue);
  };
  return (
    <>

      <BreadCrumb page="Contact Us" />

      {/* <!-- Contact Start --> */}
      <div className="container-fluid section2  py-5">
        <div className="container row-service">
          <div className="row g-5 align-items-center d-flex row-xm">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.2s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/phone.jpeg" />
              </div>
            </div>
            <div className="container-fluid py-5 col-lg-7">
              <div className="container py-5" data-aos="fade-left">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ 'max-width': '500px' }}>
                  <h1 className="mb-4" data-aos="fade-left">If You Have Any Query, Please Contact Us</h1>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-7 row-service">
                    <div className="wow fadeIn" data-wow-delay="0.3s">
                      <form>
                        <div className="row g-3 row-contact">
                          <div className="col-md-6">
                            <input type="text" className="form-control" id="contact-form-border" placeholder="Your Name" />
                          </div>
                          <div className="col-md-6">
                            <input type="email" id="contact-form-border" className="form-control" placeholder="Your Email" />
                          </div>
                          <div className="col-12">
        {/* Combined Country Code and Mobile Number Input */}
        <div className="input-group">
          <select
            className="form-select"
            style={{ flex: "20%" }}
            value={contactValue.startsWith("+") ? contactValue : ""}
            onChange={handleContactChange}
          >
           
            {countryCodes.map((item)=>{
              return <option value={item.code}>{item.code} {item.name}</option>
            })}
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile Number"
            style={{ flex: "80%" }}
            value={contactValue.startsWith("+") ? "" : contactValue}
            onChange={handleContactChange}
          />
        </div>
      </div>
                          <div className="col-12">
                            <input type="text" className="form-control" id="contact-form-border" placeholder="Subject" />
                          </div>
                          <div className="col-12">
                            <textarea className="form-control" placeholder="Leave a message here" id="contact-form-border" style={{ 'height': '100px' }}></textarea>
                          </div>
                          <div className="col-12">
                            <button id="btn-theme" className="btn btn-primary w-100 py-2" type="submit">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
