
import Sidebar from "../../../components/sidebar"
import { RegisterNav } from "../components/RegisterNav";
import { InfoContent } from "../components/RegisterNav.styles";
import { Container } from "../GetLoan.styles";
import { FormContainer, FormInput } from "../components/Form.styles"
 
import { ButtonWrapper, BackButton } from "./WorkInfo.styles"

export const WorkInfo = () => {
  return (
    <Container>
      <Sidebar />
      <InfoContent>
        <RegisterNav title="Work Information" />
        <div>
            <form>
                <FormContainer>
                    <FormInput>
                        <label htmlFor="">
                        <span>Empolyment Status</span>
                        <span>*</span>
                        </label>{" "}
                        <br />
                        <input type="text" />
                    </FormInput>
                    <FormInput>
                        <label htmlFor="">
                        <span>Monthly Income</span>
                        <span>*</span>
                        </label>{" "}
                        <br />
                        <input type="text" placeholder="Enter amount" />
                    </FormInput>
                </FormContainer>
                <FormContainer>
                    <FormInput>
                        <label htmlFor="">
                        <span>Where do you work?</span>
                        <span>*</span>
                        </label>{" "}
                        <br />
                        <input type="text" placeholder="Enter where you work" />
                    </FormInput>
                    <FormInput>
                        <label htmlFor="">
                        <span>Salary Date</span>
                        <span>*</span>
                        </label>{" "}
                        <br />
                        <input type="text" placeholder="Enter salary date" />
                    </FormInput>
                </FormContainer>
                <FormContainer>
                    <FormInput>
                        <label htmlFor="">
                        <span>Enter your job title</span>
                        <span>*</span>
                        </label>{" "}
                        <br />
                        <input type="text" placeholder="Enter job title" />
                        <ButtonWrapper>
                            <BackButton>Back</BackButton>
                        </ButtonWrapper>
                    </FormInput>
                    <FormInput>
                        <label htmlFor="">
                        <span>Company Address</span>
                        <span>*</span>
                        </label>{" "}
                        <br />
                        <input type="text" placeholder="Enter your office address" />
                            <BackButton primary>Next</BackButton>
                    </FormInput>
                </FormContainer>
            </form>
        </div>
      </InfoContent>
    </Container>
  );
};
