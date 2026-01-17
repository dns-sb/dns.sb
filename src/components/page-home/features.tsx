/* eslint-disable @next/next/no-img-element */
import Balancer from 'react-wrap-balancer';
import { CopyableIP } from '../copyable-ip';

export default function Features() {
  return (
    <div>
      <Privacy />
      <EasyToRemember />
      <MassiveNetwork />
      <EncryptedDNS />
    </div>
  );
}

function Privacy() {
  return (
    <div className="py-16 text-gray-600">
      <div className="rounded-xl space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
        <div className="md:w-7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            <Balancer>
              Privacy First: Guaranteed
            </Balancer>
          </h2>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            DNS.SB believes that without privacy, there is no human dignity. DNS.SB is designed with one goal in mind: to protect your personal DNS data—no logs, forever.
          </p>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            We don’t want to know what you do on the Internet. And we’ve taken the technical steps to ensure we can’t.
          </p>
        </div>
        <div className="md:w-5/12 lg:w-1/2">
          <img
            src="/images/privacy.svg"
            alt="image"
            loading="lazy"
            width="450"
            height="300"
          />
        </div>
      </div>
    </div>
  );
}

function EasyToRemember() {
  return (
    <div className="py-16 text-gray-600">
      <div className="lg:bg-gray-100 dark:lg:bg-zinc-900 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center justify-between">
        <div className="md:7/12 md:px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white mb-6">
            <Balancer>
              Easy to Remember, Just like Tic-Tac-Toe
            </Balancer>
          </h2>
          <p className="my-4 text-gray-600 dark:text-gray-300 text-lg">
            We have <span className="font-bold text-red-600">the shortest IPv6 address in the world</span>.
          </p>
          <p className="my-4 text-gray-600 dark:text-gray-300 text-lg">
            Damn, we actually have
            {' '}
            <span className="font-bold text-red-600">two of them</span>.
          </p>
          <p className="my-4 text-gray-600 dark:text-gray-300 text-lg">
            Our IPv4 addresses are also <span className="font-bold text-red-600">very easy to remember</span>.
          </p>
        </div>
        <div className="md:5/12 md:px-4 lg:px-6">
          <CopyableIP ip="185.222.222.222" className="font-mono my-6 font-bold text-4xl text-red-600 block" />
          <CopyableIP ip="45.11.45.11" className="font-mono my-6 font-bold text-4xl text-red-600 block" />
          <CopyableIP ip="2a09::" className="font-mono my-6 font-bold text-4xl text-red-600 block" />
          <CopyableIP ip="2a11::" className="font-mono my-6 font-bold text-4xl text-red-600 block" />
        </div>
      </div>
    </div>
  );
}

function MassiveNetwork() {
  return (
    <div className="py-16 text-gray-600">
      <div className="rounded-xl space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
        <div className="md:w-7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            <Balancer>
              Speed Is the Key
            </Balancer>
          </h2>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            Since nearly everything you do on the Internet starts with a DNS request, a fast, performant DNS can accelerate almost everything you do online.
          </p>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            Built on top of <a href="https://xtom.com" className="text-red-600 hover:underline hover:underline-offset-3 link-hover-red" target="_blank" rel="noopener noreferrer">xTom</a>&apos;s massive global anycast network, DNS.SB operates at 30 locations across 6 continents, resolving queries from anywhere in the world.
          </p>
        </div>
        <div className="md:w-5/12 lg:w-1/2">
          <img
            src="/images/network.svg"
            alt="image"
            loading="lazy"
            width="450"
            height="300"
          />
        </div>
      </div>
    </div>
  );
}

function EncryptedDNS() {
  return (
    <div className="py-16 text-gray-600">
      <div className="lg:bg-gray-100 dark:lg:bg-zinc-900 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center justify-between">
        <div className="md:7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Your DNS, Now Encrypted
          </h2>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            Ensuring secure navigation with key controls built into the service to protect you from threats online and potential prying eyes.
          </p>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            Encrypted DNS services increase user privacy and security by preventing eavesdropping and manipulation of DNS data via man-in-the-middle attacks.
          </p>
          <div className="space-y-4">
            <div className="mt-8 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="w-5/6">
                <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">DNS over HTTPS</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Performing remote DNS resolution via the encrypted HTTPS protocol
                </p>
              </div>
            </div>
            <div className="pt-4 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                <svg className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="w-5/6">
                <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">DNS over TLS</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Encrypting and wrapping DNS queries and answers via the TLS protocol
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:5/12 lg:w-1/2">
          <img
            src="/images/encryption.svg"
            alt="image"
            loading="lazy"
            width=""
            height=""
          />
        </div>
      </div>
    </div>
  );
}
