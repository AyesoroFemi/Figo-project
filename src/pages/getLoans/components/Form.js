
import {
    FormInput,
    FormContainer,
    FormWrapper,
    FormSelect,
    Button,
    StyledButton,
    FormDate,
    NextButton,
  } from "./Form.styles";
  import {BvnInfo} from "./BvnInfo"
  import {WorkInfo} from "./WorkInfo"
export const Forms = ({setStep, step}) => {
    return (
        <>
        
        {step===1&&<form>
            <FormContainer>
            <FormInput>
                <label htmlFor="">
                <span>Full Name</span>
                <span>*</span>
                </label>{" "}
                <br />
                <input type="text" placeholder="Frank Abija" />
            </FormInput>
            <FormInput>
                <label htmlFor="">
                <span>Email Address</span>
                <span>*</span>
                </label>{" "}
                <br />
                <input type="email" placeholder="Frank Abija@gmail.com" />
            </FormInput>
            </FormContainer>
            <FormWrapper>
            <div>
                <FormSelect>
                <FormInput>
                    <label htmlFor="">
                    <span>Gender</span>
                    <span>*</span>
                    </label>{" "}
                    <br />
                    <Button>Male</Button>
                </FormInput>
                <FormInput>
                    <StyledButton>Female</StyledButton>
                </FormInput>
                </FormSelect>
                <FormDate>
                <FormInput>
                    <label htmlFor="">
                    <span>Date of Birth</span>
                    <span>*</span>
                    </label>{" "}
                    <br />
                    <input type="text" placeholder="02-04-1992" />
                </FormInput>
                </FormDate>
            </div>
            <FormDate>
                <FormInput>
                <label htmlFor="">
                    <span>Home Address</span>
                    <span>*</span>
                </label>{" "}
                <br />
                <textarea
                    type="text"
                    placeholder="No 6, Park view drive, Ikoyi Lagos"
                    rows="7"
                />
                </FormInput>
                <NextButton onClick={()=>setStep(2)}>Next</NextButton>
            </FormDate>
            </FormWrapper>
      </form>}
      {step===2&&<WorkInfo setStep={setStep}/>}
     {step===3 &&<BvnInfo setStep={setStep}/>}
      </>
    )
}