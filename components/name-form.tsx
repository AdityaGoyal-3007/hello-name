"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { submitName } from "@/app/actions"

export function NameForm() {
  const [greeting, setGreeting] = useState<string>("")

  async function handleSubmit(formData: FormData) {
    const result = await submitName(formData)
    setGreeting(result)
  }

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <form action={handleSubmit} className="space-y-4">
          <Input type="text" name="name" placeholder="Enter your name" required />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
        {greeting && <p className="mt-4 text-center text-lg font-semibold">{greeting}</p>}
      </CardContent>
    </Card>
  )
}

