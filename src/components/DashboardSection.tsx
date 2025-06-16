import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, MapPin, Calendar, Building2, Globe, Plane, Ship, Car, Train, Clock, Search, Target, Zap } from 'lucide-react';
import { TourismChart } from './TourismChart';
import { HeatMapCard } from './HeatMapCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';

export const DashboardSection = () => {
  // Mock data for arrivals
  const arrivalsData = [
    { modal: 'Aéreo', jan: 180000, fev: 220000, mar: 160000, abr: 140000, mai: 120000, jun: 110000 },
    { modal: 'Rodoviário', jan: 45000, fev: 52000, mar: 38000, abr: 42000, mai: 35000, jun: 40000 },
    { modal: 'Marítimo', jan: 12000, fev: 15000, mar: 8000, abr: 10000, mai: 9000, jun: 11000 },
    { modal: 'Ferroviário', jan: 2000, fev: 2500, mar: 1800, abr: 2200, mai: 1900, jun: 2100 }
  ];

  const modalColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  // Mock data for visitor profile
  const ageData = [
    { faixa: '18-25', quantidade: 280000, porcentagem: 28 },
    { faixa: '26-35', quantidade: 350000, porcentagem: 35 },
    { faixa: '36-45', quantidade: 200000, porcentagem: 20 },
    { faixa: '46-55', quantidade: 120000, porcentagem: 12 },
    { faixa: '56+', quantidade: 50000, porcentagem: 5 }
  ];

  const genderData = [
    { genero: 'Feminino', valor: 52, cor: '#ec4899' },
    { genero: 'Masculino', valor: 47, cor: '#3b82f6' },
    { genero: 'Outros', valor: 1, cor: '#10b981' }
  ];

  const educationData = [
    { nivel: 'Superior Completo', porcentagem: 45 },
    { nivel: 'Superior Incompleto', porcentagem: 25 },
    { nivel: 'Ensino Médio', porcentagem: 20 },
    { nivel: 'Pós-graduação', porcentagem: 8 },
    { nivel: 'Outros', porcentagem: 2 }
  ];

  // Mock data for spending
  const spendingCategories = [
    { categoria: 'Hospedagem', valor: 145, cor: '#3b82f6' },
    { categoria: 'Alimentação', valor: 89, cor: '#10b981' },
    { categoria: 'Transporte', valor: 67, cor: '#f59e0b' },
    { categoria: 'Entretenimento', valor: 52, cor: '#ef4444' },
    { categoria: 'Compras', valor: 38, cor: '#8b5cf6' },
    { categoria: 'Outros', valor: 21, cor: '#06b6d4' }
  ];

  const spendingByOrigin = [
    { pais: 'Estados Unidos', gasto_medio: 420, total: 28500000 },
    { pais: 'Argentina', gasto_medio: 285, total: 18200000 },
    { pais: 'França', gasto_medio: 380, total: 14100000 },
    { pais: 'Alemanha', gasto_medio: 395, total: 11800000 },
    { pais: 'Itália', gasto_medio: 355, total: 8900000 }
  ];

  // Mock data for lead time
  const leadTimeData = [
    { pais: 'Estados Unidos', lead_time_medio: 45, antecedencia_maxima: 180 },
    { pais: 'Argentina', lead_time_medio: 21, antecedencia_maxima: 90 },
    { pais: 'França', lead_time_medio: 62, antecedencia_maxima: 210 },
    { pais: 'Alemanha', lead_time_medio: 58, antecedencia_maxima: 195 },
    { pais: 'Itália', lead_time_medio: 52, antecedencia_maxima: 175 }
  ];

  const leadTimeDistribution = [
    { faixa: '0-7 dias', quantidade: 8, cor: '#ef4444' },
    { faixa: '8-30 dias', quantidade: 25, cor: '#f59e0b' },
    { faixa: '31-60 dias', quantidade: 35, cor: '#10b981' },
    { faixa: '61-90 dias', quantidade: 22, cor: '#3b82f6' },
    { faixa: '90+ dias', quantidade: 10, cor: '#8b5cf6' }
  ];

  // Mock data for search intention
  const searchVolumeData = [
    { mes: 'Jul 24', buscas: 145000, crescimento: 15 },
    { mes: 'Ago 24', buscas: 162000, crescimento: 12 },
    { mes: 'Set 24', buscas: 138000, crescimento: -8 },
    { mes: 'Out 24', buscas: 175000, crescimento: 27 },
    { mes: 'Nov 24', buscas: 198000, crescimento: 13 },
    { mes: 'Dez 24', buscas: 285000, crescimento: 44 },
    { mes: 'Jan 25', buscas: 420000, crescimento: 47 },
    { mes: 'Fev 25', buscas: 380000, crescimento: 32 }
  ];

  const topSearchOrigins = [
    { pais: 'Estados Unidos', buscas_futuras: 85000, crescimento: 28, flag: '🇺🇸' },
    { pais: 'Argentina', buscas_futuras: 72000, crescimento: 15, flag: '🇦🇷' },
    { pais: 'França', buscas_futuras: 45000, crescimento: 35, flag: '🇫🇷' },
    { pais: 'Reino Unido', buscas_futuras: 38000, crescimento: 42, flag: '🇬🇧' },
    { pais: 'Alemanha', buscas_futuras: 34000, crescimento: 18, flag: '🇩🇪' }
  ];

  const popularDates = [
    { evento: 'Carnaval 2025', periodo: 'Fev 28 - Mar 5', buscas: 125000, interesse: 95 },
    { evento: 'Rock in Rio', periodo: 'Set 13-22', buscas: 89000, interesse: 78 },
    { evento: 'Réveillon Copacabana', periodo: 'Dez 29 - Jan 2', buscas: 156000, interesse: 88 },
    { evento: 'Aniversário Rio', periodo: 'Mar 1', buscas: 23000, interesse: 45 },
    { evento: 'Temporada Verão', periodo: 'Dez-Mar', buscas: 234000, interesse: 82 }
  ];

  // Mock data for flight capacity
  const flightCapacityData = [
    { mes: 'Jan', voos_nacionais: 1250, voos_internacionais: 420, assentos_nacionais: 187500, assentos_internacionais: 126000 },
    { mes: 'Fev', voos_nacionais: 1380, voos_internacionais: 580, assentos_nacionais: 207000, assentos_internacionais: 174000 },
    { mes: 'Mar', voos_nacionais: 1180, voos_internacionais: 380, assentos_nacionais: 177000, assentos_internacionais: 114000 },
    { mes: 'Abr', voos_nacionais: 1050, voos_internacionais: 320, assentos_nacionais: 157500, assentos_internacionais: 96000 },
    { mes: 'Mai', voos_nacionais: 980, voos_internacionais: 280, assentos_nacionais: 147000, assentos_internacionais: 84000 },
    { mes: 'Jun', voos_nacionais: 1020, voos_internacionais: 290, assentos_nacionais: 153000, assentos_internacionais: 87000 }
  ];

  const airlineCapacity = [
    { companhia: 'GOL', participacao_nacional: 35, participacao_internacional: 15, assentos_totais: 89000 },
    { companhia: 'LATAM', participacao_nacional: 28, participacao_internacional: 45, assentos_totais: 95000 },
    { companhia: 'Azul', participacao_nacional: 25, participacao_internacional: 8, assentos_totais: 52000 },
    { companhia: 'American Airlines', participacao_nacional: 0, participacao_internacional: 12, assentos_totais: 18000 },
    { companhia: 'Air France', participacao_nacional: 0, participacao_internacional: 8, assentos_totais: 12000 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            O Rio é o Topo do Funil do Brasil
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dashboards inteligentes que revelam padrões invisíveis do turismo carioca. 
            Cada pixel conta uma história de oportunidade.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">Panorama</TabsTrigger>
            <TabsTrigger value="arrivals">Chegadas</TabsTrigger>
            <TabsTrigger value="intention">Intenção</TabsTrigger>
            <TabsTrigger value="capacity">Capacidade</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="spending">Gastos</TabsTrigger>
            <TabsTrigger value="heatmap">Mapa de Calor</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Turistas Internacionais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.1M</div>
                  <p className="text-xs text-muted-foreground">
                    +15% vs 2023
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Receita Turística
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 18.2Bi</div>
                  <p className="text-xs text-muted-foreground">
                    +22% vs 2023
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Ocupação Hoteleira
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78.4%</div>
                  <p className="text-xs text-muted-foreground">
                    Média anual
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Gasto Médio/Dia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 342</div>
                  <p className="text-xs text-muted-foreground">
                    Por turista
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TourismChart 
                title="Evolução do Turismo Internacional"
                data={[
                  { month: 'Jan', tourists: 180000, revenue: 1200 },
                  { month: 'Fev', tourists: 220000, revenue: 1400 },
                  { month: 'Mar', tourists: 160000, revenue: 1100 },
                  { month: 'Abr', tourists: 140000, revenue: 950 },
                  { month: 'Mai', tourists: 120000, revenue: 850 },
                  { month: 'Jun', tourists: 110000, revenue: 800 },
                  { month: 'Jul', tourists: 190000, revenue: 1300 },
                  { month: 'Ago', tourists: 170000, revenue: 1150 },
                  { month: 'Set', tourists: 130000, revenue: 900 },
                  { month: 'Out', tourists: 150000, revenue: 1000 },
                  { month: 'Nov', tourists: 200000, revenue: 1350 },
                  { month: 'Dez', tourists: 250000, revenue: 1600 }
                ]}
              />

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Top 5 Países de Origem
                  </CardTitle>
                  <CardDescription>Turistas internacionais em 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { country: 'Estados Unidos', percentage: 28.4, flag: '🇺🇸' },
                      { country: 'Argentina', percentage: 21.7, flag: '🇦🇷' },
                      { country: 'França', percentage: 12.3, flag: '🇫🇷' },
                      { country: 'Alemanha', percentage: 9.8, flag: '🇩🇪' },
                      { country: 'Itália', percentage: 8.1, flag: '🇮🇹' }
                    ].map((item) => (
                      <div key={item.country} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{item.flag}</span>
                          <span className="font-medium">{item.country}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{item.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="arrivals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Plane className="w-4 h-4" />
                    Chegadas Aéreas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.23M</div>
                  <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    Chegadas Rodoviárias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">252K</div>
                  <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Ship className="w-4 h-4" />
                    Chegadas Marítimas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">65K</div>
                  <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Train className="w-4 h-4" />
                    Chegadas Ferroviárias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12.5K</div>
                  <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Lead Time Médio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42 dias</div>
                  <p className="text-xs text-muted-foreground">Antecedência média</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lead Time por País de Origem</CardTitle>
                  <CardDescription>Antecedência média de reservas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={leadTimeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="pais" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value} dias`, 'Lead Time']} />
                      <Bar dataKey="lead_time_medio" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribuição de Antecedência</CardTitle>
                  <CardDescription>Quando os turistas fazem reservas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={leadTimeDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({faixa, quantidade}) => `${faixa}: ${quantidade}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="quantidade"
                      >
                        {leadTimeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.cor} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Chegadas por Modal de Transporte</CardTitle>
                  <CardDescription>Distribuição mensal por tipo de transporte</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={arrivalsData.map(item => ({
                      modal: item.modal,
                      total: item.jan + item.fev + item.mar + item.abr + item.mai + item.jun
                    }))}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="modal" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${Number(value).toLocaleString()} passageiros`, 'Total']} />
                      <Bar dataKey="total" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sazonalidade das Chegadas</CardTitle>
                  <CardDescription>Variação mensal por modal</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={[
                      { mes: 'Jan', aereo: 180000, rodoviario: 45000, maritimo: 12000 },
                      { mes: 'Fev', aereo: 220000, rodoviario: 52000, maritimo: 15000 },
                      { mes: 'Mar', aereo: 160000, rodoviario: 38000, maritimo: 8000 },
                      { mes: 'Abr', aereo: 140000, rodoviario: 42000, maritimo: 10000 },
                      { mes: 'Mai', aereo: 120000, rodoviario: 35000, maritimo: 9000 },
                      { mes: 'Jun', aereo: 110000, rodoviario: 40000, maritimo: 11000 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="aereo" stroke="#3b82f6" name="Aéreo" />
                      <Line type="monotone" dataKey="rodoviario" stroke="#10b981" name="Rodoviário" />
                      <Line type="monotone" dataKey="maritimo" stroke="#f59e0b" name="Marítimo" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="intention" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-cyan-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Buscas Totais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.1M</div>
                  <p className="text-xs text-muted-foreground">Últimos 8 meses</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Crescimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+28%</div>
                  <p className="text-xs text-muted-foreground">vs mesmo período 2023</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-indigo-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Pico de Interesse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Jan 25</div>
                  <p className="text-xs text-muted-foreground">420K buscas</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-pink-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Conversão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12.4%</div>
                  <p className="text-xs text-muted-foreground">Busca → Reserva</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Volume de Buscas de Voos</CardTitle>
                  <CardDescription>Evolução do interesse ao longo do tempo</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={searchVolumeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${Number(value).toLocaleString()} buscas`, 'Volume']} />
                      <Area type="monotone" dataKey="buscas" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Origens - Próximos 6 Meses</CardTitle>
                  <CardDescription>Países com mais interesse futuro</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topSearchOrigins.map((item, index) => (
                      <div key={item.pais} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{item.flag}</span>
                          <div>
                            <div className="font-medium">{item.pais}</div>
                            <div className="text-sm text-green-600">+{item.crescimento}% vs período anterior</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-cyan-600">{(item.buscas_futuras / 1000).toFixed(0)}K</div>
                          <div className="text-sm text-gray-500">buscas</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Datas Mais Procuradas</CardTitle>
                  <CardDescription>Eventos e períodos de maior interesse</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {popularDates.map((item) => (
                      <div key={item.evento} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{item.evento}</h4>
                          <div className="text-sm font-medium text-blue-600">{item.interesse}%</div>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{item.periodo}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{(item.buscas / 1000).toFixed(0)}K buscas</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${item.interesse}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="capacity" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Plane className="w-4 h-4" />
                    Voos Nacionais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6.8K</div>
                  <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Voos Internacionais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.3K</div>
                  <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Assentos Nacionais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.03M</div>
                  <p className="text-xs text-muted-foreground">Capacidade total</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Assentos Internacionais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">681K</div>
                  <p className="text-xs text-muted-foreground">Capacidade total</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Evolução da Capacidade</CardTitle>
                  <CardDescription>Assentos disponíveis por mês</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={flightCapacityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip formatter={(value, name) => [
                        `${Number(value).toLocaleString()} assentos`,
                        name === 'assentos_nacionais' ? 'Nacionais' : 'Internacionais'
                      ]} />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="assentos_nacionais" 
                        stackId="1"
                        stroke="#3b82f6" 
                        fill="#3b82f6" 
                        fillOpacity={0.6}
                        name="Nacionais"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="assentos_internacionais" 
                        stackId="1"
                        stroke="#8b5cf6" 
                        fill="#8b5cf6" 
                        fillOpacity={0.6}
                        name="Internacionais"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Número de Voos por Mês</CardTitle>
                  <CardDescription>Operações aéreas no Rio</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={flightCapacityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="voos_nacionais" fill="#10b981" name="Nacionais" />
                      <Bar dataKey="voos_internacionais" fill="#f59e0b" name="Internacionais" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Participação por Companhia Aérea</CardTitle>
                  <CardDescription>Market share da capacidade de assentos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {airlineCapacity.map((item, index) => (
                      <div key={item.companhia} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="text-lg font-bold text-gray-600 w-6">
                            #{index + 1}
                          </div>
                          <div>
                            <div className="font-medium">{item.companhia}</div>
                            <div className="text-sm text-gray-500">
                              Nacional: {item.participacao_nacional}% | Internacional: {item.participacao_internacional}%
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">{(item.assentos_totais / 1000).toFixed(0)}K</div>
                          <div className="text-sm text-gray-500">assentos/mês</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Idade Média</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">32 anos</div>
                  <p className="text-xs text-muted-foreground">Turistas internacionais</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-pink-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Gênero Predominante</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">52% F</div>
                  <p className="text-xs text-muted-foreground">Maioria feminina</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-indigo-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Escolaridade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45%</div>
                  <p className="text-xs text-muted-foreground">Superior completo</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-cyan-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7.3 dias</div>
                  <p className="text-xs text-muted-foreground">Permanência no RJ</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição por Faixa Etária</CardTitle>
                  <CardDescription>Perfil demográfico dos visitantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="faixa" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${Number(value).toLocaleString()} pessoas`, 'Quantidade']} />
                      <Bar dataKey="quantidade" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribuição por Gênero</CardTitle>
                  <CardDescription>Composição dos visitantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={genderData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({genero, valor}) => `${genero}: ${valor}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="valor"
                      >
                        {genderData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.cor} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Nível de Escolaridade</CardTitle>
                  <CardDescription>Formação educacional dos visitantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {educationData.map((item) => (
                      <div key={item.nivel} className="flex items-center justify-between">
                        <span className="font-medium">{item.nivel}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-indigo-600 h-2 rounded-full" 
                              style={{ width: `${item.porcentagem}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium w-10">{item.porcentagem}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="spending" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Gasto Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 18.2Bi</div>
                  <p className="text-xs text-muted-foreground">Receita anual</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 2.485</div>
                  <p className="text-xs text-muted-foreground">Por visitante</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Gasto Diário</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 342</div>
                  <p className="text-xs text-muted-foreground">Média por dia</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Maior Categoria</Title>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42%</div>
                  <p className="text-xs text-muted-foreground">Hospedagem</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Gastos por Categoria</CardTitle>
                  <CardDescription>Distribuição do orçamento turístico</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={spendingCategories}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({categoria, valor}) => `${categoria}: R$${valor}`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="valor"
                      >
                        {spendingCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.cor} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`R$ ${value}`, 'Gasto médio/dia']} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gasto Médio por País</CardTitle>
                  <CardDescription>Ticket médio por nacionalidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={spendingByOrigin}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="pais" />
                      <YAxis />
                      <Tooltip formatter={(value, name) => [
                        name === 'gasto_medio' ? `R$ ${value}` : `R$ ${Number(value).toLocaleString()}`,
                        name === 'gasto_medio' ? 'Gasto médio' : 'Total gasto'
                      ]} />
                      <Bar dataKey="gasto_medio" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Ranking de Receita por País</CardTitle>
                  <CardDescription>Total arrecadado por nacionalidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {spendingByOrigin.map((item, index) => (
                      <div key={item.pais} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="text-lg font-bold text-gray-600 w-6">
                            #{index + 1}
                          </div>
                          <div>
                            <div className="font-medium">{item.pais}</div>
                            <div className="text-sm text-gray-500">Gasto médio: R$ {item.gasto_medio}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">R$ {(item.total / 1000000).toFixed(1)}M</div>
                          <div className="text-sm text-gray-500">Total arrecadado</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="heatmap">
            <HeatMapCard />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
