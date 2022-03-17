import Sidebar from "../../../components/sidebar";
import { RegisterNav } from "../components/RegisterNav";
import { InfoContent } from "../components/RegisterNav.styles";
import { Container } from "../GetLoan.styles";

import { ButtonWrapper } from "./WorkInfo.styles";
import { FormContainer, FormInput } from "../components/Form.styles";
import { ButtonElement, Wrapper } from "./Bvn.styles";

export const BvnInfo = () => {
  return (
    <Container>
      <Sidebar />
      <InfoContent>
        <RegisterNav title="BVN Authentication" />
        <div>
          <form>
            <FormContainer>
              <FormInput>
                <label htmlFor="">
                  <span>Enter your bank verification number</span>
                  <span>*</span>
                </label>{" "}
                <br />
                <input type="number" placeholder="123456789098" required />
                <p style={{ color: "black" }}>
                  Don't know your BVN? No Problem. Dial *565*0#
                </p>
                <ButtonWrapper>
                  <ButtonElement>Back</ButtonElement>
                </ButtonWrapper>
              </FormInput>
              <Wrapper>
                <ButtonElement primary>Next</ButtonElement>
              </Wrapper>
            </FormContainer>
          </form>
          <div>
              <ButtonElement>Back</ButtonElement>
              <ButtonElement>Back</ButtonElement>
          </div>
        </div>
      </InfoContent>
    </Container>
  );
};
