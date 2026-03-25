"use client"

import { Briefcase, Send, MessageSquare, XCircle, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Application } from "@/lib/types"

interface StatsPanelProps {
  applications: Application[]
}

export function StatsPanel({ applications }: StatsPanelProps) {
  const stats = {
    total: applications.length,
    applied: applications.filter((a) => a.status !== "未投递").length,
    interviewing: applications.filter((a) =>
      ["一面", "二面", "三面"].includes(a.status)
    ).length,
    rejected: applications.filter((a) => a.status === "已拒").length,
    hired: applications.filter((a) => a.status === "录用").length,
  }

  const items = [
    {
      label: "总投递",
      value: stats.total,
      icon: Briefcase,
      color: "text-foreground",
      bg: "glass-sm",
    },
    {
      label: "已投递",
      value: stats.applied,
      icon: Send,
      color: "text-blue-600 dark:text-blue-400",
      bg: "glass-sm",
    },
    {
      label: "面试中",
      value: stats.interviewing,
      icon: MessageSquare,
      color: "text-amber-600 dark:text-amber-400",
      bg: "glass-sm",
    },
    {
      label: "已拒",
      value: stats.rejected,
      icon: XCircle,
      color: "text-red-500 dark:text-red-400",
      bg: "glass-sm",
    },
    {
      label: "录用",
      value: stats.hired,
      icon: CheckCircle,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "glass-sm",
    },
  ]

  return (
    <Card className="p-4">
      <div className="grid grid-cols-5 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 p-3 rounded-xl ${item.bg} border border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-105`}
          >
            <div className={`p-2 rounded-lg bg-white/30 dark:bg-white/10 backdrop-blur-sm`}>
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
