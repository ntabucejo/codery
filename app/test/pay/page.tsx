"use client";

import usePayment from "@core/hooks/use-payment";

const Page = () => {
  const { status, handleSubmit } = usePayment({
    user: {
      name: "Nikko Abucejo",
      email: "ntabucejo@gmail.com",
      phone: "09951935710",
    },
    card: {
      number: "4343434343434345",
      expiration: {
        month: "12",
        year: "25",
      },
      cvc: "123",
    },
    amount: 1500,
    description: "Test Payment",
  });

  console.log(status);

  return (
    <div className="contain">
      <button onClick={handleSubmit} className="rounded border p-4">
        Pay
      </button>
    </div>
  );
};

export default Page;
