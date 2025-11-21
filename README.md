Informações da NBA

Este é um projeto de front-end que cria uma página web interativa para exibir informações sobre diversas franquias da National Basketball Association (NBA). A aplicação apresenta os tempos em um formato de galeria de cartões e inclui uma funcionalidade de busca dinâmica.

Funcionalidades Principais: Carregamento de Dados Dinâmicos: Ao carregar a página, o JavaScript busca de forma assíncrona os dados de todos os tempos a partir de um arquivo local data.json. Isso torna o projeto escalável, permitindo adicionar ou modificar informações das franquias sem alterar o código HTML ou JavaScript.

Exibição em Cartões: Cada franquia da NBA é apresentada em um “cartão” individual. Cada cartão contém:

O logotipo faz tempo. O nome da franquia. O ano de sua fundação. Uma breve descrição. Tags com curiosidades ou marcos importantes (ex: "17 Vezes Campeão da NBA", "Era Jordan"). Um link "Saiba mais" que redireciona para a página oficial do time. Busca em Tempo Real: A página possui um campo de busca que permite ao usuário filtrar os tempos exibidos. A busca é acionada ao clicar no botão "Buscar" ou ao pressionar a tecla "Enter". O filtro é aplicado sobre o nome das franquias, e a galeria é atualizada instantaneamente para mostrar apenas os resultados correspondentes.

Design Responsivo e Moderno:

Layout: A galeria de cartões é construída com CSS Grid (grid-template-columns), que se adapta automaticamente a diferentes tamanhos de tela, organizando os cartões de forma fluida. Estilo: O projeto utiliza um tema inspirado nas cores da NBA (vermelho e azul), com um fundo que remete a uma quadra de basquete. O uso de variáveis ​​CSS (:root) facilita a manutenção do esquema de núcleos. Animações e Efeitos: Os cartões possuem uma animação de fade-in sutil ao serem carregados e um efeito de "elevação" (hover) quando o usuário passa o mouse sobre eles, melhorando a experiência visual. Estrutura Técnica: script.js (JavaScript):

Utilize async/await com a fetch API para carregar os dados do data.json. Manipule o DOM para criar e renderizar os cartões dinamicamente. Implementa uma lógica de filtragem para a funcionalidade de busca. Adiciona ouvintes de eventos para capturar as interações do usuário (cliques e digitação). Otimiza o desempenho ao usar DocumentFragment para adicionar vários elementos ao DOM de uma só vez. estilo.css (CSS):

Defina toda a aparência da página, desde o layout geral até os detalhes de cada componente. Importe a fonte "Quicksand" do Google Fonts para um visual mais moderno. Use Flexbox para alinhar os elementos do cabeçalho. Contém animações (@keyframes) e transições para criar uma interface mais fluida e interativa. dados.json (JSON):

Atua como um banco de dados simples, armazenando as informações de cada franquia em um formato estruturado e de fácil leitura. Em resumo, é uma aplicação web elegante e funcional que serve como um ótimo portfólio, demonstrando habilidades em HTML, CSS moderno (Flexbox, Grid, Variáveis, Animações) e JavaScript para manipulação do DOM, requisições assíncronas e interatividade.
