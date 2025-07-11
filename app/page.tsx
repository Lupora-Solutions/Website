import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Truck, Monitor, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Header from "@/components/header"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <Header />

      {/* Main Content */}

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Van jouw visie naar een
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                {" "}
                werkend product
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Wat jij voor je ziet, bouwen wij – met techniek die klopt én presteert. wij realiseren ideeën waar jij van
              droomt, van softwareontwikkeling tot transportautomatisering. Jouw idee. Onze code. Eén werkende
              oplossing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 bg-transparent"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Onze Specialisaties</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Als bedrijf combineren wij technische diepgang met een flexibele aanpak. Jij schakelt ons
              in voor alles van losse componenten tot complete projecten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* IT Sector */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">IT-Oplossingen</CardTitle>
                <CardDescription className="text-blue-700 text-lg">
                  Maatwerk softwareontwikkeling en digitale oplossingen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Back-end ontwikkeling (PHP, .NET, Python)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Front-end ontwikkeling (Vue, Nuxt, Angular)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Cross-platform apps (Flutter)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">API-koppelingen & maatwerkoplossingen</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Remote of op locatie beschikbaar</p>
                  </div>
                </div>
                <Link href="/it-solutions">
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More About IT Services
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Transport & Logistics Sector */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-orange-900">Lupora Transportplanning</CardTitle>
                <CardDescription className="text-orange-700 text-lg">
                  Efficiënte transportcoördinatie – snel, betrouwbaar en flexibel geregeld
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 mb-4">
                  Bij Lupora Solutions kun je terecht voor het inplannen van transporten van A naar B. Of het nu gaat om
                  een enkele zending of structurele ondersteuning, ik zorg voor een vlekkeloze planning en communicatie
                  met vervoerders.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Handmatige of geautomatiseerde transportplanning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Routeoptimalisatie op basis van kosten en levertijden</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Direct contact met vervoerders en planning op maat</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Tijdige opvolging van zendingen en eventuele afwijkingen</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">🔜 Binnenkort: Slimme SaaS-oplossing voor transportplanning</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Link href="/transport">
                    <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
                      Learn More About Transport Services
                    </Button>
                  </Link>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Direct contact voor transport:</p>
                    <a
                      href="mailto:transport@lupora-solutions.com"
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      transport@lupora-solutions.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Lupora Solutions */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Waarom Lupora Solutions?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">👤</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Persoonlijk & Direct</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Betrokken aanpak met duidelijke communicatie</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 font-bold text-xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Geen Ruis</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Alleen duidelijke afspraken en werkende oplossingen
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">🧠</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Technisch & Zakelijk</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Sterk technisch, maar denkt ook zakelijk mee</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">📞</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Eén Aanspreekpunt</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Van start tot oplevering, alles via één persoon
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio & Reviews Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio & Reviews</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ontdek enkele van mijn recente projecten en lees wat klanten zeggen over de samenwerking met Lupora
              Solutions.
            </p>
          </div>

          {/* Portfolio Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Recent Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* IT Project 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Monitor className="h-16 w-16 text-blue-600" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      IT Solutions
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">E-commerce Platform</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Maatwerk webshop ontwikkeld met Vue.js en PHP backend. Inclusief voorraadbeheersysteem en
                    API-koppelingen met externe leveranciers.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Vue.js</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">PHP</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">API Integration</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              {/* Transport Project */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Truck className="h-16 w-16 text-orange-600" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      Transport
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Logistiek Optimalisatie</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Transportplanning systeem voor middelgroot logistiek bedrijf. 30% kostenbesparing door slimme
                    routeoptimalisatie.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Route Planning</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Cost Optimization</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Real-time Tracking</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              {/* IT Project 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Monitor className="h-16 w-16 text-blue-600" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      IT Solutions
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">CRM Systeem</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Klantbeheersysteem ontwikkeld met .NET Framework en Angular frontend. Automatisering van
                    klantcommunicatie en rapportage.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">.NET</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Angular</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Automation</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Wat Klanten Zeggen</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Review 1 */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
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
              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "De transportplanning is nu veel efficiënter. We besparen tijd en kosten dankzij de slimme oplossing
                    van Lupora Solutions."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-700 font-bold">SJ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Sandra Jansen</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Operations Manager, LogiFlow</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Review 3 */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "Technisch zeer sterk en denkt goed mee over de zakelijke kant. Een echte aanrader voor maatwerk
                    ontwikkeling!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-700 font-bold">RK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Robert Klaassen</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Founder, InnovatieHub</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Klaar voor jouw project?</h3>
                <p className="text-xl mb-8 opacity-90">
                  Laten we samen kijken hoe ik jouw idee kan omzetten naar een werkende oplossing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Start een Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    Bekijk Meer Projecten
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Neem Contact Op</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Heb je een idee dat je wilt realiseren? Of zoek je een freelance ontwikkelaar die ook het grotere plaatje
              begrijpt? Stuur me een bericht – ik denk graag met je mee.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                    <Input placeholder="John" className="border-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                    <Input placeholder="Doe" className="border-gray-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <Input type="email" placeholder="john@example.com" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Company</label>
                  <Input placeholder="Your Company Name" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sector of Interest</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select a sector</option>
                    <option value="it">IT-Oplossingen</option>
                    <option value="transport">Lupora Transportplanning</option>
                    <option value="both">Beide specialisaties</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <Textarea
                    placeholder="Tell us about your project or requirements..."
                    className="border-gray-300 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0 bg-white dark:bg-gray-900">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">info@lupora-solutions.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-orange-100 rounded-full">
                        <Phone className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Telefoon</h4>
                        <p className="text-gray-600 dark:text-gray-300">06 12345678</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
                        <p className="text-gray-600 dark:text-gray-300">123 Business Avenue</p>
                        <p className="text-gray-600 dark:text-gray-300">Suite 100, City, State 12345</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 opacity-90">
                    Schedule a free consultation to discuss your project requirements and discover how we can help
                    transform your business.
                  </p>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Schedule Consultation
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
                alt="Company Logo"
                width={120}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">Van jouw visie naar een werkend product. Lupora Solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>IT Solutions</li>
                <li>Transport & Logistics</li>
                <li>Digital Transformation</li>
                <li>Consulting Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400 mb-2">Follow us for updates and insights</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  Twitter
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
