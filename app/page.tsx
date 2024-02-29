'use client'

import { fabric } from 'fabric'

import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import { useRef } from "react";

export default function Page() {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fabricRef = useRef<fabric.Canvas | null>(null)
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <section className="flex h-full flex-row">
        <LeftSidebar />
        <Live />
        <RightSidebar />
      </section>
    </main>
  );
}