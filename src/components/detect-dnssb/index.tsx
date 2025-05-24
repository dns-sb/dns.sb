import clsx from 'clsx';
import {useCallback, useState} from 'react';
import useSWRImmutable from 'swr/immutable';
import {XIcon} from 'nextra/icons';

interface IPInfo {
  asn: number;
  asn_organization: string;
  city: string;
  continent_code: string;
  country: string;
  country_code: string;
  ip: string;
  isp: string;
  latitude: number;
  longitude: number;
  offset: number;
  organization: string;
  postal_code: string;
  region: string;
  region_code: string;
  timezone: string;
}

const useIP = () => {
  return useSWRImmutable<IPInfo>(
    'https://ip.dns.sh/showfom-is-best',
    (key: string) => fetch(key).then((res) => res.json())
  );
};

const useCheckDns = () => {
  const {data, isLoading, error} = useSWRImmutable(
    'https://check.dns.sh/',
    (key: string) => fetch(key).then((res) => res.arrayBuffer()),
    {
      shouldRetryOnError: false
    }
  );
  const isUsingDnsSb = !isLoading && !error && !!data;
  return [isUsingDnsSb, isLoading] as const;
};

interface IsUsingDnsSbProps {
  handleBannerClose: () => void;
}

const IsUsingDnsSb = ({handleBannerClose}: IsUsingDnsSbProps) => {
  const [isUsingDnsSb, isCheckingDns] = useCheckDns();
  if (isCheckingDns) return <div>...</div>;
  if (isUsingDnsSb) {
    return (
      <div className="flex items-center">
        <div className="w-4 flex-shrink-0 h-4 rounded-full bg-green-600 border-4 border-green-900" />
        <p className="mx-2 sm:ml-3 text-[12px] sm:text-sm">
          You are using DNS.SB :) Your DNS requests are encrypted and safe.
        </p>
      </div>
    );
  }
  return (
    <div className="flex items-center">
      <div
        className="w-4 flex-shrink-0 h-4 rounded-full bg-red-600 dark:bg-red-600 border-4 border-red-400 dark:border-red-900" />
      <p className="mx-2 sm:ml-3 text-[12px] sm:text-sm">
        You are not using DNS.SB :( Your ISP can monitor and track your DNS requests.
      </p>
      <button
        type="button"
        aria-label="Dismiss banner"
        className="block sm:hidden opacity-80 hover:opacity-100 border-[1px] rounded ltr:right-0 rtl:left-0"
        onClick={handleBannerClose}
      >
        <XIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

const YourIP = () => {
  const {data, error} = useIP();
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
  return <p>...</p>;
};

export default function AreYouUsingDnsSb() {
  const [isOpen, setOpen] = useState(true);

  const handleBannerClose = useCallback(() => setOpen(false), []);

  if (isOpen) {
    return (
      <div
        className={clsx(
          'relative z-20 flex items-center justify-center',
          'bg-neutral-200 dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-slate-50',
          'sm:h-16 md:h-10',
          'dark:bg-[linear-gradient(1deg,#383838,#212121)] dark:text-white',
          'py-2 pl-[max(env(safe-area-inset-left),1rem)] pr-[max(env(safe-area-inset-left),1rem)] sm:pr-[max(env(safe-area-inset-right),3rem)]'
        )}
      >
        <div className="w-full">
          <div className="space-y-2 md:space-y-0 md:flex flex-wrap justify-between">
            <IsUsingDnsSb handleBannerClose={handleBannerClose} />
            <div>
              <YourIP />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
