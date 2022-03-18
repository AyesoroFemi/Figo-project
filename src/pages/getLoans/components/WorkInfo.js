
import { FormContainer, FormInput } from "../components/Form.styles"
 
import { ButtonWrapper, BackButton } from "./WorkInfo.styles"

export const WorkInfo = ({setStep}) => {
  return (
   
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
                            <BackButton onClick={()=>setStep(1)}>Back</BackButton>
                        </ButtonWrapper>
                    </FormInput>
                    <FormInput>
                        <label htmlFor="">
                        <span>Company Address</span>
                        <span>*</span>
                        </label>{" "}
                        <br />
                        <input type="text" placeholder="Enter your office address" />
                            <BackButton primary onClick={()=>setStep(3)}>Next</BackButton>
                    </FormInput>
                </FormContainer>
            </form>
  );
};
