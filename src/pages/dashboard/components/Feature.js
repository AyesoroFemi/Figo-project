import { HiShoppingCart } from "react-icons/hi";
import { FaPiggyBank } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";
import {
  Container,
  Icon,
  FeatureContent,
  CardBox,
  CardContent,
} from "./Feature.styles";

export const Feature = () => {
  return (
    <Container>
      <h3>Coming features</h3>
      <FeatureContent>
        <CardBox>
          <CardContent>
            <Icon>
              <HiShoppingCart color="black" size={15} />
            </Icon>
            <h3>Investment</h3>
          </CardContent>
          <p>Coming soon</p>
        </CardBox>
        <CardBox>
            <CardContent>
                <Icon>
                <FaPiggyBank color="black" size={15} />
            </Icon>
            <h3>Savings</h3>
            </CardContent>
          <p>Coming soon</p>
        </CardBox>
        <CardBox>
          <CardContent>
            <Icon>
                <HiShoppingCart color="black" size={15} />
            </Icon>
            <h3>
                Buy Now <br /> Pay Later{" "}
            </h3>
          </CardContent>
          <p>Coming soon</p>
        </CardBox>
        <CardBox>
            <CardContent>
                <Icon>
                    <MdPayments color="black" size={15} />
                </Icon>
             <h3>Pay Bills</h3>
            </CardContent>
          <p>Coming soon</p>
        </CardBox>
        <CardBox>
          <CardContent>
            <Icon>
                <AiFillBook color="black" size={15} />
            </Icon>
            <h3>Airtime</h3>
          </CardContent>
          <p>Coming soon</p>
        </CardBox>
      </FeatureContent>
    </Container>
  );
};
