import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLENT_ID;

export const client = createThirdwebClient({clientId: clientId as string});