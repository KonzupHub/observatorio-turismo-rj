
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, TrendingUp, Users, DollarSign, MessageSquare, Globe, BarChart3, Building2 } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { DashboardSection } from '@/components/DashboardSection';
import { AISection } from '@/components/AISection';
import { ImpactSection } from '@/components/ImpactSection';
import { InvestmentSection } from '@/components/InvestmentSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
      <HeroSection />
      <DashboardSection />
      <AISection />
      <ImpactSection />
      <InvestmentSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Badge variant="outline" className="border-cyan-400 text-cyan-400 text-sm px-4 py-2">
              Inovação em parceria com Secretaria de Turismo do Município do RJ
            </Badge>
          </div>
          <h3 className="text-2xl font-bold mb-4">O Rio não pode planejar no escuro</h3>
          <p className="text-xl text-cyan-300 mb-8">Invista na inteligência que move o turismo. Invista no Rio.</p>
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3">
            Comece Agora - Grátis
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
