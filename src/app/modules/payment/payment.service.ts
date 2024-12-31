import { paymentVerification } from "../../utils/payment.utils";
import BookingModel from "../bookings/bookings.schema.model";


const confirmService = async (transactionId: string) => {

  // verifying payment
  const verifyResponse = await paymentVerification(transactionId);

  // updating the membership status to Active after successfull payment
  let result;
  if (verifyResponse && verifyResponse?.pay_status === "Successful") {
    result = await BookingModel.findOneAndUpdate({ transactionId }, { isBooked: "confirmed" }, { new: true });
  };


  if (!result) {
    return (`
  <p>Payment status update failed</p>
  `);
  }

  return (`

      <body style="font-family: Arial, sans-serif; background-color: #f2f5f9; color: #333; margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh;">
    <div style="background-color: #ffffff; padding: 30px; max-width: 500px; width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
      <h1 style="text-align: center; color: #333333; font-weight: 600; font-size: 24px; margin-bottom: 10px;">Payment Confirmed</h1>
      <p style="text-align: center; font-size: 15px; color: #555555; margin-bottom: 20px;">Thank you for your payment. Your transaction was completed successfully.</p>



    <a href="https://playtime-pro.vercel.app/" 
       style="display: inline-block; padding: 12px 24px; font-size: 15px; color: #ffffff; background-color: #000000; border-radius: 5px; text-decoration: none; box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2); font-weight: 500; transition: background-color 0.3s ease, transform 0.3s ease;" 
       onmouseover="this.style.backgroundColor='#333333'; this.style.transform='translateY(-2px)'" 
       onmouseout="this.style.backgroundColor='#000000'; this.style.transform='none'">
       Return to Homepage
    </a>

    </div>
  </body>

  `);

};

export const paymentService = {
  confirmService
};