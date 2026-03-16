async function buscarPais(){

const input = document
.getElementById("paisInput")
.value
.toLowerCase()

const resultado = document
.getElementById("resultado")

// Tradução português → inglês

const traducoes = {

"brasil":"brazil",
"alemanha":"germany",
"japão":"japan",
"japao":"japan",
"eua":"united states",
"estados unidos":"united states",
"frança":"france",
"franca":"france",
"espanha":"spain",
"portugal":"portugal",
"argentina":"argentina",
"canadá":"canada",
"canada":"canada",
"méxico":"mexico",
"mexico":"mexico",
"china":"china",
"rússia":"russia",
"russia":"russia",

// Europa
"italia":"italy",
"itália":"italy",
"reino unido":"united kingdom",
"inglaterra":"united kingdom",
"escocia":"united kingdom",
"escócia":"united kingdom",
"irlanda":"ireland",
"holanda":"netherlands",
"belgica":"belgium",
"bélgica":"belgium",
"suica":"switzerland",
"suíça":"switzerland",
"austria":"austria",
"áustria":"austria",
"polonia":"poland",
"polônia":"poland",
"noruega":"norway",
"suecia":"sweden",
"suécia":"sweden",
"finlandia":"finland",
"finlândia":"finland",
"dinamarca":"denmark",
"grecia":"greece",
"grécia":"greece",

// Ásia
"coreia do sul":"south korea",
"coreia do norte":"north korea",
"coreia":"south korea",
"india":"india",
"índia":"india",
"tailandia":"thailand",
"tailândia":"thailand",
"vietna":"vietnam",
"vietnã":"vietnam",
"indonesia":"indonesia",
"indonésia":"indonesia",
"malasia":"malaysia",
"malásia":"malaysia",
"filipinas":"philippines",
"singapura":"singapore",
"arabia saudita":"saudi arabia",
"arábia saudita":"saudi arabia",
"turquia":"turkey",
"israel":"israel",
"emirados arabes":"united arab emirates",
"emirados árabes":"united arab emirates",

// África
"egito":"egypt",
"marrocos":"morocco",
"nigeria":"nigeria",
"nigéria":"nigeria",
"africa do sul":"south africa",
"áfrica do sul":"south africa",
"quenia":"kenya",
"quênia":"kenya",
"argelia":"algeria",
"argélia":"algeria",

// América
"chile":"chile",
"peru":"peru",
"colombia":"colombia",
"colômbia":"colombia",
"venezuela":"venezuela",
"bolivia":"bolivia",
"bolívia":"bolivia",
"paraguai":"paraguay",
"uruguai":"uruguay",
"cuba":"cuba",
"jamaica":"jamaica",
"costa rica":"costa rica",
"panama":"panama",
"panamá":"panama",

// Oceania
"australia":"australia",
"austrália":"australia",
"nova zelandia":"new zealand",
"nova zelândia":"new zealand"

}

// verifica se precisa traduzir

const pais = traducoes[input] || input

resultado.innerHTML = "Carregando..."

try{

const resposta = await fetch(
`https://restcountries.com/v3.1/name/${pais}`
)

if(!resposta.ok){
throw new Error("País não encontrado")
}

const dados = await resposta.json()

const paisInfo = dados[0]

const capital = paisInfo.capital
? paisInfo.capital[0]
: "Não informado"

resultado.innerHTML = `

<h2>${paisInfo.name.common}</h2>

<img src="${paisInfo.flags.png}" width="120">

<p><strong>Capital:</strong> ${capital}</p>

<p><strong>Região:</strong> ${paisInfo.region}</p>

<p><strong>População:</strong> ${paisInfo.population.toLocaleString()}</p>

`

}

catch{

resultado.innerHTML = "⚠️ País não encontrado."

}

}