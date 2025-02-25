"use client"
import Header from "@/components/Header"
import LeftToolbar from "@/components/LeftToolbar"
import MainContent from "@/components/MainContentKonva"
import RightSidebar from "@/components/RightSidebar"

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <LeftToolbar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  )
}

