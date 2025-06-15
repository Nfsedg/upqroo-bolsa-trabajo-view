import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Chrome, Building2, GraduationCap, Info } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">UP</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-primary">UPQROO</h1>
              <p className="text-sm text-muted-foreground">Bolsa de Trabajo</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Crear Cuenta</h2>
            <p className="text-muted-foreground">Únete a la comunidad UPQROO</p>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Registro de Usuario</CardTitle>
            <CardDescription>Selecciona el tipo de cuenta que deseas crear</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="student" className="flex items-center gap-2 h-12">
                  <GraduationCap className="h-5 w-5" />
                  Estudiante/Egresado
                </TabsTrigger>
                <TabsTrigger value="company" className="flex items-center gap-2 h-12">
                  <Building2 className="h-5 w-5" />
                  Empresa
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-6">
                <Button className="w-full h-14" variant="outline" size="lg">
                  <Chrome className="mr-3 h-5 w-5" />
                  Registrarse con Google Institucional
                </Button>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Registro automático:</strong> Usa tu cuenta @upqroo.edu.mx para acceso inmediato. Tu perfil
                    se creará automáticamente con los datos institucionales.
                  </AlertDescription>
                </Alert>

                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary text-lg">Información que se sincronizará:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Nombre completo
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Carrera y semestre actual
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Correo institucional
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Estado académico (estudiante/egresado)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="company" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Company Basic Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Información de la Empresa</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Nombre de la Empresa *</Label>
                        <Input id="company-name" placeholder="Ej: TechCorp México" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rfc">RFC *</Label>
                        <Input id="rfc" placeholder="XAXX010101000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sector">Sector Industrial</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar sector" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tech">Tecnología</SelectItem>
                            <SelectItem value="tourism">Turismo</SelectItem>
                            <SelectItem value="manufacturing">Manufactura</SelectItem>
                            <SelectItem value="services">Servicios</SelectItem>
                            <SelectItem value="retail">Comercio</SelectItem>
                            <SelectItem value="other">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Descripción de la Empresa</Label>
                        <Textarea
                          id="description"
                          placeholder="Breve descripción de la empresa, servicios y cultura organizacional"
                          rows={4}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Información de Contacto</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico Corporativo *</Label>
                        <Input id="email" type="email" placeholder="contacto@empresa.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono *</Label>
                        <Input id="phone" placeholder="(998) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Nombre del Contacto *</Label>
                        <Input id="contact-name" placeholder="Responsable de RH" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-position">Cargo del Contacto</Label>
                        <Input id="contact-position" placeholder="Gerente de Recursos Humanos" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Dirección Completa</Label>
                        <Textarea id="address" placeholder="Calle, número, colonia, ciudad, estado, CP" rows={3} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Security */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Configuración de Seguridad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Contraseña *</Label>
                        <Input id="password" type="password" placeholder="••••••••" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Contraseña *</Label>
                        <Input id="confirm-password" type="password" placeholder="••••••••" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      Acepto los términos y condiciones y la política de privacidad
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications" />
                    <Label htmlFor="notifications" className="text-sm">
                      Deseo recibir notificaciones sobre nuevos candidatos y actualizaciones
                    </Label>
                  </div>
                </div>

                <Button className="w-full h-12" size="lg">
                  Crear Cuenta Empresarial
                </Button>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Proceso de validación:</strong> Tu cuenta será revisada por el equipo de coordinación de
                    UPQROO antes de ser activada. Recibirás un correo de confirmación en 1-2 días hábiles.
                  </AlertDescription>
                </Alert>
              </TabsContent>
            </Tabs>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                ¿Ya tienes cuenta?{" "}
                <Button variant="link" className="p-0 h-auto text-primary">
                  Iniciar sesión
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
