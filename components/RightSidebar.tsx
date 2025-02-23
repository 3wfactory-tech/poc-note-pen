import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function RightSidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4 flex flex-col space-y-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select template" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="initial">Initial Session</SelectItem>
          <SelectItem value="progress">Progress Notes</SelectItem>
          <SelectItem value="treatment">Treatment Plan</SelectItem>
          <SelectItem value="mood">Mood Tracking</SelectItem>
        </SelectContent>
      </Select>

      <Card>
        <CardHeader>
          <CardTitle>Recent Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="text-sm">Session #5 - 2023-04-15</li>
            <li className="text-sm">Session #4 - 2023-04-01</li>
            <li className="text-sm">Session #3 - 2023-03-15</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <textarea className="w-full h-24 text-sm border rounded-md p-2" placeholder="Add a quick note..."></textarea>
        </CardContent>
      </Card>

      <div className="flex items-center space-x-2">
        <Input placeholder="Search sessions" />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

