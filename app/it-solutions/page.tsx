import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Monitor, Code, Database, Smartphone, Mail, Phone, MapPin, ArrowRight, Zap } from "lucide-react"
import Header from "@/components/header"

export default function ITSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-blue-600 rounded-full">
                <Monitor className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600">IT-Oplossingen</span> op Maat
            </h1>
            <p className="text-2xl text-blue-600 font-medium mb-4">
              Maatwerk softwareontwikkeling en digitale oplossingen
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Ik help bedrijven en ondernemers bij het ontwikkelen van maatwerk IT-oplossingen. Als zelfstandige
              combineer ik technische diepgang met een flexibele aanpak. Je schakelt mij in voor alles van losse
              componenten tot complete projecten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Start een Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
              >
                Bekijk Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specializations */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technische Specialisaties</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Van back-end tot front-end, van web tot mobile – ik beheers de technologieën die jouw project tot een
              succes maken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Back-end Ontwikkeling</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Robuuste server-side oplossingen</p>
                <div className="space-y-1">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded mr-1">PHP</span>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded mr-1">.NET</span>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Python</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Front-end Ontwikkeling</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Moderne gebruikersinterfaces</p>
                <div className="space-y-1">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded mr-1">Vue</span>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded mr-1">Nuxt</span>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Angular</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Cross-platform Apps</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Mobile applicaties voor alle platforms</p>
                <div className="space-y-1">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded mr-1">Flutter</span>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded mr-1">iOS</span>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Android</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">API & Integraties</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Koppelingen en maatwerkoplossingen</p>
                <div className="space-y-1">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded mr-1">
                    REST API
                  </span>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded mr-1">GraphQL</span>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Webhooks</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flexible Approach */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Flexibele Inzet</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Of je nu een losse component nodig hebt of een volledig project wilt realiseren – ik pas mijn aanpak aan
              jouw behoeften aan.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Remote Samenwerking</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Efficiënt werken vanuit mijn eigen omgeving met moderne communicatietools en projectmanagement.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Meer Info
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Op Locatie</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Direct samenwerken met jouw team voor intensieve projecten en kennisoverdracht.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Meer Info
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">IT Projecten</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ontdek enkele van mijn recente IT-projecten en de technologieën die ik heb gebruikt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Project 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Monitor className="h-16 w-16 text-blue-600" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">E-commerce Platform</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Maatwerk webshop ontwikkeld met Vue.js en PHP backend. Inclusief voorraadbeheersysteem en
                  API-koppelingen met externe leveranciers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Vue.js</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">PHP</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">MySQL</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">API Integration</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Database className="h-16 w-16 text-blue-600" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">CRM Systeem</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Klantbeheersysteem ontwikkeld met .NET Framework en Angular frontend. Automatisering van
                  klantcommunicatie en rapportage.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">.NET</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Angular</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">SQL Server</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Automation</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Smartphone className="h-16 w-16 text-blue-600" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mobile App</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Cross-platform mobile applicatie ontwikkeld met Flutter. Real-time synchronisatie met web platform en
                  offline functionaliteit.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Flutter</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Dart</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Firebase</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Offline Support</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Wat IT Klanten Zeggen</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Review 1 */}
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "Uitstekende samenwerking! Het project werd op tijd opgeleverd en de communicatie was helder en
                  direct. Precies wat we zochten."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-700 font-bold">MV</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Mark van der Berg</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">CEO, TechStart BV</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "Technisch zeer sterk en denkt goed mee over de zakelijke kant. Een echte aanrader voor maatwerk
                  ontwikkeling!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-700 font-bold">RK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Robert Klaassen</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Founder, InnovatieHub</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "De API-integratie verliep vlekkeloos. Goede documentatie en uitstekende ondersteuning tijdens het
                  hele proces."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-700 font-bold">LM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Lisa Mulder</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">CTO, DataFlow Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Start een IT Project</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Heb je een idee voor een IT-oplossing? Laten we samen kijken hoe ik jouw visie kan omzetten naar een
              werkend product.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Project Aanvraag</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Vul het formulier in en ik neem binnen 24 uur contact met je op.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Voornaam</label>
                    <Input placeholder="Jan" className="border-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Achternaam</label>
                    <Input placeholder="Jansen" className="border-gray-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <Input type="email" placeholder="jan@bedrijf.nl" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Bedrijf</label>
                  <Input placeholder="Jouw Bedrijfsnaam" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecteer project type</option>
                    <option value="web">Web Applicatie</option>
                    <option value="mobile">Mobile App</option>
                    <option value="api">API Ontwikkeling</option>
                    <option value="integration">Systeem Integratie</option>
                    <option value="consultation">Advies Gesprek</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Beschrijving</label>
                  <Textarea
                    placeholder="Beschrijf je project idee of IT-uitdaging..."
                    className="border-gray-300 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Verstuur Aanvraag
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0 bg-white dark:bg-gray-900">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Informatie</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Email IT</h4>
                        <p className="text-gray-600 dark:text-gray-300">info@lupora-solutions.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Telefoon</h4>
                        <p className="text-gray-600 dark:text-gray-300">06 12345678</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Adres</h4>
                        <p className="text-gray-600 dark:text-gray-300">123 Business Avenue</p>
                        <p className="text-gray-600 dark:text-gray-300">Suite 100, City, State 12345</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Klaar om te starten?</h3>
                  <p className="mb-6 opacity-90">
                    Plan een gratis consultatie om je IT-uitdaging te bespreken en te ontdekken hoe ik je kan helpen.
                  </p>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Plan Consultatie
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/logo-no-bg.svg"
                alt="Lupora Solutions Logo"
                width={120}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">Maatwerk IT-oplossingen met technische diepgang en flexibele aanpak.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">IT Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Ontwikkeling</li>
                <li>Mobile Apps</li>
                <li>API Integraties</li>
                <li>Maatwerk Software</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">info@lupora-solutions.com</p>
              <p className="text-gray-400">06 12345678</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lupora Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
