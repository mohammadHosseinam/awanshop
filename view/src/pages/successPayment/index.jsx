import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import Header from '../../layout/header';
import SuccessIcon from '../../assets/icons/successIcon';
import PrimaryInlineButton from '../../components/PrimaryInlineButton';
import Footer from '../../layout/footer';
import axios from 'axios';
import { verifyPaymentService } from '../../api/services';
import { Link } from 'react-router-dom';

function SuccessPayment() {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState("loading");
  const navigate = useNavigate();
  const params = useParams()
  const authority = searchParams.get("Authority");
    const status = searchParams.get("Status");
    const orderId = searchParams.get("orderId");
  useEffect(() => {
    const verify = async () => {
      console.log({searchParams})
      try {
        const res = await verifyPaymentService({authority , status , orderId});
        console.log(res)
        if (res.data.success) {
          setPaymentStatus("success");
        } else {
          setPaymentStatus("failed");
        }
      } catch (err) {
        setPaymentStatus("failed");
      }
    };

    verify();
  }, []);

  return (
    <>
      <Header />
      <div style={{ height: "calc(100vh - 252px)" }} className='flex flex-col justify-center items-center gap-1'>
        {paymentStatus === "loading" && <p>در حال بررسی پرداخت...</p>}
        {paymentStatus === "success" && (
          <>
            <SuccessIcon />
            <h1 className='font-vazirmatn text-xs text-slate-900 font-medium mt-5'>خرید شما با موفقیت انجام شد</h1>
            <Link to="/adminPanel">
              <PrimaryInlineButton text="رفتن به حساب کاربری" />
            </Link>
          </>
        )}
        {paymentStatus === "failed" && (
          <>
            <h1 className='font-vazirmatn text-xs text-red-600 font-medium'>پرداخت شما ناموفق بود</h1>
            <PrimaryInlineButton text="بازگشت به سبد خرید" onClick={() => navigate('/basket')} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SuccessPayment;