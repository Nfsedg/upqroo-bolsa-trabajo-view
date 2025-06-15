import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Search, MapPin, DollarSign, Clock, Building2, Filter, Heart, Share } from "lucide-react"

export default function JobSearch() {
  const jobs = [
    {
      id: 1,
      title: "Desarrollador Frontend React",
      company: "TechCorp México",
      location: "Cancún, Q.Roo",
      type: "Tiempo Completo",
      salary: "$25,000 - $35,000",
      posted: "Hace 2 días",
      description:
        "Buscamos desarrollador frontend con experiencia en React para unirse a nuestro equipo de desarrollo...",
      requirements: ["React", "JavaScript", "CSS", "Git"],
      remote: false,
      featured: true,
    },
    {
      id: 2,
      title: "Analista de Datos Jr",
      company: "DataSolutions",
      location: "Playa del Carmen, Q.Roo",
      type: "Prácticas Profesionales",
      salary: "$8,000 - $12,000",
      posted: "Hace 1 día",
      description: "Oportunidad de prácticas profesionales en análisis de datos y business intelligence...",
      requirements: ["Python", "SQL", "Excel", "Power BI"],
      remote: true,
      featured: false,
    },
    {
      id: 3,
      title: "Ingeniero de Software Full Stack",
      company: "Innovation Labs",
      location: "Remoto",
      type: "Tiempo Completo",
      salary: "$30,000 - $45,000",
      posted: "Hace 3 días",
      description: "Únete a nuestro equipo para desarrollar aplicaciones web modernas y escalables...",
      requirements: ["Node.js", "React", "MongoDB", "AWS"],
      remote: true,
      featured: true,
    },
    {
      id: 4,
      title: "Diseñador UX/UI",
      company: "Creative Studio",
      location: "Cozumel, Q.Roo",
      type: "Medio Tiempo",
      salary: "$15,000 - $20,000",
      posted: "Hace 5 días",
      description: "Buscamos diseñador creativo para crear experiencias digitales excepcionales...",
      requirements: ["Figma", "Adobe XD", "Photoshop", "Prototipado"],
      remote: false,
      featured: false,
    },
    {
      id: 5,
      title: "Administrador de Sistemas",
      company: "TechServices",
      location: "Cancún, Q.Roo",
      type: "Tiempo Completo",
      salary: "$20,000 - $28,000",
      posted: "Hace 1 semana",
      description: "Responsable del mantenimiento y administración de infraestructura IT...",
      requirements: ["Linux", "Windows Server", "Redes", "Virtualización"],
      remote: false,
      featured: false,
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Buscar Empleos</h1>
          <p className="text-gray-600">Encuentra tu próxima oportunidad profesional</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Heart className="mr-2 h-4 w-4" />
            Favoritos
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtros Avanzados
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 items-end">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium">¿Qué trabajo buscas?</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Ej: Desarrollador, Analista, Diseñador..." className="pl-10" />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium">Ubicación</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Ciudad, estado o remoto" className="pl-10" />
              </div>
            </div>
            <Button size="lg">
              <Search className="mr-2 h-4 w-4" />
              Buscar
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Filtros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-medium">Tipo de Empleo</label>
                <div className="space-y-2">
                  {["Tiempo Completo", "Medio Tiempo", "Prácticas Profesionales", "Freelance"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <label className="text-sm font-medium">Modalidad</label>
                <div className="space-y-2">
                  {["Presencial", "Remoto", "Híbrido"].map((mode) => (
                    <div key={mode} className="flex items-center space-x-2">
                      <Checkbox id={mode} />
                      <label htmlFor={mode} className="text-sm">
                        {mode}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <label className="text-sm font-medium">Carrera</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar carrera" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">Ingeniería en Software</SelectItem>
                    <SelectItem value="systems">Ingeniería en Sistemas</SelectItem>
                    <SelectItem value="industrial">Ingeniería Industrial</SelectItem>
                    <SelectItem value="business">Administración</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-3">
                <label className="text-sm font-medium">Rango Salarial</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar rango" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-10">$0 - $10,000</SelectItem>
                    <SelectItem value="10-20">$10,000 - $20,000</SelectItem>
                    <SelectItem value="20-30">$20,000 - $30,000</SelectItem>
                    <SelectItem value="30-40">$30,000 - $40,000</SelectItem>
                    <SelectItem value="40+">$40,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="w-full">
                Limpiar Filtros
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Job Results */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Mostrando {jobs.length} empleos de 47 resultados</p>
            <Select defaultValue="recent">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Más Recientes</SelectItem>
                <SelectItem value="salary">Mejor Salario</SelectItem>
                <SelectItem value="relevance">Más Relevantes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {jobs.map((job) => (
            <Card
              key={job.id}
              className={`hover:shadow-lg transition-shadow ${job.featured ? "border-blue-200 bg-blue-50/30" : ""}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      {job.featured && <Badge className="bg-blue-100 text-blue-800">Destacado</Badge>}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.posted}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">{job.type}</Badge>
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </div>
                    {job.remote && (
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        Remoto
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-gray-700">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1">Postularme</Button>
                    <Button variant="outline">Ver Detalles</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <Button variant="outline" disabled>
              Anterior
            </Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Siguiente</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
