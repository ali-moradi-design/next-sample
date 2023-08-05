import cookie from 'cookie';
import axios from 'axios';

export default function callback() {
  return;
}

export async function getServerSideProps(context: any) {
  async function name(isTokenValid: boolean) {
    if (isTokenValid) {
      await context.res.setHeader(
        'set-cookie',
        cookie.serialize('accessToken', context.query.access_token, {
          httpOnly: true,
          secure: process.env.NEXT_PUBLIC_ENV !== 'DEVELOPMENT',
          maxAge: context.query.expires_in,
          sameSite: 'none',
          path: '/',
        })
      );
    }
  }

  if (context.query.access_token !== undefined) {
    const clientIP = await axios.get(
      `https://esb.asiatech.ir/api/v1/customer/client/ip`,
      {
        headers: { Authorization: `Bearer ${context.query.access_token}` },
      }
    );

    const isTokenValid = await axios.get(
      `https://act-api-dev.asiatech.ir/Session/token/${context.query.access_token}/login?RoleID=null&ForceLogin=false&loginIp=${clientIP.data.ipAddress}`
    );
    name(isTokenValid.data.isTokenValid);
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}
