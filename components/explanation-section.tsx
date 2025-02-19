import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ExplanationSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How it works</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Server Actions:</strong> The form submission is handled by a server action, which processes the
              input on the server and returns a response.
            </li>
            <li>
              <strong>Shadcn UI:</strong> We use Shadcn UI components like Button, Input, Card, and Accordion for
              consistent styling.
            </li>
            <li>
              <strong>Next.js 15.1 Features:</strong> This app leverages the App Router, Server Components, and enhanced
              Server Actions support introduced in Next.js 15.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

