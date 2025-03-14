import { NameForm } from "@/components/name-form"
import { ExplanationSection } from "@/components/explanation-section"

export default function Home() {
  return (
    <main className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Greetings App</h1>
      <NameForm />
      <ExplanationSection />
    </main>
  )
}

