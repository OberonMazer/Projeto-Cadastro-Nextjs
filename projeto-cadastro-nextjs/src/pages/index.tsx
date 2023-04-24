import Head from "next/head";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { 
    tabelaVisivel,
    exibirTabela,
    cliente,
    clientes,
    criarCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente } = useClientes()

  return (
    <div className={`
    flex justify-center items-center h-screen bg-gradient-to-r
     from-blue-500 to-purple-500 text-white
    `}>
      <Head>
        <title>CRUD Next.js in Firebase</title>
      </Head>

      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
        <>
        <div className="flex justify-end">
        <Botao cor="green" className="mb-4" onClick={criarCliente}>
          Novo Cliente
        </Botao>
        </div>
        <Tabela 
        clientes={clientes} 
        clienteSelecionado={selecionarCliente}
        clienteExcluido={excluirCliente}
        />
        </>
        ) : (
        <Formulario 
        cliente={cliente}
        clienteMudou={salvarCliente}
        cancelado={exibirTabela}
        />
        )}
      </Layout>
    </div>
  )
}
