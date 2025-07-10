import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Truck, Route, Clock, Users, Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"

export default function TransportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo-no-bg.svg" alt="Lupora Solutions Logo" width={120} height={60} className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link
              href="/it-solutions"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-colors"
            >
              IT Solutions
            </Link>
            <Link href="#contact" className="text-orange-600 font-medium">
              Contact
            </Link>
            <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-colors">
              Login
            </Link>
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-orange-500 rounded-full">
                <Truck className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-orange-500">Lupora</span> Transportplanning
            </h1>
            <p className="text-2xl text-orange-600 font-medium mb-4">
              Efficiënte transportcoördinatie – snel, betrouwbaar en flexibel geregeld
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Bij Lupora Solutions kun je terecht voor het inplannen van transporten van A naar B. Of het nu gaat om een
              enkele zending of structurele ondersteuning, ik zorg voor een vlekkeloze planning en communicatie met
              vervoerders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Transport Aanvragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 bg-transparent"
              >
                Meer Informatie
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Wat ik voor je regel</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Van handmatige planning tot geautomatiseerde oplossingen – ik zorg ervoor dat jouw transport vlekkeloos
              verloopt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Route className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Transportplanning</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Handmatige of geautomatiseerde transportplanning op maat
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Routeoptimalisatie</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Optimalisatie op basis van kosten en levertijden
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Vervoerderscontact</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Direct contact met vervoerders en planning op maat
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Opvolging</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Tijdige opvolging van zendingen en eventuele afwijkingen
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">🔜 Binnenkort Beschikbaar</h2>
            <Card className="border-0 shadow-xl bg-white dark:bg-gray-900">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-orange-500 mb-4">Slimme SaaS-oplossing</h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Een intelligente transportplanning tool waarmee klanten hun eigen zendingen snel en eenvoudig kunnen
                  beheren. Automatische routeoptimalisatie, real-time tracking en directe communicatie met vervoerders.
                </p>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Houd Me Op De Hoogte
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Transport Projecten</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ontdek hoe ik andere bedrijven heb geholpen met hun transportuitdagingen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Project 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <Truck className="h-16 w-16 text-orange-600" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">LogiFlow Optimalisatie</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Transportplanning systeem voor middelgroot logistiek bedrijf. 30% kostenbesparing door slimme
                  routeoptimalisatie en betere vervoerderscoördinatie.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Route Planning</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Cost Reduction</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Automation</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <Route className="h-16 w-16 text-orange-600" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Express Delivery Network</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Geautomatiseerde planning voor expresszendingen. Real-time tracking en directe communicatie met
                  klanten resulteerde in 95% on-time delivery.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Real-time Tracking</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Express Delivery</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Customer Portal</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <Users className="h-16 w-16 text-orange-600" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Multi-Carrier Platform</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Centraal platform voor het beheren van meerdere vervoerders. Automatische tariefvergelijking en
                  booking systeem voor optimale kostenbesparing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Multi-Carrier</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Price Comparison</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Booking System</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Wat Transport Klanten Zeggen</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Review 1 */}
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "De transportplanning is nu veel efficiënter. We besparen tijd en kosten dankzij de slimme oplossing
                  van Lupora Solutions. Uitstekende service!"
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

            {/* Review 2 */}
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "Fantastische samenwerking! De routeoptimalisatie heeft ons 25% brandstofkosten bespaard. Zeer
                  professioneel en betrouwbaar."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-700 font-bold">PV</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Peter van Dijk</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">CEO, TransportPlus BV</p>
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
                  "De communicatie met vervoerders verloopt nu veel soepeler. Het systeem is intuïtief en de support is
                  uitstekend. Aanrader!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-700 font-bold">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Maria Konings</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Logistics Coordinator, FastTrack</p>
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Transport Aanvragen</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ben je op zoek naar ondersteuning bij je transport? Stuur je aanvraag of vraag naar
              transport@lupora-solutions.com
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-xl border-0 bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Transport Aanvraag</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Vul het formulier in en ik neem binnen 24 uur contact met je op.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Voornaam</label>
                    <Input
                      placeholder="Jan"
                      className="border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Achternaam</label>
                    <Input
                      placeholder="Jansen"
                      className="border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <Input
                    type="email"
                    placeholder="jan@bedrijf.nl"
                    className="border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Bedrijf</label>
                  <Input
                    placeholder="Jouw Bedrijfsnaam"
                    className="border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Type Ondersteuning</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <option value="">Selecteer type ondersteuning</option>
                    <option value="single">Enkele zending</option>
                    <option value="structural">Structurele ondersteuning</option>
                    <option value="automation">Automatisering</option>
                    <option value="consultation">Advies gesprek</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Bericht</label>
                  <Textarea
                    placeholder="Beschrijf je transportuitdaging of vraag..."
                    className="border-gray-300 min-h-[120px] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
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
                      <div className="p-3 bg-orange-100 rounded-full">
                        <Mail className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Email Transport</h4>
                        <p className="text-gray-600 dark:text-gray-300">transport@lupora-solutions.com</p>
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
                      <div className="p-3 bg-orange-100 rounded-full">
                        <MapPin className="h-6 w-6 text-orange-500" />
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

              <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Klaar om te starten?</h3>
                  <p className="mb-6 opacity-90">
                    Plan een gratis consultatie om je transportuitdagingen te bespreken en te ontdekken hoe ik je kan
                    helpen.
                  </p>
                  <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
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
              <p className="text-gray-400">Efficiënte transportcoördinatie – snel, betrouwbaar en flexibel geregeld.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Transport Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Transportplanning</li>
                <li>Routeoptimalisatie</li>
                <li>Vervoerderscontact</li>
                <li>Zendingopvolging</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">transport@lupora-solutions.com</p>
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
