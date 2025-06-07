
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 font-inter">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
