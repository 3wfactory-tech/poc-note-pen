"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ZoomIn, ZoomOut } from "lucide-react"
import { useRef, useEffect, useState } from "react"


import * as iink from "iink-ts";

export default function MainContent() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState("#000000")
  const [brushSize, setBrushSize] = useState(5)
  const [result, setResult] = useState("");
  let iinkEditor = null;

  useEffect(() => {
    let editorElement = editorRef.current;

    if(editorElement == null ) {
      return
    }

     iinkEditor = new iink.Editor(editorElement, {
      configuration: {
          recognition: {
            type: "TEXT",
            lang: "pt_BR",
            text: {
              mimeTypes: ["text/plain"],
            },
          },
          offscreen: true,
          server: {
              applicationKey: '7727c7cd-6037-433a-b4bc-3436d766afef',
              hmacKey: '7d26f07c-da2e-4e5d-9c3b-d0eb0d655634'
          }
      }
});
iinkEditor.initialize();

// editorElement.addEventListener("exported", (event) => {
//   console.log(event.detail["text/plain"])
// })

},[]);

const editorStyle = {
  minWidth: "100px",
  minHeight: "100px",
  width: "80vw",
  border: "1px solid black",
  height: "calc(100vh - 190px)",
  touchAction: "none"
};


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
          <div style={editorStyle} ref={editorRef} touch-action="none"></div>

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

