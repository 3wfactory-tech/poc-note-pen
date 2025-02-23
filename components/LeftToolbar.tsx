import { Button } from "@/components/ui/button"
import {
  Pen,
  Highlighter,
  Square,
  Circle,
  ArrowRight,
  Type,
  Eraser,
  Palette,
  LineChartIcon as LineHeight,
  Undo,
  Redo,
} from "lucide-react"

export default function LeftToolbar() {
  return (
    <div className="w-16 bg-white shadow-md flex flex-col items-center py-4 space-y-4">
      <Button variant="ghost" size="icon">
        <Pen className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Highlighter className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Square className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Circle className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <ArrowRight className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Type className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Eraser className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Palette className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <LineHeight className="h-4 w-4" />
      </Button>
      <div className="border-t border-gray-200 w-full my-2"></div>
      <Button variant="ghost" size="icon">
        <Undo className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Redo className="h-4 w-4" />
      </Button>
    </div>
  )
}

