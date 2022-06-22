import { IClass } from "../../entities/IClass";
import { CardClass } from "../CardClass";
import { CardClassActive } from "../CardClassActive";

interface Props {
  classProps: IClass;
}

const activeClass = "aula02";

export const CardClassContainer = ({ classProps }: Props) => {
  if (activeClass === classProps.slug) {
    return <CardClassActive classProps={classProps} />;
  }
  return <CardClass classProps={classProps} />;
};
