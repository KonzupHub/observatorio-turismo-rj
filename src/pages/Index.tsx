
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, TrendingUp, Users, DollarSign, MessageSquare, Globe, BarChart3, Building2 } from 'lucide-react';
import { TopNavigation } from '@/components/TopNavigation';
import { HeroSection } from '@/components/HeroSection';
import { DashboardSection } from '@/components/DashboardSection';
import { AISection } from '@/components/AISection';
import { ImpactSection } from '@/components/ImpactSection';
import { InvestmentSection } from '@/components/InvestmentSection';
import { AdvancedDataSection } from '@/components/AdvancedDataSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
      <TopNavigation />
      
      {/* Add padding-top to account for fixed navigation */}
      <div className="pt-16">
        <HeroSection />
        <div id="dashboard">
          <DashboardSection />
        </div>
        <div id="dados">
          <AdvancedDataSection />
        </div>
        <div id="ia">
          <AISection />
        </div>
        <div id="impacto">
          <ImpactSection />
        </div>
        <div id="investimento">
          <InvestmentSection />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <Badge variant="outline" className="border-cyan-400 text-cyan-400 text-sm px-4 py-2 mb-6">
            Inovação em parceria com Secretaria de Turismo do Estado do RJ
          </Badge>
          <h3 className="text-2xl font-bold mb-4">O Estado não pode planejar no escuro</h3>
          <p className="text-xl text-cyan-300 mb-8">Invista na inteligência que move o turismo. Invista no Rio.</p>
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 mb-8">
            Comece Agora - Grátis
          </Button>
          
          {/* Logos Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-8 pt-8 border-t border-slate-700">
            <div className="flex items-center gap-6">
              <img 
                src="/lovable-uploads/60938ce8-dd6d-4f97-9e7b-f291adc09569.png" 
                alt="Secretaria de Turismo do Rio de Janeiro" 
                className="h-20 w-auto bg-transparent"
                style={{ filter: 'brightness(1) contrast(1)' }}
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-cyan-300">Secretaria de Turismo</p>
                <p className="text-xs text-slate-400">Estado do Rio de Janeiro</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <img 
                src="/lovable-uploads/970ee4bf-3625-464a-8512-f1749d754732.png" 
                alt="Prefeitura da Cidade do Rio de Janeiro" 
                className="h-20 w-auto bg-transparent"
                style={{ filter: 'brightness(1) contrast(1)' }}
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-cyan-300">Prefeitura</p>
                <p className="text-xs text-slate-400">Cidade do Rio de Janeiro</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
