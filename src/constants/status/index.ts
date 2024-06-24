export const STATUS = {
  PREPARE: "Em preparação",
  ROUTE: "Em rota",
  DELIVERED: "Entregue",
  CANCELED: "Cancelado",
};

export const NEXT_STATUS = {
  [STATUS.PREPARE]: STATUS.ROUTE,
  [STATUS.ROUTE]: STATUS.DELIVERED,
  [STATUS.DELIVERED]: STATUS.CANCELED,
  [STATUS.CANCELED]: STATUS.PREPARE,
};
