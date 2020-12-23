# AI-on-Microsoft-Azure

## Azure Cognitive Vision Services

### Face API

#### 1. Intro
 - 1.1 - Celem **Face API** jest umożliwienie analizy dopasowania twarzy, atrybutów 
 twarzy i cech charakterystycznych. Pozwala również na grupowanie rozpozanych elementów
  w celu zlokalizowania podobnych twarzy.
 
 - 1.2 - **Face API** udostępnia RESTowe API, którego podstawowymi zadaniami jest:
    - weryfikacja podobieństwa twarzy
    - wykrywanie twarzy na obrazie
    - wyszukiwanie i identyfikowanie twarzy
    - wyszukiwanie podobnych twarzy
    - grupowanie podobnych twarzy, które nie są zidentyfikowane
    
    Grupowanie twarzy pozwala na tworzenie stałych kolekcji powiązanych ze sobą w celu znalezienia
    w zestawie podobnych osób.
    
    Identyfikacja twarzy jest ściśle powiązana z grupowaniem, dzięki czemu **Face API** ma zbiór, 
    do którego może się odnieść i rozpoznać twarz.

#### 2. Use cases
 - 2.1 - Identyfikowanie użytkowników przy uwierzytelnianiu
 - 2.2 - Analiza emocji na twarzy w video
 - 2.3 - Wykrywanie twarzy na obrazach

#### 3. How to use
 - 3.1 **Face API** poprzez odpowiedni **endpoint** pozwala zwrócić informacje na temat:
    - współrzędnych twarzy na obrazie i zajmowanego obszaru
    - punkty orientacyjne elmentów twarzy jak oczy, nos
    - atrybuty określające np. emocje, płeć, wiek
    
    **Face API** działa poporzez budowę niezależnej platformy RESTowej, gdzie wykorzystuje się klucz subskrybcji i odpowiedni endpoint.
    Wspieranymi językami programowania jest Python lub #C.
            
 - 3.2 - Pricing dla Europy Zachodniej:<br/><br/>
 ![](img/QnAMake.png)

### Face Detection API

#### 1. Intro
 - 1.1 - Celem **Face Detection API** jest wykrywanie informacji o wykrytych twarzach na obrazie, ale nie jest
 przeznaczony do identyfiokwania konkretnej twarzy. API to należy do serwisu **Face API**.
 
 - 1.2 - **Face Detection API** udostępnia możliwość uzyskania informacji, gdzie znajduje się
 dana twarz, jakie są wymiary i punkty charakterystyczne. 

#### 2. Use cases
 - 2.1 - Identyfikacja twarzy na obrazach
 - 2.2 - Budowa klawiatury sterowanej wzrokiem dla osób niepełnosprawnych
 - 2.3 - Rozpoznanie ludzkich emocji na zdjęciach

#### 3. How to use
 - 3.1 - **Face Detection API** działa poporzez budowę niezależnej platformy RESTowej, gdzie wykorzystuje się klucz subskrybcji i odpowiedni endpoint,
    który należy wygenerować poprzez serwis **Face API**. Wspieranymi językami programowania jest Python lub #C.
    
    Zwracane informacje są w formie JSONów, które zawierają informację o:
      - regionie zajmowanym przez twarz
      - atrybutach twarzy
      - punktach charakterystycznych twarzy
      
    Przykładowy JSON:
      
      ```
    {
        "faceId": "3f069161-f98f-492c-837a-2bde68105973",
        "faceRectangle": {
            "top": 128,
            "left": 459,
            "width": 224,
            "height": 224
        },
        "faceAttributes": {
            "hair": {
                "bald": 0.1,
                "invisible": false,
                "hairColor": [
                {
                    "color": "brown",
                    "confidence": 0.99
                },
                {
                    "color": "black",
                    "confidence": 0.57
                }
            }
         }
    }
   ``` 
        

 - 3.2 - Pricing dla Europy Zachodniej:<br/><br/>
 ![](img/AzureBotService.png)

### Face Recognition API

#### 1. Intro
 - 1.1 - Celem **Face Recognition API** jest analizowanie punktów orientacyjnych na co najmniej dwóch obrazach, by stwierdzić czy
 zawierają one tą samą twarz. Rozwiązanie to opiera się o **Face Detection API**. API to należy do serwisu **Face API**.

 - 1.2 - **Face Recognition API** poprzez analizę pozwala określić:
    - twarz należącą do tej samej osoby
    - występienie podobieństwa do innych osób
    - czy twarze należą do tej samej grupy
    - kim jest osoba w grupie
            
#### 2. Use cases
 - 2.1 - Weryfikacja osób
 - 2.2 - Podobieństwo do grupy osób
 - 2.3 - Rozpoznanie osób

#### 3. How to use
 - 3.1 - **Face Recognition API** działa poporzez budowę niezależnej platformy RESTowej, gdzie wykorzystuje się klucz subskrybcji i odpowiedni endpoint,
    który należy wygenerować poprzez serwis **Face API**. Wspieranymi językami programowania jest Python lub #C.
    
    **Face Recognition API** przykładowo w procesie weryfikacji zwraca informacje o pewności zgodności porównywanych zdjęć.
       
 - 3.2 - Pricing: ZA DARMO
 
### Emotion API

#### 1. Intro
 - 1.1 - Celem **Emotion API** jest rozpoznawanie emocji za pomocą szeregu metod i algorytmów.

 - 1.2 - **Emotion API** pozwaala poprzez zaawansowane algorytmy analiza na przypisywanie poziomu pewności konkretnych emocji:
    - złość
    - pogarda
    - obrzydzenie
    - strach
    - szczęscie
    - neutralne
    - smutek
    - zaskoczenie
    
    Podobnie jak reszta serwisów z **Face API** pozwala na wskazanie lokalizacji twarzy na obrazie.
            

#### 2. Use cases
 - 2.1 - Analiza reakcji ludzi na zdarzenie
 - 2.2 - Rozpoznanie intencji osób na nagraniach
 - 2.3 - Aplikacja dopasowująca nastrój zdjęcia do przedstawionych emocji

#### 3. How to use
 - 3.1 - **Face Detection API** działa poporzez budowę niezależnej platformy RESTowej, gdzie wykorzystuje się klucz subskrybcji i odpowiedni endpoint,
    który należy wygenerować poprzez serwis **Face API**. Wspieranymi językami programowania jest Python lub #C.
    
    Zwracane informacje są w formie JSONów, które zawierają informację o:
      - wyniku rozpoznanych emocji dla każdego typu w zakresie 0,0-1,0
      ``` 
       {
            "faceRectangle": {
                "top": 116,
                "left": 459,
                "width": 45,
                "height": 45
            },
            "faceAttributes": {
                "emotion": {
                    "anger": 0.0,
                    "contempt": 0.0,
                    "disgust": 0.0,
                    "fear": 0.0,
                    "happiness": 1.0,
                    "neutral": 0.0,
                    "sadness": 0.0,
                    "surprise": 0.0
                }
            }
        }
            
      ```
      - lokalizacji regionu na zdjęciu
          
 - 3.2 - Pricing: ZA DARMO
 
### Computer Vision API

#### 1. Intro
 - 1.1 - Celem **Computer Vision API** jest udostępnienie algorytmów do przetwarzania obrazów i zwracanie szczegółowych informacji. Pozwala
  sprawdzić, czy obraz zawiera treści przeznaczone dla osób dorosłych, lub znaleźć na obrazie twarze. Oferuje szacowanie kolorów 
  dominujących i wiodących, kategoryzowanie zawartości obrazów oraz opisywanie obrazu pełnymi 
  zdaniami w języku angielskim. Umożliwia inteligentne generowanie miniatur obrazów.

 - 1.2 - **Computer Vision API** można użyć do wykonania następujących czynności:
    - analizowanie obrazów w celu uzyskania szczegółowych informacji
    - wyodrębnianie tekstu drukowanego z obrazów (OCR)
    - rozpoznawanie na obrazach tekstu drukowanego i odręcznego
    - rozpoznawanie osobistości i charakterystycznych elementów krajobrazu
    - analiza filmów wideo
    - generowanie miniatury obrazu

#### 2. Use cases
 - 2.1 - Analizowanie dokumentów
 - 2.2 - Przetwarzanie tekstów pisanych do wersji elektronicznej
 - 2.3 - Analiza udostępnianych obrazów dla osób niepełnoletnich

#### 3. How to use
 - 3.1 - **Computer Vision API** działa poporzez budowę niezależnej platformy RESTowej, gdzie wykorzystuje się klucz subskrybcji i odpowiedni endpoint.
    W celu użycia serwisu należy wykonać zapytanie POST ***region**.api.cognitive.microsoft.com/vision/v2.0/**resource**/**parameters***,
    gdzie **region** to lokalizacja działania aplikacji, **resource** to rodzaje zasobów (analyze, describe, generateThumbnail, ocr, models, recognizeText, tag),
    oraz **parameteres**, które opisują badany element.
          
 - 3.2 - Pricing: ZA DARMO
  
### Custom Vision Service

#### 1. Intro
 - 1.1 - Celem **Custom Vision Service** jest tworzenie modeli klasyfikacji obrazów, które uczą się na podstawie udostępnionych obrazów z etykietami.

 - 1.2 - **Custom Vision Service** pozwala stworzyć własne klasyfikatory obrazów, które następnie można odpytywać poprzez REST API.
 
#### 2. Use cases
 - 2.1 - Rozpoznawanie obrazów
 - 2.2 - Przetwarzanie tekstów pisanych do wersji elektronicznej
 - 2.3 - Analiza udostępnianych obrazów dla osób niepełnoletnich

#### 3. How to use
 - 3.1 - **Custom Vision Service** działa poporzez budowę niezależnej platformy RESTowej, gdzie wykorzystuje się klucz subskrybcji i odpowiedni endpoint.
    W celu użycia serwisu należy wykonać zapytanie pod odpowiednio wcześniej stworzony model i uzyskać informacje o klasyfiowanym obiekcie.
          
 - 3.2 - Pricing: ZA DARMO
 
 ### Computer Vision API

#### 1. Intro
 - 1.1 - Celem **Custom Vision API** jest dostarczenie algorytmów, dzięki którym można tworzyć i dostosowywać własne
  najnowocześniejsze modele przetwarzania obrazów.

 - 1.2 - **Custom Vision API** używa wywołań protokołu REST, aby tworzyć klasyfikatory, przekazywać obrazy
  i oznaczać je tagami, przeprowadzać trenowanie, zarządzać iteracjami modelu, korzystać z przewidywania. Usługami oferowanymi przez
  to API jest **trenowanie klasyfikatorów** i **przewidywanie** na podstawie modeli klasyfikacji.
  
    **Custom Vision API** wykorzystać można do:
      - tworzenia nowych modeli
      - tagowania obrazów treningowych
      - trenowania klasyfikatorów
      - wykrywania obiektów i klasyfikacji

#### 2. Use cases
 - 2.1 - Rozpoznawanie ras psów
 - 2.2 - Rozpoznawanie uszkodzonych produktów
 - 2.3 - Klasyfikacja komórek rakowych

#### 3. How to use
 - 3.1 - **Custom Vision API** działa poprzez odpytanie RESTowe, gdzie wykorzystuje się klucz subskrybcji i odpowiedni endpoint.
    Usługa może realizować:
      - ClassifyImage - klasyfikacja poprzez bloba
      - ClassifyImageUrl - klasyfikacja poprzez link do zdjęcia
      - DetectImage - detekcja poprzez bloba
      - DetectImageUrl - detekcja poprzez link do zdjęcia
      
     Endpoint *https://{endpoint}/customvision/v3.0/Prediction/{projectId}/{projectType}/iterations/{iterationName}/{imageType}* składa się z kilku elementów:
      - endpoint - punkt końcowy lokalizacji usługi
      - projektId - określenie projektu
      - projectType - określenie typu projektu
      - iterationName - nazwa iteracji trenowanego modelu
      - imageType - url/image jako dane wejściowe
      
      W wyniku użycia otrzymujemy odpowiednią odpowiedź w formacie JSON
          
 - 3.2 - Pricing: ZA DARMO
 
  ### Azure Video Indexer

#### 1. Intro
 - 1.1 - Celem **Azure Video Indexer** jest ekstrakcja informacji z treści video. Wykorzystuje się do tego
 modele uczenia maszynowane, które można dalej doszkalać i dostosowywać do wybranego problemu. 

 - 1.2 - **Azure Video Indexer** obejmuje identyfikacje twarzy, rozpoznawanie tekstu, etykiety obiektów,
 segmentacje scen. Informacje są wydobywane także z dżwięku, takie jak transkrypcja i detekcji emocji. Dzięki tym funkcjom
 serwisu można ulepszyć wyszukiwanie, wyodrębniać klipy. Otrzymane wyniki są indeksowane, co pozwala na sprawne poruszanie 
 po wygenerowanych etykietach w tworzonym np. algorytmie wyszukiwania wideo. Te dane wyjściowe obejmują unikalne identyfikatory, 
 metadane wideo i szczegółowe informacje o filmie.

#### 2. Use cases
 - 2.1 - Transkrypcja filmów
 - 2.2 - Analiza treści przekazywanych w filmie
 - 2.3 - Stworzenie łatwego wyszukiwania danych z filmów

#### 3. How to use
 - 3.1 - **Azure Video Indexer** umożliwia działanie poporzez budowę niezależnej platformy RESTowej, gdzie wykorzystuje się klucz subskrybcji i odpowiedni endpoint.
    Wspieranymi językami programowania jest Python lub #C.
    
    Video można przekazywać za pomocą:
     - adresu URL,
     - plik jako tablica bajtów
     - odwołanie do identyfikatora zasobu
          
 - 3.2 - Pricing: ZA DARMO