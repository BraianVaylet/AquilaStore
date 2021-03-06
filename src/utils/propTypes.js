import PropTypes from "prop-types"
import { CATEGORIES, GENDERS } from "./constants"

export const PropTypesProduct = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pictureName: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  category: PropTypes.oneOf([
    CATEGORIES.JACKETS,
    CATEGORIES.SHIRTS,
    CATEGORIES.SHOES,
    CATEGORIES.ACCESORIES,
  ]).isRequired,
  calification: PropTypes.number.isRequired,
  gender: PropTypes.oneOf([GENDERS.MALE, GENDERS.FEMALE, GENDERS.ALL])
    .isRequired,
  sizes: PropTypes.array.isRequired,
  size: PropTypes.string,
  colors: PropTypes.array.isRequired,
  color: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
