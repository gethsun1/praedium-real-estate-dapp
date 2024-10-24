"use client";

import Image from "next/image";
import { useState } from "react";
import { ConnectButton } from "@thirdweb-dev/react"; 
import praediumLogo from "@public/praedium_logo.png"; 
import { client } from "./client"; 

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto bg-gradient-to-b from-blue-900 to-gray-900">
      <div className="py-20 text-center">
        <Header />

        <div className="flex justify-center mb-10">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Praedium Real Estate Dapp",
              url: "https://praedium.io", /
            }}
          />
        </div>

        <AboutSection />

        <TokenSection />

        <RealEstateAssets />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20">
      <Image
        src={praediumLogo} 
        alt="Praedium Logo"
        width={150}
        height={150}
        className="mb-6"
        style={{
          filter: "drop-shadow(0px 0px 24px #f5a623a8)",
        }}
      />

      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
        Welcome to Praedium
      </h1>
      <p className="text-lg text-gray-300">
        Revolutionizing Real Estate Investment through Tokenization.
      </p>
    </header>
  );
}

function AboutSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-4">About Praedium</h2>
      <p className="text-gray-300 max-w-2xl mx-auto text-lg">
        Praedium is a decentralized platform that transforms real estate
        investments by enabling fractional ownership and unique property
        NFTs. Whether you are an individual investor looking to own a portion
        of a high-value asset or a high-net-worth individual seeking exclusive
        properties, Praedium opens doors to seamless property ownership
        through blockchain.
      </p>
    </section>
  );
}

function TokenSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-4">Tokenize Your Investments</h2>
      <div className="flex flex-col items-center">
        <div className="mb-8 text-gray-300 text-lg">
          <p>
            Invest in real estate like never before with our $PRDGM tokens.
            Easily acquire fractional ownership in high-value properties or
            own entire units with our unique Property NFTs.
          </p>
        </div>
      </div>
    </section>
  );
}

function RealEstateAssets() {
  const [properties] = useState([
    {
      title: "Luxury Apartment - Nairobi",
      description: "Own a piece of luxury in the heart of Nairobi. Tokenized for fractional ownership.",
      value: "$500,000",
    },
    {
      title: "Beachfront Villa - Mombasa",
      description: "A premium beachfront property available as a unique NFT.",
      value: "$1,200,000",
    },
    {
      title: "Office Space - Westlands",
      description: "Tokenized office space located in Westlands, Nairobi.",
      value: "$750,000",
    },
  ]);

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            title={property.title}
            description={property.description}
            value={property.value}
          />
        ))}
      </div>
    </section>
  );
}

function PropertyCard(props: { title: string; description: string; value: string }) {
  return (
    <div className="border border-gray-700 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-bold text-white mb-2">{props.title}</h3>
      <p className="text-gray-300 text-base mb-4">{props.description}</p>
      <p className="text-green-400 font-bold">{props.value}</p>
    </div>
  );
}
