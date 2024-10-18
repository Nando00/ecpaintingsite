import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { iosEmailOutline } from "react-icons-kit/ionicons/iosEmailOutline";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Text from "common/components/Text";
import Image from "common/components/Image";
import Button from "common/components/Button";
import Input from "common/components/Input";
import GlideCarousel from "common/components/GlideCarousel";
import GlideSlide from "common/components/GlideCarousel/glideSlide";
import { CircleLoader } from "../interior.style";
import BannerWrapper, {
  Container,
  Overlay,
  ContentArea,
  HighlightedText,
  FormWrapper,
  ButtonGroup,
  CarouselArea,
} from "./banner.style";

import { bannerData } from "common/data/Interior";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  const { discount, discountLabel, title, text, carousel } = bannerData;
  const glideOptions = {
    type: "carousel",
    perView: 3,
    gap: 20,
    breakpoints: {
      1200: {
        perView: 2,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const [state, setState] = useState({ email: "", valid: "" });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = (e) => {
    let value = "";
    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState({ ...state, email: value, valid: "valid" });
      }
    } else {
      if (e.target.value.length > 0) {
        setState({ ...state, valid: "invalid" });
      } else {
        setState({ ...state, valid: "" });
      }
    }
  };

  const handleSubscriptionForm = (e) => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({ email: "", valid: "" });
    }
  };

  return (
    <BannerWrapper>
      <Overlay />
      <Container>
        <ContentArea>
          <Fade direction="down" triggerOnce delay={30}>
            <HighlightedText>
              <strong>{discount}</strong> {discountLabel}
            </HighlightedText>
            <Heading as="h1" content={title} />
            <Text content={text} />
            <FormWrapper onSubmit={handleSubscriptionForm}>
              <Input
                className={state.valid}
                type="email"
                placeholder="Enter email address"
                icon={<Icon icon={iosEmailOutline} />}
                iconPosition="left"
                required={true}
                onChange={handleOnChange}
                aria-label="email"
              />
              <ButtonGroup>
                <Button
                  type="submit"
                  colors="primaryWithBg"
                  title="FREE CONSULT"
                />
                <Button
                  title="EXPLORE MORE"
                  variant="textButton"
                  icon={<i className="flaticon-next" />}
                />
              </ButtonGroup>
            </FormWrapper>
          </Fade>
        </ContentArea>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
