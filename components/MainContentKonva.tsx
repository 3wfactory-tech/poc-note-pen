"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ZoomIn, ZoomOut } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { Stage, Layer, Rect, Text, Line } from 'react-konva';


export default function MainContent() {

  const [color, setColor] = useState("#000000")
  const [brushSize, setBrushSize] = useState(5)
  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);


  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  if (typeof window === "undefined") {
    return (<>
      Carregando
    </>)
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
          <Stage width={window?.innerWidth ?? 1000} height={window?.innerHeight ?? 1000}  onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}>
          <Layer>
          {lines.map((line, i) => (
            <Line
            
              key={i}
              points={line.points}
              stroke="#000"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
          
          </Layer>
        </Stage>
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

