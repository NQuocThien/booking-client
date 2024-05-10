"use client";
import {
  ETypeOfNotification,
  GeneralInfor,
  Notification,
  useGetAllNotificationByUserIdQuery,
  useNotifyCreatedSubscription,
  useSeenAllNotificationByUserIdMutation,
  useSeenNotificationByIdMutation,
} from "@/graphql/webbooking-service.generated";
import LanguageSelector from "../subs/LanguageSelector";
import { RootState } from "@/redux/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseButton from "react-bootstrap/CloseButton";
import { Language } from "@/assets/contains/item-interface";
import { setLanguage } from "@/redux/store/client";
import { headerVi } from "@/locales/vi/Layout";
import { headerUs } from "@/locales/en/Layout";
import { Button, Col, Dropdown } from "react-bootstrap";
import Link from "next/link";
import { ETypeOfServiceParameters } from "@/assets/contains/emun";
import { usePathname } from "next/navigation";
import ModalCpn from "../subs/Modal";
import { formatDateFull, handleNotification } from "@/utils/tools";
import { AiFillNotification, AiOutlineNotification } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { useRouter } from "next/navigation";
import { FaKey } from "react-icons/fa";
interface IProps {
  data: GeneralInfor | undefined;
  loginLoading: boolean;
  onLogout: () => void;
}
function Header(props: IProps) {
  const { data, onLogout, loginLoading } = props;
  const isLogin = useSelector((state: RootState) => state.client.isLogin);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const inforUser = useSelector((state: RootState) => state.client.inforUser);
  const dispatch = useDispatch();
  const handleChangeLanguage = (lan: Language) => {
    // console.log("test event: ", lan);
    dispatch(setLanguage(lan));
  };
  const router = useRouter();
  // =================================================================
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState({
    menu: false,
    notifacation: false,
  });
  const [lan, setLan] = useState(headerVi);
  const pathname = usePathname();
  const [path, setPath] = useState<string>("");
  const [notify, setNotify] = useState<Notification[]>([]);
  //================================================================
  const {
    data: dataNotify,
    loading: loadingNotify,
    error: errorNotify,
  } = useGetAllNotificationByUserIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: inforUser?.id || "",
    },
  });
  const [seenAll, { error: errorSeenAll }] =
    useSeenAllNotificationByUserIdMutation({
      fetchPolicy: "no-cache",
      variables: {
        userId: inforUser?.id || "",
      },
    });
  const [seen, { error: errorSeen }] = useSeenNotificationByIdMutation({
    fetchPolicy: "no-cache",
  });

  const { data: dataNotifyCreated, error: errorNotifyCreated } =
    useNotifyCreatedSubscription({
      variables: {
        userId: inforUser?.id || "",
      },
    });
  //================================================================
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
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
  useEffect(() => {
    if (dataNotify) {
      setNotify(dataNotify.getAllNotificationByUserId);
    }
  }, [dataNotify]);
  useEffect(() => {
    if (dataNotifyCreated) {
      setNotify((pre) => [dataNotifyCreated.notifyCreated, ...pre]);
      handleNotification();
    }
  }, [dataNotifyCreated]);
  // =================================================================
  const toggleModal = () => {
    setIsModalOpen((pre) => ({ ...pre, menu: !pre.menu }));
  };
  const handleSeenAll = async () => {
    await seenAll().then(() => {
      setNotify((pre) =>
        pre.map((item) => ({ ...item, status: ETypeOfNotification.Seen }))
      );
    });
  };
  const handleSeenById = async (id: string) => {
    await seen({
      variables: { id: id },
    }).then(() => {
      setNotify((pre) =>
        pre.map(
          (item) =>
            (item.id === id && { ...item, status: ETypeOfNotification.Seen }) ||
            item
        )
      );
    });
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
                <Link
                  className={`nav-link ${
                    path.search("/medical-facility") !== -1 ? "active" : ""
                  }`}
                  href="/medical-facility">
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
                <Link
                  href="/regis-services"
                  className={`nav-link ${
                    path.search("/regis-services") !== -1 ? "active" : ""
                  }`}>
                  <span>{lan.texNavSrv}</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link
                      href={`/regis-services?type=${ETypeOfServiceParameters.Specialty}`}
                      className="nav-link">
                      {lan.texNavSrvSpecialty}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/regis-services?type=${ETypeOfServiceParameters.Doctor}`}
                      className="nav-link">
                      {lan.texNavSrvDoctor}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/regis-services?type=${ETypeOfServiceParameters.Package}`}
                      className="nav-link">
                      {lan.texNavSrvPackage}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/regis-services?type=${ETypeOfServiceParameters.Vaccine}`}
                      className="nav-link">
                      {lan.texNavSrvVaccination}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="/blogs" className="nav-link">
                  <span>{lan.texNavBlog}</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="/blogs">{lan.texNavBlogHealth}</Link>
                  </li>
                  <li>
                    <Link href="/blogs">{lan.texNavBlogMedical}</Link>
                  </li>
                  <li>
                    <Link href="/blogs">{lan.texNavBlogService}</Link>
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
          {isLogin && !loginLoading && (
            <Dropdown className="pe-auto">
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
                {inforUser?.customer && (
                  <div className="ms-2 my-1 ">
                    <FaKey className="text-warning me-1" />
                    <span className="text-warning user-select-all">
                      {inforUser?.customer?.customerKey}
                    </span>{" "}
                  </div>
                )}
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
                <Dropdown.Item
                  className="d-flex"
                  onClick={() => {
                    setIsModalOpen((pre) => ({ ...pre, notifacation: true }));
                    handleNotification();
                  }}>
                  <i className="text-primary me-1 bi bi-bell-fill position-relative">
                    {notify.find(
                      (i) => i.status === ETypeOfNotification.NotSeen
                    ) && (
                      <i className="bi bi-dot position-absolute bottom-0 start-0 fs-3 text-danger"></i>
                    )}
                  </i>
                  <span>{lan.texBtnNotification}</span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={"button"} onClick={() => onLogout()}>
                  <i className="text-danger me-1 bi bi-box-arrow-right"></i>
                  <strong className="text-danger">{lan.texBtnLogout}</strong>
                </Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
          )}
          {!isLogin && !loginLoading && (
            <div className="dropdown pe-auto">
              <Link href="/account/login" className="user-btn 56786 ">
                <span className="d-none d-md-inline">{lan.texNavLogin}</span>
              </Link>
            </div>
          )}
          {loginLoading && (
            <div className="dropdown pe-auto">
              <div className="user-btn 56786 ">
                <span className="d-none d-md-inline">
                  {lan.texNavLoginLoading}
                </span>
              </div>
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
      {<Modal isOpen={isModalOpen.menu} onClose={toggleModal} />}
      <ModalCpn
        handleClose={() => {
          setIsModalOpen((pre) => ({ ...pre, notifacation: false }));
        }}
        handleSave={() => {}}
        onlyClose
        headerText={lan.headModalNotify}
        openRequest={isModalOpen.notifacation}
        buttonSize="sm">
        <div>
          <div className="d-flex mb-2 border-bottom align-items-center">
            <h4>{lan.texBtnAccout}</h4>
            <Button
              size="sm"
              className="ms-2"
              variant="outline-secondary"
              onClick={() => {
                handleSeenAll();
              }}>
              {lan.btnSeenAll}
            </Button>
          </div>
          <div
            style={{
              height: "66vh",
              width: "100%",
            }}
            className="overflow-y-auto">
            {notify.map((item, key) => (
              <div
                key={key}
                style={{ width: "100%" }}
                className="d-flex align-items-center mb-3 border rounded border-success p-2 mb-2 border-opacity-25"
                onClick={() => handleSeenById(item.id)}>
                <Col className=" col-2 ">
                  <div
                    style={{ height: 56, width: 56 }}
                    className="bg-primary rounded-circle d-flex justify-content-center align-items-center position-relative">
                    {item.status === ETypeOfNotification.Seen && (
                      <AiOutlineNotification className="text-light fs-3" />
                    )}
                    {item.status === ETypeOfNotification.NotSeen && (
                      <div className="">
                        <AiFillNotification className="text-light fs-3" />
                        <GoDotFill
                          size={22}
                          className="text-danger position-absolute top-0 end-0"
                        />
                      </div>
                    )}
                  </div>
                </Col>
                <Col>
                  <Link href={item.detailPath}>
                    <h6 className="mb-1">{item.content}</h6>
                    <i style={{ fontSize: 14 }}>
                      {formatDateFull(item.createdAt)}
                    </i>
                  </Link>
                </Col>
              </div>
            ))}
          </div>
        </div>
      </ModalCpn>
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
                      Khám theo bác sĩ
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
