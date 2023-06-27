import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Btn.css";

import {
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdMail, MdFavorite } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FcContacts, FcApproval } from "react-icons/fc";
function Btn() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <div className="flexBtn"></div>;
}
export default Btn;
