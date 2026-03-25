"use client"

import { Plus, FileText, ScanLine } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onAddClick: () => void
  onResumeClick: () => void
  onScanClick: () => void
}

export function Header({ onAddClick, onResumeClick, onScanClick }: HeaderProps) {
  return (
    <header className="glass-sm sticky top-0 z-40 border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-sm">AI</span>
          </div>
          <h1 className="text-xl font-semibold text-foreground">
            简历投递管理系统
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onScanClick}
            className="gap-2 glass-sm hover:glass"
          >
            <ScanLine className="w-4 h-4" />
            截图识别
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onResumeClick}
            className="gap-2 glass-sm hover:glass"
          >
            <FileText className="w-4 h-4" />
            简历库
          </Button>
          <Button
            size="sm"
            onClick={onAddClick}
            className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg"
          >
            <Plus className="w-4 h-4" />
            新增投递
          </Button>
        </div>
      </div>
    </header>
  )
}
