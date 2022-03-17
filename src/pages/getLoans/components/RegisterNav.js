
import {
  Nav,
  NavItem,
  NavLine,
} from "./RegisterNav.styles";

export const RegisterNav = ({ title }) => {
  return (
    <div>
        <div>
          <h3>{title}</h3>
          <Nav>
            <NavItem>
              <h2>1</h2>
            </NavItem>
            <NavLine></NavLine>
            <NavItem>
              <h2>2</h2>
            </NavItem>
            <NavLine></NavLine>
            <NavItem>
              <h2>3</h2>
            </NavItem>
            <NavLine></NavLine>
            <NavItem>
              <h2>4</h2>
            </NavItem>
            <NavLine></NavLine>
            <NavItem>
              <h2>5</h2>
            </NavItem>
          </Nav>
        </div>
    </div>
  );
};
