"use client"

import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ExperienceItem = {
  role: string
  company?: string
  period?: string
  details?: string[]
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "AusBiz Consulting",
    period: "2023 - Present",
    details: [
      "Built responsive UI with Next.js and Tailwind",
      "Improved search performance and accessibility",
    ],
  },
  {
    role: "Full Stack Intern",
    company: "Startup Labs",
    period: "2022 - 2023",
    details: ["Implemented API endpoints with Prisma and Postgres", "Wrote integration tests and docs"],
  },
  {
    role: "Web Developer (Freelance)",
    period: "2020 - 2022",
    details: ["Delivered small business websites", "Focused on performance and SEO"],
  },
]

export default function Experience() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // small delay so the transition is visible on mount
    const id = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(id)
  }, [])

  return (
    <Card className="mb-8 overflow-hidden">
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {EXPERIENCE.map((item, i) => (
            <li
              key={i}
              className={`transform transition-all duration-700 ease-out ${
                visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="font-semibold">
                    {item.role}
                    {item.company ? (
                      <span className="ml-2 text-sm font-normal text-muted-foreground">@ {item.company}</span>
                    ) : null}
                  </div>
                  {item.period ? <div className="text-sm text-muted-foreground">{item.period}</div> : null}
                </div>
              </div>
              {item.details?.length ? (
                <ul className="mt-2 ml-4 list-disc list-inside text-sm text-muted-foreground">
                  {item.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
