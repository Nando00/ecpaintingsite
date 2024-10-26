import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { iosEmailOutline } from "react-icons-kit/ionicons/iosEmailOutline";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Text from "common/components/Text";
import Image from "common/components/Image";
import Input from "common/components/Input";
import Button from "common/components/Button";
import GlideCarousel from "common/components/GlideCarousel";
import GlideSlide from "common/components/GlideCarousel/glideSlide";
import { CircleLoader } from "../interior.style";
import { toast } from "react-toastify";

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
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "", // Set the default value for the email field
    },
  });
  const [message, setMessage] = useState(null);

  const mutation = useMutation({
    mutationFn: (newEmail) => {
      return axios.post("/api/subscribe", { email: newEmail });
    },
    onSuccess: () => {
      toast.success("Email added successfully!");
      reset(); // Reset the form after successful submission
    },
    onError: (error) => {
      if (error.response) {
        setMessage(error.response.data.error);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    },
  });

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const onSubmit = (data) => {
    mutation.mutate(data.email);
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
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: emailRegex,
                    message:
                      "Please enter a valid email address with letters, numbers, and a single period for the domain",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    inputType="email"
                    placeholder="Enter email address"
                    className={errors.email ? "invalid" : "valid"}
                  />
                )}
              />
              {errors.email && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.email.message}
                </p>
              )}
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
