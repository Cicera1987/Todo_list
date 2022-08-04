import { RiWhatsappFill, RiYoutubeLine, RiLinkedinBoxFill, RiInstagramLine } from "react-icons/ri";
import { 
  UniversalFooter, 
  FooterIcon, 
  ModalTitle } 
from "./style.js";

const Footer = () => {
  return (
    <UniversalFooter>
      <ModalTitle>Todo List &copy; 2022</ModalTitle>
<FooterIcon>
        <RiWhatsappFill />
        <RiYoutubeLine />
        <RiLinkedinBoxFill />
        <RiInstagramLine />
  </FooterIcon>
    </UniversalFooter>
  );
};

export default Footer;