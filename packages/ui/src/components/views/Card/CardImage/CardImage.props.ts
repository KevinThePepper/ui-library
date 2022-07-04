import { ImageProps } from "../../..";
import { BaseComponentWithoutAs } from "../../../..";

export interface ICardImageProps extends ImageProps { }

type CardImageProps = BaseComponentWithoutAs<ICardImageProps>;
export default CardImageProps;
