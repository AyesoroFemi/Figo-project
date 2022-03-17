
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
export const Forms = () => {
    return (
        <form>
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
                <NextButton>Next</NextButton>
            </FormDate>
            </FormWrapper>
      </form>
    )
}