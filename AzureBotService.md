# AI-on-Microsoft-Azure

## Azure Bot Service

### QnA Maker Service

#### 1. Intro
 - 1.1 - Celem **QnA Maker** jest umożliwienie utworzenia i opublikowania bazy wiedzy
  z wbudowanymi funkcjami przetwarzania języka naturalnego.
 
 - 1.2 - **QnA Maker** udostępnia interfejs, za pomocą którego można tworzyć, trenować
 i publikować bazy wiedzy oraz zarządzać nimi. System składa się z par pytanie-odpowiedź,
 gdzie pytania i odpowiedzi mogą być następujące:
    - wygenerowane na podstawie stron z często zadawanymi pytaniami i dokumentów
    - zaimportowane z zdefiniowanych źródeł
    - dodane ręcznie

#### 2. Use cases
 - 2.1 - Baza opinii klientów sklepu i odpowiedzi
 - 2.2 - Baza pytań o działanie usługi i odpowiedzi
 - 2.3 - Baza pytań o produkty i odpowiedzi

#### 3. How to use
 - 3.1 Proces użycia QnA Maker Service rozpoczyna się od stworzenia bazy wiedzy zawierającej
 pytania i odpowiedzi, często przypisanie alternatywnych fraz dla tego samego znaczenia w 
 portalu serwisu. Po utworzeniu zestawu par pytań i odpowiedzi przeprowadza się trenowanie bazy.
 Po weryfikacji bazy, należy opublikować ją i wykorzystywać poprzez REST(**identyfikator bazy**,
 zdefiniowany **endpoint**, **klucz autoryzacji** bazy) 
            
 - 3.2 - Pricing dla Europy Zachodniej:<br/><br/>
 ![](img/QnAMake.png)

### Azure Bot Service

#### 1. Intro
 - 1.1 - Celem **Azure Bot Service** jest udostępnienie platformy do tworzenia i publikowania botów
  oraz zarządzania nimi.

 - 1.2 - **Azure Bot Service** pozwala za pomocą Microsoft Bot Framework SDK pisać kod, który podlega
  kontroli przepływu konwersacji i integracji z serwisem QnA Maker. Kolejnym rozwiązaniem jest automatyczne
  generowanie botów za pomocą QnA Maker, gdzie jest możliwość stworzenia bota i publikacji jako
  aplikacji Azure Bot Service.

#### 2. Use cases
 - 2.1 - Boty podające informacje o pogodzie
 - 2.2 - Boty opisujące produkty na stronie
 - 2.3 - Boty opowiadajce kawały

#### 3. How to use
 - 3.1 - Utworzonym botem w aplikacji Azure Bot Service poprzez wykorzystanie bazy wiedzy z serwisu QnA Maker
 można wykonywać czynności:
    - zwiększania funkcjonalności bota przez nowy kod
    - testowanie bota w środowisku testowym
    - konfigurowanie rejestrowania, analiz i intergracji z innymi usługami.
 
    Utworzonego bota można połączyć z wieloma innymi usługami jak np. Teams, e-mail.

 - 3.2 - Pricing dla Europy Zachodniej:<br/><br/>
 ![](img/AzureBotService.png)

### Bot Framework Composer

#### 1. Intro
 - 1.1 - Celem **Bot Framework Composer** jest łatwe i szybkie budowanie botów wchodzących w interakcje
 z użytkownikiem.

 - 1.2 - **Bot Framework Composer** jest to graficzny kreator, który pozwala łatwo i szybko budować zaawansowane
 komunikujące się boty. Jest to open-source'owe narzędzie, które poszerzają możliwości botów:
    - graficzny interfejs eliminuje nieużyteczny kod i obniża próg wejścia dewelopmentu
    - oszczędność czasu przy konfiguracji środowiska
    - projekty zawierają reużywalne elementy, które można łączyć i pakować z kodem źródłowym bota.
     Pliki można wersjonować i wdrażać wraz z aktualizacjami kodu.
    - użycie Adaptive Dialogs dla Language Generation(LG), ułatwia obsługę przerwań i daje botom charakter.
            

#### 2. Use cases
 - 2.1 - Zaawansowane boty pobierające pogodowe API
 - 2.2 - Zaawansowane boty do tworzenia rezerwacji
 - 2.3 - Zaawansowane boty do zapisów na testy COVID

#### 3. How to use
 - 3.1 - Usługa korzysta z gotowego środowiska wdrożeniowego, w którym można w łatwy sposób stworzyć własnego bota.
 W celu użycia frameworka należy pobrać aplikacje desktopową Bot Framework Composer i Bot Framework Emulator
    
 - 3.2 - Pricing: ZA DARMO