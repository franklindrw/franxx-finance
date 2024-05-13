import React from "react"
import { View, Text } from "react-native"

import { styles } from "./privacityPolicy.style"

export default function PrivacityPolicy() {
  return (
    <>
      <View>
        <Text style={styles.logoSubtitle}>Franxx</Text>
        <Text style={styles.logoTitle}>Finance</Text>
        <Text style={styles.logoSlogan}>Controle Financeiro Pessoal</Text>
      </View>

      <Text style={styles.title}>Política de Privacidade</Text>

      <Text style={styles.text}>
        Esta Política de Privacidade descreve como as informações pessoais são coletadas, 
        usadas e compartilhadas quando você utiliza o aplicativo de controle financeiro pessoal.
      </Text>

      <Text style={styles.subtitle}>Informações Pessoais que Coletamos</Text>

      <Text style={styles.text}>
      Quando você se cadastra no aplicativo, podemos coletar as seguintes informações pessoais:
      </Text>

      <Text style={styles.text}>
        - Informações de Cadastro: Seu nome, endereço de e-mail e senha.
      </Text>

      <Text style={styles.text}>
        - Informações Financeiras: Despesas e ganhos que você opta por inserir no aplicativo,
        como gastos com gasolina, energia, salário, investimentos, aluguéis, entre outros.
      </Text>

      <Text style={styles.subtitle}>Como Utilizamos Suas Informações</Text>

      <Text style={styles.text}>
        - Fornecer e manter o serviço do aplicativo;
      </Text>

      <Text style={styles.text}>
        - Personalizar sua experiência dentro do aplicativo;
      </Text>

      <Text style={styles.text}>
        - Analisar o desempenho do aplicativo e melhorar sua funcionalidade;
      </Text>

      <Text style={styles.text}>
        - Enviar comunicações relacionadas ao serviço, como atualizações, 
        notificações e lembretes.
      </Text>

      <Text style={styles.subtitle}>Compartilhamento de Informações</Text>

      <Text style={styles.text}>
        Não compartilhamos suas informações pessoais com terceiros, 
        exceto nas seguintes circunstâncias:
      </Text>

      <Text style={styles.text}>
        - Quando você autoriza explicitamente o compartilhamento;
      </Text>

      <Text style={styles.text}>
        - Para cumprir requisitos legais ou regulatórios;
      </Text>

      <Text style={styles.text}>
        - Para proteger os direitos, propriedade ou segurança do aplicativo, 
        de nossos usuários ou de outros.
      </Text>

      <Text style={styles.subtitle}>Proteção das Informações</Text>

      <Text style={styles.text}>
        Implementamos medidas de segurança para proteger suas informações pessoais 
        contra acesso não autorizado, alteração, divulgação ou destruição.
      </Text>

      <Text style={styles.subtitle}>Seus Direitos</Text>

      <Text style={styles.text}>
        Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. 
        Você também pode optar por sair do aplicativo e excluir sua conta, o que resultará 
        na exclusão de todas as informações associadas a ela.
      </Text>

      <Text style={styles.subtitle}>Atualizações da Política de Privacidade</Text>

      <Text style={styles.text}>
        Esta Política de Privacidade está sujeita a alterações. 
        Quaisquer atualizações serão publicadas nesta página.
      </Text>

      <Text style={styles.subtitle}>Contato</Text>

      <Text style={styles.text}>
      Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, 
      entre em contato conosco pelo endereço de e-mail fraxx.finance@email.com.
      </Text>
    </>
  )
}
