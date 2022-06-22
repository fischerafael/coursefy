import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const formatDate = (date: Date): string => {
  return format(date, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });
};
