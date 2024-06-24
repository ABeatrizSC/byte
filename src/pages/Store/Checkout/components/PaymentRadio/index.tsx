import React, { ChangeEventHandler } from "react";
import { PaymentMethod } from "../../../../../types/models";

interface PaymentRadioProps extends PaymentMethod {
  handleSelect: ChangeEventHandler<HTMLInputElement>;
  selected: string;
}

const PaymentRadio: React.FC<PaymentRadioProps> = (props) => {
  const { id_payment_method: id, name, handleSelect, selected } = props;
  return (
    <div className="payment-container__input-group">
      <input
        type="radio"
        name="paymentMethod"
        id={id}
        value={name}
        checked={selected == name}
        onChange={handleSelect}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default PaymentRadio;
