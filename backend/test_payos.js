import dotenv from 'dotenv';
dotenv.config();
import PayOS from '@payos/node';

const payos = new PayOS(
  process.env.PAYOS_CLIENT_ID,
  process.env.PAYOS_API_KEY,
  process.env.PAYOS_CHECKSUM_KEY
);

async function test() {
  try {
    const link = await payos.createPaymentLink({
      orderCode: 12345,
      amount: 50000,
      description: 'Test',
      cancelUrl: 'http://localhost/cancel',
      returnUrl: 'http://localhost/success'
    });
    console.log('createPaymentLink works:', link.checkoutUrl);
  } catch (e) {
    console.log('Error createPaymentLink:', e.message);
  }
}
test();
