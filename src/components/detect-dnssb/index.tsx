import clsx from 'clsx';
import { useCallback, useState } from 'react';
import useSWRImmutable from 'swr/immutable';
import { XIcon } from 'nextra/icons';

interface IPInfo {
  asn: number
  asn_organization: string
  city: string
  continent_code: string
  country: string
  country_code: string
  ip: string
  isp: string
  latitude: number
  longitude: number
  offset: number
  organization: string
  postal_code: string
  region: string
  region_code: string
  timezone: string
}

const useIP = () => {
  return useSWRImmutable<IPInfo>(
    'https://ip.dns.sh/showfom-is-best',
    (key: string) => fetch(key).then((res) => res.json())
  );
};

const useCheckDns = () => {
  const { data, isLoading, error } = useSWRImmutable(
    'https://check.dns.sh/',
    (key: string) => fetch(key).then((res) => res.arrayBuffer()),
    {
      shouldRetryOnError: false
    }
  );
  const isUsingDnsSb = !isLoading && !error && !!data;
  return [isUsingDnsSb, isLoading] as const;
};

const IsUsingDnsSb = () => {
  const [isUsingDnsSb, isCheckingDns] = useCheckDns();
  if (isCheckingDns) return <div>...</div>;
  if (isUsingDnsSb) {
    return (
      <div className="flex flex-wrap items-center">
        <div className="mt-1 w-4 h-4 rounded-full bg-green-600 border-4 border-green-900" />
        <p className="ml-3">
          You are using DNS.SB :)
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap items-center">
      <div className="mt-1 w-4 h-4 rounded-full bg-red-600 border-4 border-red-900" />
      <p className="ml-3">
        You are not using DNS.SB :(
      </p>
    </div>
  );
};

const YourIP = () => {
  const { data, error } = useIP();
  if (error) {
    return <p>Fail to fetch your IP addresses</p>;
  }
  if (data) {
    return (
      <p>
        <span>IP: {data.ip}</span>
        <span className="ml-3">Location: {data.country}</span>
        <br className="sm:hidden" />
        <span className="sm:ml-3">ISP: {data.isp}</span>
      </p>
    );
  }
  return (
    <p>...</p>
  );
};

export default function AreYouUsingDnsSb() {
  const [isOpen, setOpen] = useState(true);

  const handleBannerClose = useCallback(() => setOpen(false), []);

  if (isOpen) {
    return (
      <div
        className={clsx(
          'relative z-20 flex items-center justify-center',
          'bg-neutral-900 text-sm font-medium text-slate-50',
          'h-24 sm:h-16 md:h-10',
          'dark:bg-[linear-gradient(1deg,#383838,#212121)] dark:text-white',
          'py-2 pl-[max(env(safe-area-inset-left),1rem)] pr-[max(env(safe-area-inset-right),3rem)]'
        )}
      >
        <div className="w-full truncate">
          <div className="space-y-2 md:space-y-0 md:flex flex-wrap justify-between">
            <IsUsingDnsSb />
            <div>
              <YourIP />
            </div>
          </div>
        </div>
        <button
          type="button"
          aria-label="Dismiss banner"
          className="absolute opacity-80 hover:opacity-100 ltr:right-0 rtl:left-0"
          onClick={handleBannerClose}
        >
          <XIcon className="mx-4 h-4 w-4" />
        </button>
      </div>
    );
  }
  return null;
}
