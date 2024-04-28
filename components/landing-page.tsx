import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const LandingPage = () => {
  return (
    <main className="flex flex-col">
      <section className="w-full h-[80vh] relative">
        <Image
          alt="Hero Image"
          className="object-cover"
          fill
          src="/placeholder.svg"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-3xl px-4">
            <h1 className="text-5xl font-bold">Capture the Moment</h1>
            <p className="text-lg">
              Discover the art of photography with our talented team of
              professionals. Let us help you create timeless memories.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Image
              alt="Featured Photo 1"
              className="rounded-lg object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <Image
              alt="Featured Photo 2"
              className="rounded-lg object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <Image
              alt="Featured Photo 3"
              className="rounded-lg object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Image
              alt="Portfolio Photo 1"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <Image
              alt="Portfolio Photo 2"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <Image
              alt="Portfolio Photo 3"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <Image
              alt="Portfolio Photo 4"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <Image
              alt="Portfolio Photo 5"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <Image
              alt="Portfolio Photo 6"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <Image
              alt="Portfolio Photo 7"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <Image
              alt="Portfolio Photo 8"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
              />
            </div>
            <div className="md:col-span-2">
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
