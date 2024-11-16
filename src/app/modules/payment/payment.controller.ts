import { Request, Response } from "express";

const confirmationController = async (req: Request, res: Response) => {

  // const res = await paymentService.confirmService();


  res.send(`
    
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

const cancelController = async (req: Request, res: Response) => {

  // const res = await paymentService.confirmService();


  res.send(`<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; height: 100vh;">
  <div style="background-color: #ffffff; padding: 20px; max-width: 500px; width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <h1 style="text-align: center; color: #e53935;">Payment Canceled</h1>
    <p style="text-align: center; font-size: 16px; margin-bottom: 20px;">We're sorry, but your payment has been canceled. If you need further assistance, please contact support.</p>
    
    <div style="margin-bottom: 20px;">
      <h2 style="font-size: 18px; color: #555;">Cancellation Details</h2>
      <p style="margin: 5px 0;"><strong>Transaction ID:</strong> <span style="color: #333;">TSXID1234567890</span></p>
      <p style="margin: 5px 0;"><strong>Amount Attempted:</strong> <span style="color: #333;">$100.00</span></p>
      <p style="margin: 5px 0;"> <strong>Payment Method:</strong> <span style="color: #333;">Credit Card</span></p>
    </div>
    
      
    <div style="text-align: center;">
  <a href="https://playtime-pro.vercel.app/" 
     style="display: inline-block; padding: 12px 24px; font-size: 15px; color: #ffffff; background-color: #000000; border-radius: 5px; text-decoration: none; box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2); font-weight: 500; transition: background-color 0.3s ease, transform 0.3s ease;" 
     onmouseover="this.style.backgroundColor='#333333'; this.style.transform='translateY(-2px)'" 
     onmouseout="this.style.backgroundColor='#000000'; this.style.transform='none'">
     Return to Homepage
  </a>
</div>

  </div>
</body>`);


};

export const paymentController = {
  confirmationController,
  cancelController
};