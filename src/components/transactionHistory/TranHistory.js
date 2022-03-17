import { CgProfile } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";


import { Container, IconWrapper } from "./TranHistory.styles";
export const TransHistory = () => {
    return (
        <Container>
            <IconWrapper>
                <div>
                     <CgProfile color="black" size={30} />
                </div>
                <div>
                     <BsThreeDotsVertical size={25} />
                </div>
            </IconWrapper>
            <h3 style={{textAlign: 'center',
                marginTop: '2rem'}}>Transaction History</h3>

            <h3 style={{textAlign: 'center',
                marginTop: '6rem', color: '#ccc'}}>You have no <br />
                transaction yet
            </h3>
        </Container>
    )
}