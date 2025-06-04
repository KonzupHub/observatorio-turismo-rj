
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Shield, Target, Rocket } from 'lucide-react';

export const InvestmentSection = () => {
  const plans = [
    {
      name: 'Acesso Aberto',
      price: 'Grátis',
      description: 'Para conhecer o potencial',
      icon: <Zap className="w-6 h-6" />,
      features: [
        'Dashboards básicos',
        'IA com 10 perguntas/mês',
        'Relatórios mensais',
        'Dados públicos',
        'Suporte comunidade'
      ],
      highlight: false
    },
    {
      name: 'Profissional',
      price: 'R$ 897/mês',
      description: 'Para PMEs e gestores',
      icon: <Target className="w-6 h-6" />,
      features: [
        'IA ilimitada (3 idiomas)',
        'Dashboards avançados',
        'Relatórios customizados',
        'API básica',
        'Suporte especializado',
        'Alertas em tempo real'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'R$ 4.970/mês',
      description: 'Para grandes empresas',
      icon: <Crown className="w-6 h-6" />,
      features: [
        'Consultoria via IA',
        'API completa',
        'White-label disponível',
        'Dados exclusivos',
        'Suporte 24/7',
        'Análises sob medida',
        'Integração sistemas'
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Investment Opportunity */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 mb-6 text-sm px-4 py-2">
            Oportunidade de Investimento
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            MVP que Transforma o Turismo<br />
            <span className="text-blue-600">em Motor Econômico</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Investimento inicial para revolucionar a inteligência turística do Rio de Janeiro
          </p>
        </div>

        {/* Investment Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 flex items-center gap-2">
                <Rocket className="w-6 h-6" />
                Investimento MVP
              </CardTitle>
              <CardDescription>12 meses de operação completa</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-600 mb-4">R$ 2.000.000</div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Desenvolvimento plataforma completa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>IA conversacional trilíngue</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Integração dados turísticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Infraestrutura e segurança</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Marketing e comunicação</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Equipe especializada</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Retorno Projetado
              </CardTitle>
              <CardDescription>Impacto econômico esperado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-green-600">R$ 8.5M</div>
                  <div className="text-sm text-gray-600">Receita ano 1</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">425%</div>
                  <div className="text-sm text-gray-600">ROI projetado 3 anos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">12.000+</div>
                  <div className="text-sm text-gray-600">Empresas impactadas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">R$ 180M</div>
                  <div className="text-sm text-gray-600">Valor mercado potencial</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Modelo Freemium Escalável
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlight ? 'border-2 border-blue-500 shadow-lg' : 'border border-gray-200'}`}
              >
                {plan.highlight && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className={`p-3 rounded-full ${plan.highlight ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      {plan.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-blue-600">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${
                      plan.highlight 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-600 hover:bg-gray-700'
                    }`}
                  >
                    {plan.price === 'Grátis' ? 'Começar Grátis' : 'Solicitar Demonstração'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Revolucionar o Turismo Carioca?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Junte-se à transformação digital que vai posicionar o Rio como referência mundial em inteligência turística
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4">
              Investir no Projeto
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
              Agendar Apresentação
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
