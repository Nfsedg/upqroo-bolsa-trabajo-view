import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chrome, Mail, Lock, GraduationCap, Building2 } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
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
            <h2 className="text-2xl font-bold">Bienvenido de vuelta</h2>
            <p className="text-muted-foreground">Accede a tu cuenta para continuar</p>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>Selecciona tu tipo de cuenta</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Estudiante
                </TabsTrigger>
                <TabsTrigger value="company" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Empresa
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4 mt-6">
                <Button className="w-full h-12" variant="outline">
                  <Chrome className="mr-2 h-5 w-5" />
                  Continuar con Google Institucional
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Usa tu cuenta @upqroo.edu.mx</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Acceso automático con credenciales universitarias
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="company" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="empresa@ejemplo.com" className="pl-10 h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="password" type="password" placeholder="••••••••" className="pl-10 h-12" />
                    </div>
                  </div>
                  <Button className="w-full h-12">Iniciar Sesión</Button>
                  <div className="text-center">
                    <Button variant="link" className="text-sm p-0">
                      ¿Olvidaste tu contraseña?
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <Separator className="my-6" />

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">¿No tienes cuenta?</p>
              <Button variant="outline" className="w-full h-12">
                Crear Cuenta Nueva
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground space-y-1">
          <p>© 2025 Universidad Politécnica de Quintana Roo</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  )
}
