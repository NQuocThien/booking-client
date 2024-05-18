import { GeneralInfor } from "@/graphql/webbooking-service.generated";
import { footerUs, headerUs } from "@/locales/en/Layout";
import { footerVi } from "@/locales/vi/Layout";
import { RootState } from "@/redux/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Footer({ data }: { data: GeneralInfor | undefined }) {
  const [lan, setLan] = useState(footerVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  useEffect(() => {
    if (currentLan.code === "us") {
      setLan(footerUs);
    } else setLan(footerVi);
  }, [currentLan]);
  return (
    <footer id="footer" className="">
      <div className="container footer-top ">
        <div className="">
          <div className="row">
            <div className="col-lg-6 col-md-6 footer-contact">
              <h5 className="text-primary fw-bold">{data?.company}</h5>
              <div className="logo">
                <img
                  className="me-auto img-fluid"
                  src={`${data?.logoFooter.url || "/logos/Logon.png"}`}
                  alt="logo"
                />
              </div>
              <p className="mt-2">
                <strong>
                  {lan.texAddress}: {data?.address}
                </strong>
                <br />
                <strong>{lan.texPhone}:</strong> {data?.hotline}
                <br />
                <strong>{lan.texEmail}:</strong> {data?.email}
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>{lan.texNavFacility}</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">{lan.texNavPubFacility}</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">{lan.texNavPriFacility}</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">{lan.texNavClinic}</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">{lan.texNavVaccinationCenter}</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>{lan.texNavSrv}</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">{lan.texNavSrvDoctor}</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">{lan.texNavSrvSpecialty}</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">{lan.texNavSrvPackage}</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">{lan.texNavSrvVaccination}</a>
                </li>
              </ul>
            </div>

            <div className="social-links col-lg-2 col-md-6">
              <h4>Kênh truyền thông</h4>
              <div className="row g-2">
                <div className="col col-4">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
                <div className="col col-4">
                  <a href="#" className="twitter">
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
                <div className="col col-4">
                  <a href="#" className="twitter">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
                <div className="col col-4">
                  <a href="#" className="twitter">
                    <i className="bi bi-skype"></i>
                  </a>
                </div>
                <div className="col col-4">
                  <a href="#" className="twitter">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start">
              <div className="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>Medilab</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className="credits">
                Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
