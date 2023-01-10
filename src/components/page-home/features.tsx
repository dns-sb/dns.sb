/* eslint-disable @next/next/no-img-element */
import Balancer from 'react-wrap-balancer';

export default function Features() {
  return (
    <div>
      <Privacy />
      <EasyToRemember />
      <MassiveNetwork />
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
            DNS.SB belives, without privacy there is no human dignity. DNS.SB is designed with one goal in mind, to protect your personal DNS data, no logs, forever.
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
            <br />
            Damn, we actually have
            {' '}
            <span className="font-bold text-red-600">two of them</span>.
          </p>
          <p className="my-4 text-gray-600 dark:text-gray-300 text-lg">
            Our IPv4 addresses are also <span className="font-bold text-red-600">very easy to remember</span>.
          </p>
        </div>
        <div className="md:5/12 md:px-4 lg:px-6">
          <p className="font-mono my-6 font-bold text-4xl text-red-600">185.222.222.222</p>
          <p className="font-mono my-6 font-bold text-4xl text-red-600">45.11.45.11</p>
          <p className="font-mono my-6 font-bold text-4xl text-red-600">[2a09::]</p>
          <p className="font-mono my-6 font-bold text-4xl text-red-600">[2a11::]</p>
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
            Since nearly everything you do on the Internet starts with a DNS request. A fast, performant DNS can accelerate almost everything you do online.
          </p>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            Built on top of <a href="https://xtom.com" className="text-red-600 hover:underline hover:underline-offset-3" target="_blank" rel="noopenner noreferrer">xTom</a>’s massive global anycast network, DNS.SB operates at 30 locations across 6 continents, resolving queries from anywhere of the world.
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
