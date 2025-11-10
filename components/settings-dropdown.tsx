"use client"

import { useState, useEffect } from "react"
import { Settings, Globe, Palette, DollarSign, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const themes = [
  { id: "purple", name: "Purple Dream", primary: "#9333ea", secondary: "#a855f7" },
  { id: "blue", name: "Ocean Blue", primary: "#2563eb", secondary: "#3b82f6" },
  { id: "green", name: "Forest Green", primary: "#059669", secondary: "#10b981" },
  { id: "red", name: "Sunset Red", primary: "#dc2626", secondary: "#ef4444" },
  { id: "orange", name: "Golden Orange", primary: "#ea580c", secondary: "#f97316" },
]

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
]

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "CHF", symbol: "Fr", name: "Swiss Franc" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
  { code: "SAR", symbol: "﷼", name: "Saudi Riyal" },
]

export function SettingsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"theme" | "language" | "currency">("theme")
  const [selectedTheme, setSelectedTheme] = useState("purple")
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [selectedCurrency, setSelectedCurrency] = useState("USD")

  const handleThemeChange = (themeId: string) => {
    setSelectedTheme(themeId)
    const theme = themes.find((t) => t.id === themeId)
    if (theme) {
      document.documentElement.style.setProperty("--theme-primary", theme.primary)
      document.documentElement.style.setProperty("--theme-secondary", theme.secondary)
      document.documentElement.className = `theme-${themeId}`
      localStorage.setItem("travelinn-theme", themeId)
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("travelinn-theme") || "purple"
    handleThemeChange(savedTheme)
  }, [])

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/10 rounded-full"
      >
        <Settings className="w-5 h-5" />
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-white/10">
              <button
                onClick={() => setActiveTab("theme")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "theme" ? "bg-purple-600 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Palette className="w-4 h-4" />
                Theme
              </button>
              <button
                onClick={() => setActiveTab("language")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "language"
                    ? "bg-purple-600 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Globe className="w-4 h-4" />
                Language
              </button>
              <button
                onClick={() => setActiveTab("currency")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "currency"
                    ? "bg-purple-600 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <DollarSign className="w-4 h-4" />
                Currency
              </button>
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {activeTab === "theme" && (
                <div className="space-y-2">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeChange(theme.id)}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full"
                          style={{
                            background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                          }}
                        />
                        <span className="text-white font-medium">{theme.name}</span>
                      </div>
                      {selectedTheme === theme.id && <Check className="w-5 h-5 text-purple-400" />}
                    </button>
                  ))}
                </div>
              )}

              {activeTab === "language" && (
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="text-white font-medium">{lang.name}</span>
                      </div>
                      {selectedLanguage === lang.code && <Check className="w-5 h-5 text-purple-400" />}
                    </button>
                  ))}
                </div>
              )}

              {activeTab === "currency" && (
                <div className="space-y-2">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => setSelectedCurrency(currency.code)}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-purple-400 w-8">{currency.symbol}</span>
                        <div className="text-left">
                          <div className="text-white font-medium">{currency.code}</div>
                          <div className="text-white/60 text-sm">{currency.name}</div>
                        </div>
                      </div>
                      {selectedCurrency === currency.code && <Check className="w-5 h-5 text-purple-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
