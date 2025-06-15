import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search, FileText, Calendar, TrendingUp, MapPin, Clock, DollarSign } from "lucide-react"

export default function StudentDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg?height=48&width=48" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">¡Hola, Juan Pérez!</h1>
            <p className="text-gray-600">Ingeniería en Software - 8vo Semestre</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Buscar Empleos
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-600">Postulaciones</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-600">Entrevistas</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">85%</p>
                <p className="text-sm text-gray-600">Perfil Completo</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">240</p>
                <p className="text-sm text-gray-600">Horas Prácticas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Completion */}
          <Card>
            <CardHeader>
              <CardTitle>Completa tu Perfil</CardTitle>
              <CardDescription>Un perfil completo aumenta tus posibilidades de ser contactado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Progreso del perfil</span>
                  <span className="text-sm font-semibold">85%</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Información personal completa</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>CV subido</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Agregar portafolio (opcional)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Completar habilidades técnicas</span>
                  </div>
                </div>
                <Button className="w-full">Completar Perfil</Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle>Mis Postulaciones Recientes</CardTitle>
              <CardDescription>Estado de tus últimas aplicaciones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Desarrollador Frontend React",
                    company: "TechCorp México",
                    status: "En revisión",
                    date: "Hace 2 días",
                    statusColor: "bg-yellow-100 text-yellow-800",
                  },
                  {
                    title: "Analista de Sistemas",
                    company: "DataSolutions",
                    status: "Entrevista programada",
                    date: "Hace 5 días",
                    statusColor: "bg-blue-100 text-blue-800",
                  },
                  {
                    title: "Ingeniero de Software Jr",
                    company: "Innovation Labs",
                    status: "Rechazada",
                    date: "Hace 1 semana",
                    statusColor: "bg-red-100 text-red-800",
                  },
                ].map((application, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">{application.title}</h4>
                      <p className="text-sm text-gray-600">{application.company}</p>
                      <p className="text-xs text-gray-500">{application.date}</p>
                    </div>
                    <Badge className={application.statusColor}>{application.status}</Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Ver Todas las Postulaciones
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recommended Jobs */}
          <Card>
            <CardHeader>
              <CardTitle>Empleos Recomendados</CardTitle>
              <CardDescription>Basado en tu perfil y carrera</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Desarrollador Full Stack",
                    company: "StartupTech",
                    location: "Cancún",
                    salary: "$25,000 - $35,000",
                    type: "Tiempo Completo",
                  },
                  {
                    title: "Practicante de Desarrollo",
                    company: "MegaCorp",
                    location: "Playa del Carmen",
                    salary: "$8,000 - $12,000",
                    type: "Prácticas",
                  },
                ].map((job, index) => (
                  <div key={index} className="p-3 border rounded-lg space-y-2">
                    <h4 className="font-semibold text-sm">{job.title}</h4>
                    <p className="text-xs text-gray-600">{job.company}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <DollarSign className="h-3 w-3" />
                      {job.salary}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {job.type}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Ver Más Empleos
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Próximos Eventos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Feria de Empleo Virtual</p>
                    <p className="text-xs text-gray-600">15 de Junio, 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded">
                    <FileText className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Taller: Preparación de CV</p>
                    <p className="text-xs text-gray-600">20 de Junio, 2:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
