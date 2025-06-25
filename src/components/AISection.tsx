
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Bot, User, Globe } from 'lucide-react';

export const AISection = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: '👋 Olá! Sou a IA Turística do Rio. Pergunte qualquer coisa sobre turismo na cidade do Rio de Janeiro - posso responder em português, inglês ou espanhol!'
    }
  ]);

  const exampleQuestions = [
    'Qual bairro mais cresce no turismo europeu?',
    'Como captar mais turistas americanos em 2025?',
    'Qual impacto do carnaval no ticket médio dos hotéis?',
    'Quais são os melhores meses para investir em hotelaria?',
    'Como a Copa de 2014 impactou o turismo carioca?'
  ];

  const handleAskQuestion = (questionText?: string) => {
    const q = questionText || question;
    if (!q.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: q }]);
    
    // Simulate AI response focused on Rio de Janeiro
    setTimeout(() => {
      let response = '';
      if (q.includes('europeu') || q.includes('Europa')) {
        response = '🇪🇺 **Crescimento Europeu por Bairro no Rio:**\n\nSanta Teresa lidera com +47% de turistas europeus em 2024! Os dados mostram que europeus buscam experiências autênticas na cidade:\n\n• **Santa Teresa**: +47% (média R$ 280/dia)\n• **Lapa**: +32% (vida noturna cultural)\n• **Centro Histórico**: +28% (turismo histórico)\n• **Zona Sul**: +25% (praias e natureza)\n\n💡 **Insight**: Europeus gastam 23% mais em experiências culturais cariocas que americanos.';
      } else if (q.includes('americanos') || q.includes('EUA')) {
        response = '🇺🇸 **Estratégia para Turistas Americanos no Rio 2025:**\n\n**Oportunidades identificadas na cidade:**\n• Voos diretos para Miami aumentaram demanda em 34%\n• Americanos preferem estadias de 7+ dias no Rio (vs 4 dias média)\n• Gastam R$ 420/dia na cidade (22% acima da média)\n\n**Recomendações para o Rio:**\n1. Campanhas em dezembro-fevereiro\n2. Pacotes longos (7-10 dias)\n3. Foco em Barra, Copacabana e Ipanema\n4. Marketing digital destacando Cristo Redentor e Pão de Açúcar';
      } else if (q.includes('carnaval') || q.includes('Carnaval')) {
        response = '🎭 **Impacto do Carnaval nos Hotéis do Rio:**\n\n**Dados reveladores da cidade:**\n• Ticket médio sobe **312%** durante carnaval carioca\n• Ocupação atinge 97% na cidade (vs 78% média anual)\n• Receita de 5 dias = 2 meses normais\n\n**Por categoria no Rio:**\n• Luxo (Copacabana/Ipanema): R$ 1.840/noite (+420%)\n• Médio (Zona Sul): R$ 680/noite (+280%)\n• Econômico (Centro/Lapa): R$ 320/noite (+200%)\n\n💰 **Total Rio**: R$ 2.1 bilhões em 5 dias!';
      } else if (q.includes('Copa') || q.includes('2014')) {
        response = '⚽ **Impacto da Copa 2014 no Turismo Carioca:**\n\n**Transformações na cidade:**\n• +185% visitantes internacionais durante o evento\n• Infraestrutura: Aeroporto Santos Dumont, VLT, Porto Maravilha\n• Legado hoteleiro: +12.000 novos leitos na cidade\n• Copacabana registrou ocupação de 98%\n\n**Efeitos duradouros:**\n• Rio consolidou-se como destino esportivo\n• Aumento de 34% em eventos internacionais pós-Copa\n• Maracanã virou ícone turístico permanente';
      } else {
        response = `📊 Analisando sua pergunta sobre "${q}" no contexto do Rio de Janeiro...\n\nCom base nos dados do Observatório da cidade, posso te ajudar com insights específicos sobre:\n\n• Padrões de visitação na cidade do Rio\n• Impactos econômicos nos bairros cariocas\n• Tendências sazonais no turismo local\n• Perfis de turistas que visitam o Rio\n• Oportunidades de investimento na cidade\n\nPoderia ser mais específico sobre qual aspecto do turismo carioca te interessa mais?`;
      }
      
      setMessages(prev => [...prev, { type: 'ai', content: response }]);
    }, 1500);

    setQuestion('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Democratizando a Inteligência Turística
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Converse com nossa IA analista em português, inglês ou espanhol. 
            Transformamos dados complexos em insights acionáveis para qualquer pessoa.
          </p>
          <div className="flex justify-center gap-2">
            <Badge className="bg-green-100 text-green-800">🇧🇷 Português</Badge>
            <Badge className="bg-blue-100 text-blue-800">🇺🇸 English</Badge>
            <Badge className="bg-red-100 text-red-800">🇪🇸 Español</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  IA Turística do Rio
                  <Badge variant="outline" className="ml-2">Online 24/7</Badge>
                </CardTitle>
                <CardDescription>
                  Analista de dados turísticos com IA conversacional
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 max-h-96">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' ? 'bg-blue-600' : 'bg-green-600'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`rounded-lg px-4 py-3 ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <div className="whitespace-pre-line text-sm">
                            {message.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Input
                    placeholder="Ex: Qual o melhor mês para abrir um hotel em Copacabana?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAskQuestion()}
                    className="flex-1"
                  />
                  <Button onClick={() => handleAskQuestion()} className="bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Example Questions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Perguntas Populares</CardTitle>
                <CardDescription>Clique para testar nossa IA</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {exampleQuestions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleAskQuestion(q)}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm transition-colors border"
                  >
                    <MessageSquare className="w-4 h-4 inline mr-2 text-blue-600" />
                    {q}
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quem Usa Nossa IA?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">PMEs e Startups</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Gestores Públicos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Grandes Empresas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Investidores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Jornalistas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
