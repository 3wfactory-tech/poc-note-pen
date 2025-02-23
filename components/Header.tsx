"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Save, FileOutputIcon as FileExport, Settings } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"

export default function Header() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input placeholder="Client Name" className="w-64" />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
          <Input placeholder="Session #" className="w-24" type="number" />
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <Save className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <FileExport className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

