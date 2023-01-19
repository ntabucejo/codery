import { type MouseEvent, useState } from "react";

type Payment = {
  user: {
    name: string;
    email: string;
    phone: string;
  };
  amount: number;
  description: string;
  card: {
    number: string;
    expiration: {
      month: string;
      year: string;
    };
    cvc: string;
  };
};

const usePayment = ({ user, card, amount, description }: Payment) => {
  const [status, setStatus] = useState("No Payment Available");

  const createIntent = async () => {
    setStatus("Creating Payment Intent");
    const paymentIntent = await fetch("/api/payment/create-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: amount * 100,
            payment_method_allowed: ["card"],
            payment_method_options: {
              card: { request_three_d_secure: "any" },
            },
            currency: "PHP",
            description: description,
            statement_descriptor: "descriptor business name",
          },
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response.body.data;
      });
    return paymentIntent;
  };

  const createMethod = async () => {
    setStatus("Creating Payment Method");
    const paymentMethod = fetch("https://api.paymongo.com/v1/payment_methods", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_PAYMONGO_PUBLIC!
        ).toString("base64")}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            details: {
              card_number: card.number,
              exp_month: parseInt(card.expiration.month),
              exp_year: parseInt(card.expiration.year),
              cvc: card.cvc,
            },
            billing: {
              name: user.name,
              email: user.email,
              phone: user.phone,
            },
            type: "card",
          },
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        setStatus(error);
        return error;
      });

    return paymentMethod;
  };

  const transaction = async (fullClient: any) => {
    const paymentIntentId = fullClient.split("_client")[0];
    let i = 5;
    for (let i = 5; i > 0; i--) {
      setStatus(`Listening to Payment in ${i}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (i == 1) {
        const paymentIntentData = await fetch(
          "https://api.paymongo.com/v1/payment_intents/" +
            paymentIntentId +
            "?client_key=" +
            fullClient,
          {
            headers: {
              // Base64 encoded public PayMongo API key.
              Authorization: `Basic ${Buffer.from(
                process.env.NEXT_PUBLIC_PAYMONGO_PUBLIC!
              ).toString("base64")}`,
            },
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            console.log(response.data);
            return response.data;
          });

        if (paymentIntentData.attributes.last_payment_error) {
          setStatus(
            JSON.stringify(paymentIntentData.attributes.last_payment_error)
          );
        } else if (paymentIntentData.attributes.status === "succeeded") {
          setStatus("Payment Success");
        } else {
          i = 5;
        }
      }
    }
  };

  const attachOptions = async (intent: any, method: any) => {
    setStatus("Attaching Intent to Method");
    fetch(`https://api.paymongo.com/v1/payment_intents/${intent.id}/attach`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_PAYMONGO_PUBLIC!
        ).toString("base64")}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            payment_method: `${method.id}`,
            client_key: `${intent.attributes.client_key}`,
          },
        },
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const paymentIntent = response.data;
        console.log(paymentIntent);
        const paymentIntentStatus = paymentIntent.attributes.status;
        if (paymentIntentStatus === "awaiting_next_action") {
          // Render your modal for 3D Secure Authentication since next_action has a value. You can access the next action via paymentIntent.attributes.next_action.
          setStatus(paymentIntentStatus);
          window.open(
            paymentIntent.attributes.next_action.redirect.url,
            "_blank"
          );
          transaction(paymentIntent.attributes.client_key);
        } else {
          setStatus(paymentIntentStatus);
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus(JSON.stringify(err));
      });
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const intent = await createIntent();
    const method = await createMethod();
    await attachOptions(intent, method);
  };

  return { status, handleSubmit };
};

export default usePayment;
