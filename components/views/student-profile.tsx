import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Upload,
  Download,
  Edit,
  Plus,
  X,
  ExternalLink,
  User,
  GraduationCap,
  Briefcase,
  Code,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function StudentProfile() {
  const skills = {
    programming: ["JavaScript", "Python", "Java", "C#", "TypeScript"],
    frameworks: ["React", "Node.js", "Express", "Next.js", "Bootstrap"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    tools: ["Git", "Docker", "VS Code", "Figma", "Postman"],
    soft: ["Trabajo en Equipo", "Comunicación", "Resolución de Problemas", "Liderazgo", "Adaptabilidad"],
  }

  const experiences = [
    {
      title: "Desarrollador Frontend (Prácticas)",
      company: "TechStart Solutions",
      period: "Enero 2024 - Presente",
      description:
        "Desarrollo de interfaces web responsivas usando React y Tailwind CSS. Colaboración en equipo ágil para la creación de aplicaciones web modernas.",
      current: true,
    },
    {
      title: "Asistente de Desarrollo",
      company: "Freelance",
      period: "Junio 2023 - Diciembre 2023",
      description:
        "Desarrollo de sitios web para pequeñas empresas locales. Mantenimiento y actualización de sistemas existentes.",
      current: false,
    },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Mi Perfil</h1>
          <p className="text-muted-foreground">Gestiona tu información profesional</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Completado</p>
            <p className="text-2xl font-bold text-green-600">85%</p>
          </div>
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Editar Perfil
          </Button>
        </div>
      </div>

      {/* Profile Completion Alert */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <strong>Completa tu perfil:</strong> Agrega tus habilidades técnicas para aumentar tus posibilidades de ser
          contactado por empresas.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Personal
          </TabsTrigger>
          <TabsTrigger value="academic" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Académico
          </TabsTrigger>
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Experiencia
          </TabsTrigger>
          <TabsTrigger value="skills" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Habilidades
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Documentos
          </TabsTrigger>
        </TabsList>

        {/* Personal Information */}
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Información Personal
              </CardTitle>
              <CardDescription>Datos básicos de tu perfil profesional</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" />
                    <AvatarFallback className="text-2xl">JP</AvatarFallback>
                  </Avatar>
                  <div className="text-center space-y-2">
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Cambiar Foto
                    </Button>
                    <p className="text-xs text-muted-foreground">JPG, PNG. Max 2MB</p>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre(s)</Label>
                      <Input id="firstName" defaultValue="Juan Carlos" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellidos</Label>
                      <Input id="lastName" defaultValue="Pérez González" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Institucional</Label>
                      <Input id="email" defaultValue="juan.perez@upqroo.edu.mx" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" defaultValue="(998) 123-4567" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Textarea
                  id="address"
                  defaultValue="Av. Universidad #123, Col. Centro, Cancún, Q.Roo, CP 77500"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Descripción Profesional</Label>
                <Textarea
                  id="bio"
                  placeholder="Describe brevemente tu perfil profesional, objetivos y lo que te hace único..."
                  defaultValue="Estudiante de Ingeniería en Software con pasión por el desarrollo web y móvil. Experiencia en React, Node.js y bases de datos. Busco oportunidades para aplicar mis conocimientos en proyectos reales y continuar mi crecimiento profesional."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Academic Information */}
        <TabsContent value="academic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Información Académica
              </CardTitle>
              <CardDescription>Detalles de tu formación universitaria</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="career">Carrera</Label>
                  <Select defaultValue="software">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software">Ingeniería en Software</SelectItem>
                      <SelectItem value="systems">Ingeniería en Sistemas</SelectItem>
                      <SelectItem value="industrial">Ingeniería Industrial</SelectItem>
                      <SelectItem value="business">Licenciatura en Administración</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="semester">Semestre Actual</Label>
                  <Select defaultValue="8">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sem) => (
                        <SelectItem key={sem} value={sem.toString()}>
                          {sem}° Semestre
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gpa">Promedio General</Label>
                  <Input id="gpa" defaultValue="8.7" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Estado Académico</Label>
                  <Select defaultValue="active">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Estudiante Activo</SelectItem>
                      <SelectItem value="graduate">Egresado</SelectItem>
                      <SelectItem value="thesis">En Proceso de Titulación</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expectedGraduation">Graduación Esperada</Label>
                  <Input id="expectedGraduation" type="date" defaultValue="2025-07-15" />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">Materias Destacadas</Label>
                <div className="flex flex-wrap gap-2">
                  {["Desarrollo Web", "Base de Datos", "Ingeniería de Software", "Programación Móvil", "Redes"].map(
                    (subject, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {subject}
                        <X className="h-3 w-3 cursor-pointer hover:text-destructive" />
                      </Badge>
                    ),
                  )}
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Experience */}
        <TabsContent value="experience" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Experiencia Laboral
                  </CardTitle>
                  <CardDescription>Historial de empleos, prácticas y proyectos</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Agregar Experiencia
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                        {exp.current && (
                          <Badge variant="secondary" className="mt-2">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Actual
                          </Badge>
                        )}
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills */}
        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Habilidades Técnicas
              </CardTitle>
              <CardDescription>Tecnologías, herramientas y competencias</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Lenguajes de Programación</Label>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill, index) => (
                      <Badge key={index} variant="default" className="flex items-center gap-1">
                        {skill}
                        <X className="h-3 w-3 cursor-pointer hover:text-destructive-foreground" />
                      </Badge>
                    ))}
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-semibold">Frameworks y Librerías</Label>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {skill}
                        <X className="h-3 w-3 cursor-pointer hover:text-destructive" />
                      </Badge>
                    ))}
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-semibold">Bases de Datos</Label>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill, index) => (
                      <Badge key={index} variant="outline" className="flex items-center gap-1">
                        {skill}
                        <X className="h-3 w-3 cursor-pointer hover:text-destructive" />
                      </Badge>
                    ))}
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-semibold">Herramientas</Label>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge key={index} className="bg-orange-100 text-orange-800 flex items-center gap-1">
                        {skill}
                        <X className="h-3 w-3 cursor-pointer hover:text-destructive" />
                      </Badge>
                    ))}
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">Habilidades Blandas</Label>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <Badge key={index} className="bg-purple-100 text-purple-800 flex items-center gap-1">
                      {skill}
                      <X className="h-3 w-3 cursor-pointer hover:text-destructive" />
                    </Badge>
                  ))}
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents */}
        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Documentos y Portafolio
              </CardTitle>
              <CardDescription>CV, certificaciones y enlaces a proyectos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h4 className="font-semibold mb-2">Curriculum Vitae</h4>
                  <p className="text-sm text-muted-foreground mb-4">Sube tu CV actualizado en formato PDF</p>
                  <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    Subir CV
                  </Button>
                </div>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <FileText className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold">CV_Juan_Perez_2024.pdf</p>
                          <p className="text-sm text-muted-foreground">Subido el 10 de Junio, 2024</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">Enlaces de Portafolio</Label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Input placeholder="https://github.com/juanperez" defaultValue="https://github.com/juanperez" />
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Input
                      placeholder="https://linkedin.com/in/juanperez"
                      defaultValue="https://linkedin.com/in/juanperez"
                    />
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Input placeholder="https://portafolio.com" />
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">Certificaciones</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <p className="text-sm text-muted-foreground mb-3">Sube certificaciones, diplomas o constancias</p>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Agregar Certificación
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4 pt-6">
        <Button variant="outline">Cancelar</Button>
        <Button>
          <CheckCircle className="mr-2 h-4 w-4" />
          Guardar Cambios
        </Button>
      </div>
    </div>
  )
}
