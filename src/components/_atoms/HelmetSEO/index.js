import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

/**
 * HelemtCEO Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente para el CEO usando react-helmet
 */
const HelmetSEO = ({ title, description }) => (
  <Helmet>
    {title && <title>{title}</title>}´
    {description && <meta name="description" content={description}></meta>}
  </Helmet>
)

HelmetSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default HelmetSEO
