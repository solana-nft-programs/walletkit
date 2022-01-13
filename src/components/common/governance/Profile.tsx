import type { PublicKey } from "@solana/web3.js";
import makeBlockie from "ethereum-blockies-base64";

import { useWalletName } from "../../../hooks/useWalletName";
import { displayAddress } from "../../../utils/programs";
import { AddressLink } from "../AddressLink";

interface Props {
  address: PublicKey;
}

export const Profile: React.FC<Props> = ({ address }: Props) => {
  const addressStr = address.toString();
  const displayName = useWalletName(address);

  return (
    <div tw="bg-warmGray-850 p-3 text-sm rounded">
      <div tw="flex gap-2">
        <img
          tw="h-10 w-10 rounded-full"
          alt={`profile-${addressStr}`}
          src={
            displayName
              ? `https://api.cardinal.so/img/5ruQ1GiXbxEmnRrC8fsz94ztBQsXjh8xDDSDQLD9qAT`
              : makeBlockie(addressStr)
          }
        ></img>
        <div tw="flex flex-col">
          <span tw="text-white font-medium">
            {displayName || displayAddress(addressStr)}
          </span>
          <AddressLink tw="text-gray-400" address={address} />
        </div>
      </div>
    </div>
  );
};
