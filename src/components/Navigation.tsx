"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Bug,
  Zap,
  Settings,
  Globe,
  Brain,
  MessageSquare,
  FileText,
  Sun,
  Moon,
} from "lucide-react"

const navigationData = [
  {
    title: "QA Foundations",
    icon: BookOpen,
    children: [
      { title: "What is QA?", href: "/qa-foundations/what-is-qa" },
      { title: "SDLC", href: "/qa-foundations/sdlc" },
      { title: "STLC", href: "/qa-foundations/stlc" },
      { title: "Testing Principles", href: "/qa-foundations/testing-principles" },
      { title: "Testing Types", href: "/qa-foundations/testing-types" },
      { title: "Performance Testing", href: "/qa-foundations/performance-testing" },
      { title: "Security Testing", href: "/qa-foundations/security-testing" },
      { title: "QA Standards", href: "/qa-foundations/qa-standards" },
      { title: "Testing Pyramid", href: "/qa-foundations/testing-pyramid" },
      { title: "Shift-left/right", href: "/qa-foundations/shift-left-right" },
      { title: "Risk-based Testing", href: "/qa-foundations/risk-based-testing" },
      { title: "Entry/Exit Criteria", href: "/qa-foundations/entry-exit-criteria" },
      { title: "Test Strategy", href: "/qa-foundations/test-strategy" },
      { title: "TDD & BDD", href: "/qa-foundations/tdd-bdd" },
    ],
  },
  {
    title: "Manual Testing",
    icon: Bug,
    children: [
      { title: "What is Manual Testing?", href: "/manual-testing/what-is-manual-testing" },
      { title: "Test Cases", href: "/manual-testing/test-cases" },
      { title: "Test Scenarios", href: "/manual-testing/test-scenarios" },
      { title: "Bug Life Cycle", href: "/manual-testing/bug-life-cycle" },
      { title: "Bug Triage", href: "/manual-testing/bug-triage" },
      { title: "Severity vs Priority", href: "/manual-testing/severity-vs-priority" },
      { title: "Exploratory Testing", href: "/manual-testing/exploratory-testing" },
      { title: "Test Design Techniques", href: "/manual-testing/test-design-techniques" },
      { title: "Mindmaps", href: "/manual-testing/mindmaps" },
      { title: "Interview Q&A", href: "/manual-testing/interview-qa" },
    ],
  },
  {
    title: "Automation Testing",
    icon: Zap,
    children: [
      { title: "Principles of Automation", href: "/automation-testing/principles-of-automation" },
      { title: "When to Automate", href: "/automation-testing/when-to-automate" },
      { title: "Automation Framework Architecture", href: "/automation-testing/framework-architecture" },
      { title: "Page Object Model", href: "/automation-testing/page-object-model" },
      { title: "Test Data Management", href: "/automation-testing/test-data-management" },
      { title: "CI/CD Basics", href: "/automation-testing/ci-cd-basics" },
      { title: "Assertions / Wait Strategies", href: "/automation-testing/assertions-waits" },
      { title: "Selector Strategy", href: "/automation-testing/selector-strategy" },
      { title: "Interview Q&A", href: "/automation-testing/interview-qa" },
    ],
  },
  {
    title: "Framework Specialisation",
    icon: Settings,
    children: [
      { title: "Playwright", href: "/frameworks/playwright" },
      { title: "Cypress", href: "/frameworks/cypress" },
      { title: "WebdriverIO", href: "/frameworks/webdriverio" },
      { title: "Appium", href: "/frameworks/appium" },
      { title: "Detox", href: "/frameworks/detox" },
      { title: "Selenium", href: "/frameworks/selenium" },
      { title: "Maestro", href: "/frameworks/maestro" },
      { title: "API Automation", href: "/frameworks/api-automation" },
    ],
  },
  {
    title: "API & Backend Testing",
    icon: Globe,
    children: [
      { title: "REST API Basics", href: "/api-backend/rest-api-basics" },
      { title: "HTTP Methods", href: "/api-backend/http-methods" },
      { title: "Headers/Params/Body", href: "/api-backend/headers-params-body" },
      { title: "Status Codes", href: "/api-backend/status-codes" },
      { title: "End-to-end API Examples", href: "/api-backend/end-to-end-examples" },
      { title: "Postman Guide", href: "/api-backend/postman-guide" },
      { title: "API Collections/Environments", href: "/api-backend/collections-environments" },
      { title: "Rate Limiting Tests", href: "/api-backend/rate-limiting" },
      { title: "Security Basics", href: "/api-backend/security-basics" },
      { title: "SQL Basics", href: "/api-backend/sql-basics" },
      { title: "ETL Testing", href: "/api-backend/etl-testing" },
      { title: "API Automation Frameworks", href: "/api-backend/automation-frameworks" },
    ],
  },
  {
    title: "AI in Testing",
    icon: Brain,
    children: [
      { title: "AI Testing Fundamentals", href: "/ai-testing/fundamentals" },
      { title: "Test Case Generation", href: "/ai-testing/test-case-generation" },
      { title: "AI for Debugging", href: "/ai-testing/ai-debugging" },
      { title: "Prompt Engineering", href: "/ai-testing/prompt-engineering" },
      { title: "AI-powered Automation", href: "/ai-testing/ai-automation" },
      { title: "AI-based Exploratory Testing", href: "/ai-testing/exploratory-testing" },
      { title: "Self-healing Locators", href: "/ai-testing/self-healing-locators" },
      { title: "Limitations + Risks", href: "/ai-testing/limitations-risks" },
      { title: "Interview Questions", href: "/ai-testing/interview-questions" },
    ],
  },
  {
    title: "Interview Training",
    icon: MessageSquare,
    children: [
      { title: "QA Teleprompter Page", href: "/interview-training/teleprompter" },
      { title: "150+ QA Interview Q&A", href: "/interview-training/qa-interview-qa" },
      { title: "Manual Testing Q&A", href: "/interview-training/manual-testing-qa" },
      { title: "Automation Testing Q&A", href: "/interview-training/automation-testing-qa" },
      { title: "API Testing Q&A", href: "/interview-training/api-testing-qa" },
      { title: "Mobile Testing Q&A", href: "/interview-training/mobile-testing-qa" },
      { title: "DevOps Testing Q&A", href: "/interview-training/devops-testing-qa" },
      { title: "AI Testing Q&A", href: "/interview-training/ai-testing-qa" },
      { title: "Scenario-based Questions", href: "/interview-training/scenario-based" },
    ],
  },
  {
    title: "Glossary",
    icon: FileText,
    children: [
      { title: "QA Definitions", href: "/glossary/qa-definitions" },
      { title: "SDLC Definitions", href: "/glossary/sdlc-definitions" },
      { title: "Automation Terminology", href: "/glossary/automation-terminology" },
      { title: "API Terminology", href: "/glossary/api-terminology" },
      { title: "Mobile Automation Glossary", href: "/glossary/mobile-automation" },
      { title: "Git/GitHub Glossary", href: "/glossary/git-github" },
      { title: "CI/CD Glossary", href: "/glossary/ci-cd" },
    ],
  },
  {
    title: "Case Studies",
    icon: BookOpen,
    children: [
      { title: "Manual Testing Scenarios", href: "/case-studies/manual-testing" },
      { title: "Automation Testing Scenarios", href: "/case-studies/automation-testing" },
      { title: "Framework Scenarios", href: "/case-studies/frameworks" },
      { title: "API Testing Scenarios", href: "/case-studies/api-testing" },
      { title: "AI Testing Scenarios", href: "/case-studies/ai-testing" },
    ],
  },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-full justify-start gap-2 mb-4"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      Toggle Theme
    </Button>
  )
}

export function Navigation() {
  return (
    <div className="w-full lg:w-64 lg:sticky lg:top-0 bg-gray-100 dark:bg-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-4">The QA Bible</h1>
      <ThemeToggle />
      <Accordion type="single" collapsible className="w-full">
        {navigationData.map((section, index) => {
          const Icon = section.icon
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="flex items-center gap-2">
                <Icon className="w-5 h-5" />
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1 pl-7">
                  {section.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link
                        href={child.href}
                        className="block py-1 px-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-sm"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}