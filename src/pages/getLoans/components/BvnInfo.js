import { FormContainer, FormInput } from "./Form.styles";
import { ButtonElement, Wrapper } from "./Bvn.styles";

export const BvnInfo = ({setStep}) => {
  return (
    <>      
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
              </FormInput>
            </FormContainer>
          </form>
          <Wrapper>
              <ButtonElement onClick={()=>setStep(2)}>Back</ButtonElement>
              <ButtonElement primary onClick={()=>setStep(3)}>Next</ButtonElement>
          </Wrapper>
     </>
  );
};
