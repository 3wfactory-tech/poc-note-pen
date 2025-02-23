"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ZoomIn, ZoomOut } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export default function MainContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState("#000000")
  const [brushSize, setBrushSize] = useState(5)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext("2d")
      if (context) {
        context.lineCap = "round"
        context.lineJoin = "round"
      }
    }
  }, [])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    draw(e)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (context && canvas) {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      context.strokeStyle = color
      context.lineWidth = brushSize

      context.lineTo(x, y)
      context.stroke()
      context.beginPath()
      context.moveTo(x, y)
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      <Tabs defaultValue="page1" className="flex-1 flex flex-col">
        <div className="flex justify-between items-center px-4 py-2 bg-white shadow-sm">
          <TabsList>
            <TabsTrigger value="page1">Page 1</TabsTrigger>
            <TabsTrigger value="page2">Page 2</TabsTrigger>
            <TabsTrigger value="page3">Page 3</TabsTrigger>
          </TabsList>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-8 h-8 rounded-full overflow-hidden"
            />
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-32"
            />
            <Button variant="outline" size="icon">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <TabsContent value="page1" className="flex-1 p-4">
          <div className="w-full h-full bg-white rounded-lg shadow-inner border border-gray-200">
            <canvas
              ref={canvasRef}
              width={800}
              height={600}
              onMouseDown={startDrawing}
              onMouseUp={stopDrawing}
              onMouseOut={stopDrawing}
              onMouseMove={draw}
              className="w-full h-full bg-grid-pattern"
            />
          </div>
        </TabsContent>
        <TabsContent value="page2" className="flex-1 p-4">
          <div className="w-full h-full bg-white rounded-lg shadow-inner border border-gray-200">
            {/* Add canvas for page 2 */}
          </div>
        </TabsContent>
        <TabsContent value="page3" className="flex-1 p-4">
          <div className="w-full h-full bg-white rounded-lg shadow-inner border border-gray-200">
            {/* Add canvas for page 3 */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

