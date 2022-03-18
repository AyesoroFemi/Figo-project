
import {
  Nav,
  NavLine,
} from "./RegisterNav.styles";

export const RegisterNav = ({ title, step }) => {

  return (
    <div>
        <div>
          <h3>{title}</h3>
          <Nav> 
              
                <div className={step===1?"activeStep":"step"}>
                    <h2>1</h2>
                </div>
            
            <NavLine></NavLine>
            <div className={step===2?"activeStep":"step"}>
                    <h2>2</h2>
                </div>
            <NavLine></NavLine>
            <div className={step===3?"activeStep":"step"}>
                    <h2>3</h2>
                </div>
            <NavLine></NavLine>
            <div className={step===4?"activeStep":"step"}>
                    <h2>4</h2>
                </div>
            <NavLine></NavLine>
            <div className={step===5?"activeStep":"step"}>
                    <h2>5</h2>
                </div>
          </Nav>
        </div>
    </div>
  );
};
