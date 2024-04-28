import Header from "@/components/header";
import LandingPage from "@/components/landing-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
    </>
  );
}
