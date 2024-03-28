"use client";
import { GeneralInfor } from "@/graphql/webbooking-service.generated";
import LanguageSelector from "../subs/LanguageSelector";
import { RootState } from "@/redux/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseButton from "react-bootstrap/CloseButton";
import { Language } from "@/assets/contains/item-interface";
import { setLanguage } from "@/redux/store/client";
import { headerVi } from "@/locales/vi/Layout";
import { headerUs } from "@/locales/en/Layout";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
interface IProps {
  data: GeneralInfor | undefined;
  onLogout: () => void;
}
function Header(props: IProps) {
  const { data, onLogout } = props;
  const isLogin = useSelector((state: RootState) => state.client.isLogin);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const inforUser = useSelector((state: RootState) => state.client.inforUser);
  const dispatch = useDispatch();
  const handleChangeLanguage = (lan: Language) => {
    // console.log("test event: ", lan);
    dispatch(setLanguage(lan));
  };
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lan, setLan] = useState(headerVi);

  useEffect(() => {
    if (currentLan.code === "us") {
      setLan(headerUs);
    } else setLan(headerVi);
  }, [currentLan]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div
        id="topbar"
        className={`d-flex align-items-center fixed-top ${
          (scrolled && "topbar-scrolled ") || ""
        }`}>
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>{" "}
            <a href={`mailto:${data?.email}`}>{data?.email}</a>
            <i className="bi bi-phone"></i> {data?.hotline}
            <i className="bi bi-heart-pulse"></i> {lan.texNavTopMess}
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <header
        id="header"
        className={`fixed-top ${(scrolled && "header-scrolled") || ""}`}>
        <div className="container d-flex align-items-center">
          <Link href="/" className="logo me-auto">
            <img
              src={`${
                (data?.logoHeader && data.logoHeader.url) || "/logos/Logo.png"
              } `}
              alt=""
              className="img-fluid"
            />
          </Link>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li className="dropdown">
                <Link className="nav-link active" href="/medical-facility">
                  <span>{lan.texNavFacility}</span>
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li className="nav-link">
                    <Link href="/medical-facility?type=public-hospital">
                      {lan.texNavPubFacility}
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link href="/medical-facility?type=private-hospital">
                      {lan.texNavPriFacility}
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link href="/medical-facility?type=clinic">
                      {lan.texNavClinic}
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link href="/medical-facility?type=vaccination">
                      {lan.texNavVaccinationCenter}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="nav-link">
                  <span>{lan.texNavSrv}</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#" className="nav-link">
                      {lan.texNavSrvSpecialty}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="nav-link">
                      {lan.texNavSrvDoctor}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      {lan.texNavSrvPackage}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      {lan.texNavSrvVaccination}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="nav-link">
                  <span>{lan.texNavBlog}</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  {lan.texNavAboutUs}
                </a>
              </li>
            </ul>
            <div onClick={toggleModal}>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </div>
          </nav>
          {(isLogin && (
            <Dropdown>
              <Dropdown.Toggle
                as="div"
                className="user-btn"
                id="dropdown-basic"
                variant="outline-success">
                <span className="d-none d-md-inline">
                  {(isLogin && inforUser?.customer?.fullname) ||
                    "Tài khoản" ||
                    lan.texNavLogin}
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <p className="ms-2 my-1 ">
                  <i className="text-primary me-1 bi bi-person-bounding-box"></i>
                  <span>{lan.texBtnUserHello}: </span>
                  <span className="text-primary">
                    "{inforUser?.username}"
                  </span>{" "}
                </p>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} href="/account">
                  <i className="text-primary me-1bi bi-person-check-fill"></i>
                  {lan.texBtnAccout}
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/account/customer">
                  <i className="text-primary me-1 bi bi-info-circle-fill"></i>
                  {lan.texBtnInfo}
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/account/profile">
                  <i className="text-primary me-1 bi bi-person-badge"></i>
                  {lan.texBtnProfile}
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/account/ticket">
                  <i className="text-primary me-1 bi bi-ticket-perforated"></i>
                  {lan.texBtnTiket}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <i className="text-primary me-1 bi bi-bell-fill"></i>
                  {lan.texBtnNotification}
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={"button"} onClick={() => onLogout()}>
                  <i className="text-danger me-1 bi bi-box-arrow-right"></i>
                  <strong className="text-danger">{lan.texBtnLogout}</strong>
                </Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
          )) || (
            <div className="dropdown">
              <Link href="/account/login" className="user-btn 56786 ">
                <span className="d-none d-md-inline">{lan.texNavLogin}</span>
              </Link>
            </div>
          )}
          <LanguageSelector
            currentLanguage={currentLan}
            handleSetLanguage={handleChangeLanguage}
          />
        </div>
      </header>
      <div
        style={{
          height: !scrolled ? "40px" : "0px",
          position: "sticky",
          transition: "height .8s ease",
        }}></div>
      {<Modal isOpen={isModalOpen} onClose={toggleModal} />}
    </div>
  );
}
export default Header;
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Nếu modal không được mở, không hiển thị

  return (
    <div className="modal-overlay">
      <div className="modal-main">
        <div className="text-end">
          <CloseButton className="" onClick={onClose} />
        </div>
        <div className="modal-content">
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul className="navbar-mobile">
              <li>
                <a className="nav-link active" href="#hero"></a>
              </li>
              <li className="dropdown">
                <a href="#" className="nav-link">
                  <span>Dịch vụ khám</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#" className="nav-link">
                      Khám chuyên khoa
                    </a>
                  </li>

                  <li>
                    <a href="#" className="nav-link">
                      Khám theo bác sỉ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      Gói khám sức khỏe
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      Tiêm chủng{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="nav-link">
                  <span>Cẩm nang</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Về chúng tôi
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
