"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

// Import existing view components
import LandingPage from "@/components/views/landing-page"
import LoginPage from "@/components/views/login-page"
import RegisterPage from "@/components/views/register-page"
import StudentDashboard from "@/components/views/student-dashboard"
import StudentProfile from "@/components/views/student-profile"
import JobSearch from "@/components/views/job-search"
import MyApplications from "@/components/views/my-applications"
import Internships from "@/components/views/internships"
import CompanyDashboard from "@/components/views/company-dashboard"
import CompanyProfile from "@/components/views/company-profile"
import PostJob from "@/components/views/post-job"
import ManageJobs from "@/components/views/manage-jobs"
import Applicants from "@/components/views/applicants"
import Surveys from "@/components/views/surveys"
import CoordinatorDashboard from "@/components/views/coordinator-dashboard"
import ValidateCompanies from "@/components/views/validate-companies"
import StudentTracking from "@/components/views/student-tracking"
import Reports from "@/components/views/reports"

// Replace the placeholder components with the actual imports
import AdminDashboard from "@/components/views/admin-dashboard"
import UserManagement from "@/components/views/user-management"
import SystemConfig from "@/components/views/system-config"

// Placeholder components for views not yet implemented
const PlaceholderView = ({ title }: { title: string }) => (
  <div className="p-6">
    <div className="max-w-4xl mx-auto text-center space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">Esta vista está en desarrollo</p>
      <div className="bg-muted/50 rounded-lg p-12">
        <p className="text-sm text-muted-foreground">Próximamente...</p>
      </div>
    </div>
  </div>
)

type ViewEntry = {
  component: React.ComponentType<any>;
  title: string;
  category: string;
};

type ViewType =
  | "landing"
  | "login"
  | "register"
  | "student-dashboard"
  | "student-profile"
  | "job-search"
  | "my-applications"
  | "internships"
  | "company-dashboard"
  | "company-profile"
  | "post-job"
  | "manage-jobs"
  | "applicants"
  | "surveys"
  | "coordinator-dashboard"
  | "validate-companies"
  | "student-tracking"
  | "reports"
  | "admin-dashboard"
  | "user-management"
  | "system-config"

const views: Record<string, ViewEntry> = {
  // General views
  landing: { component: LandingPage, title: "Página Principal", category: "General" },
  login: { component: LoginPage, title: "Iniciar Sesión", category: "General" },
  register: { component: RegisterPage, title: "Registro", category: "General" },

  // Student views
  "student-dashboard": { component: StudentDashboard, title: "Dashboard Estudiante", category: "Estudiante" },
  "student-profile": { component: StudentProfile, title: "Mi Perfil", category: "Estudiante" },
  "job-search": { component: JobSearch, title: "Buscar Vacantes", category: "Estudiante" },
  "my-applications": { component: MyApplications, title: "Mis Postulaciones", category: "Estudiante" },
  internships: { component: Internships, title: "Prácticas Profesionales", category: "Estudiante" },

  // Company views
  "company-dashboard": { component: CompanyDashboard, title: "Dashboard Empresa", category: "Empresa" },
  "company-profile": { component: CompanyProfile, title: "Perfil Empresa", category: "Empresa" },
  "post-job": { component: PostJob, title: "Publicar Vacante", category: "Empresa" },
  "manage-jobs": { component: ManageJobs, title: "Gestionar Vacantes", category: "Empresa" },
  applicants: { component: Applicants, title: "Postulantes", category: "Empresa" },
  surveys: { component: Surveys, title: "Encuestas", category: "Empresa" },

  // Coordinator views
  "coordinator-dashboard": { component: CoordinatorDashboard, title: "Dashboard Coordinador", category: "Coordinador" },
  "validate-companies": { component: ValidateCompanies, title: "Validar Empresas", category: "Coordinador" },
  "student-tracking": { component: StudentTracking, title: "Seguimiento Estudiantes", category: "Coordinador" },
  reports: { component: Reports, title: "Reportes", category: "Coordinador" },

  // Admin views
  "admin-dashboard": { component: AdminDashboard, title: "Dashboard Admin", category: "Administrador" },
  "user-management": { component: UserManagement, title: "Gestión de Usuarios", category: "Administrador" },
  "system-config": { component: SystemConfig, title: "Configuración", category: "Administrador" },
}

export default function HomePage() {
  const [currentView, setCurrentView] = useState<ViewType>("landing")

  const CurrentComponent = views[currentView].component

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 h-auto p-2">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">UP</span>
                  </div>
                  <div className="text-left">
                    <h1 className="text-xl font-bold text-primary">UPQROO</h1>
                    <p className="text-xs text-muted-foreground">Bolsa de Trabajo</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 max-h-[80vh] overflow-y-auto">
                <DropdownMenuLabel>Navegación de Vistas</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* General */}
                <DropdownMenuLabel className="text-xs text-muted-foreground">GENERAL</DropdownMenuLabel>
                {Object.entries(views)
                  .filter(([_, view]) => view.category === "General")
                  .map(([key, view]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setCurrentView(key as ViewType)}
                      className={currentView === key ? "bg-primary/10 text-primary" : ""}
                    >
                      {view.title}
                    </DropdownMenuItem>
                  ))}

                <DropdownMenuSeparator />

                {/* Estudiante */}
                <DropdownMenuLabel className="text-xs text-muted-foreground">ESTUDIANTE</DropdownMenuLabel>
                {Object.entries(views)
                  .filter(([_, view]) => view.category === "Estudiante")
                  .map(([key, view]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setCurrentView(key as ViewType)}
                      className={currentView === key ? "bg-primary/10 text-primary" : ""}
                    >
                      {view.title}
                    </DropdownMenuItem>
                  ))}

                <DropdownMenuSeparator />

                {/* Empresa */}
                <DropdownMenuLabel className="text-xs text-muted-foreground">EMPRESA</DropdownMenuLabel>
                {Object.entries(views)
                  .filter(([_, view]) => view.category === "Empresa")
                  .map(([key, view]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setCurrentView(key as ViewType)}
                      className={currentView === key ? "bg-primary/10 text-primary" : ""}
                    >
                      {view.title}
                    </DropdownMenuItem>
                  ))}

                <DropdownMenuSeparator />

                {/* Coordinador */}
                <DropdownMenuLabel className="text-xs text-muted-foreground">COORDINADOR</DropdownMenuLabel>
                {Object.entries(views)
                  .filter(([_, view]) => view.category === "Coordinador")
                  .map(([key, view]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setCurrentView(key as ViewType)}
                      className={currentView === key ? "bg-primary/10 text-primary" : ""}
                    >
                      {view.title}
                    </DropdownMenuItem>
                  ))}

                <DropdownMenuSeparator />

                {/* Administrador */}
                <DropdownMenuLabel className="text-xs text-muted-foreground">ADMINISTRADOR</DropdownMenuLabel>
                {Object.entries(views)
                  .filter(([_, view]) => view.category === "Administrador")
                  .map(([key, view]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setCurrentView(key as ViewType)}
                      className={currentView === key ? "bg-primary/10 text-primary" : ""}
                    >
                      {view.title}
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-sm">
                {views[currentView].category}
              </Badge>
              <Badge variant="secondary" className="text-sm">
                {views[currentView].title}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Current View */}
      <main className="container mx-auto">
        <CurrentComponent />
      </main>
    </div>
  )
}
