import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
// chakra-ui
import { Box } from "@chakra-ui/react"
// components
import SimpleBanner from "components/_atoms/SimpleBanner"
// utils
import { IMG } from "utils/images"

/**
 * Banner Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente banner para la publicidad de la tienda
 *
 */
const Banner = () => (
  <Box as={Carousel} autoPlay infiniteLoop transitionTime="3s" w="100vw">
    <SimpleBanner img={IMG.SLIDER3} />
    <SimpleBanner img={IMG.SLIDER1} />
    <SimpleBanner img={IMG.SLIDER2} />
    <SimpleBanner img={IMG.SLIDER4} />
    <SimpleBanner img={IMG.SLIDER5} />
  </Box>
)

export default Banner
