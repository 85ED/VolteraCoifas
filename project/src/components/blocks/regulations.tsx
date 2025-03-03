import { motion } from "framer-motion";
import { Clock, AlertTriangle, Shield, Calendar } from "lucide-react";

export function Regulations() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* ABNT Header */}
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">ABNT 14518</h2>
          </div>

          {/* Maintenance Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                PRAZOS PARA LIMPEZA PREVENTIVA
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <Calendar className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-400" />
                <span><strong>Cozinha Industrial:</strong> a cada 4 (quatro) meses.</span>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-400" />
                <span><strong>Cozinha Residencial:</strong> a cada 6 (seis) meses.</span>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-400" />
                <span><strong>Cozinhas em Geral:</strong> no máximo a cada 4 (quatro) meses.</span>
              </li>
            </ul>
            
            <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <div className="text-sm text-yellow-700 dark:text-yellow-200">
                  <p className="mb-2">É fundamental realizar a limpeza periódica das coifas e, principalmente, dos dutos, pois isso pode evitar a ocorrência de incêndios nas cozinhas. Incêndios têm sido comuns devido ao caráter inflamável do óleo e ao acúmulo de gorduras nos dutos, além do risco proveniente do eventual gotejamento de gordura sobre os alimentos em preparo.</p>
                  <p className="font-semibold">Observação: Para minimizar possíveis acidentes, recomenda-se a limpeza das coifas, dutos, exaustores e caixas de gordura sempre que necessário.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ANVISA Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              LIMPEZA – EXIGÊNCIA ANVISA
            </h3>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300">
                Portaria CVS-6/99, de 10/03/99, publicada em 12/03/99 no D.O.E.S.P.A, pela Diretora Técnica do Centro de Vigilância Sanitária da Secretaria de Estado da Saúde, considerando:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>A Lei nº 10.083, de 23 de setembro de 1998;</li>
                <li>A Lei nº 8.080/90, de 19 de setembro de 1990;</li>
                <li>A Portaria MS nº 1.428, de 26 de novembro de 1993;</li>
                <li>A Portaria MS nº 326, de 30 de julho de 1997;</li>
                <li>A Resolução SS nº 38, de 27/02/96;</li>
                <li>A Portaria CVS – 1 DITEP, de 13/01/98.</li>
              </ul>

              <h4 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Ventilação</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Garantir o conforto térmico e a renovação do ar</li>
                <li>Manter o ambiente livre de fungos, gases, fumaça, gordura e condensação de vapores</li>
                <li>Realizar a circulação de ar na cozinha por meio de insuflação controlada</li>
                <li>Direcionar o fluxo de ar das áreas limpas para as áreas sujas</li>
                <li>Não utilizar ventiladores ou aparelhos de ar condicionado nas áreas de manipulação</li>
              </ul>

              <h4 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Periodicidade de Limpeza</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">Diário:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Pisos, rodapés e ralos</li>
                    <li>Áreas de lavagem e produção</li>
                    <li>Maçanetas</li>
                    <li>Lavatórios (pias)</li>
                    <li>Sanitários</li>
                    <li>Cadeiras e mesas</li>
                    <li>Recipientes de lixo</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Semanal:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Paredes</li>
                    <li>Portas e janelas</li>
                    <li>Prateleiras</li>
                    <li>Coifa</li>
                    <li>Geladeiras</li>
                    <li>Câmaras e freezers</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}