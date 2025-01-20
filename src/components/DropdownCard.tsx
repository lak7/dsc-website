'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface DropdownCardProps {
  title: string;
  children: React.ReactNode;
}

export function DropdownCard({ title, children }: DropdownCardProps) {
  return (
    <Card className="w-full overflow-hidden">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <p className='font-semibold text-[1.9rem]'>{title}</p>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent>
              {children}
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}