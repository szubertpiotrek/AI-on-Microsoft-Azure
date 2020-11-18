# AI-on-Microsoft-Azure

## Windsurfing Reservation Bot

#### 1. Use Case
 - 1.1 - Bot **Windsurfing Reservation Bot** ma służyć do rezerwacji sprzętu windsurfingowego oraz zapewniać
 dodatkowe możliwość.
    - rezerwacja - aplikacja pozawala na wieloetapową scieżkę doboru sprzętu. Typ deski windsurfingowej, rozmiar,
    odpowiedni pędnik, dobierany w zależności od wiatru oraz kwestia posiadania pianki, ponieważ opisany spot ma
    ustawioną lokalizację w Chałupach.
    
    - pomoc w doborze sprzętu - aplikacja wykorzystując API pogodowe i informacje o wietrze, a także pobierając dane
    od użytkownika decyduje jaki sprzęt najlepiej będzie pasował do danych warunków pogodowych
    
    - pogoda - odpowiedź na często zadawane sobie pytanie, czy dzisiaj warto pływać, zwracana jest informacja
    o wietrze jak i o zdefiniowanych przez spot wskazówek, czy wg nich warto pływać
    
    - złożenie zażalenia - umożliwia złożenie zażalnia o usterkach podczas realizacji usługi w bazie windsurferskiej
    
    - status zażalenia - przekazanie informacji, że wszystkie dane podane są w mailu
    
    - pomoc - krótka informacja o możliwościach jakie daje aplikacja
    
    - informacje/kontakt - przekazanie informacji o miejscu bazy oraz kontakcie 
    
    - zakończenie działania - możliwość zakończenia aktywnych dialogów w ramach czatu

#### 2. Budowa bota
  Do budowy bota został wykorzystany Bot Framework Composer, który zapewnia tak naprawdę większość
  elementów, pozwalających na budowę Bota. Istotnym elementem jest wbudowany domyślnie w wersji 1.1.1 Bot
  Composera LUIS(Language Understanding). Dzięki LUIS, możemy analizować składnie fraz podawanych przez 
  użytkownika, i decydować o konkretnym scenariuszu realizowanym przez bota. Domyślnym językiem jest język
  angielski i w nim bot się porozumiewa. Dodatkowo bot został poszerzony o zewnętrzne API pogodowe. 
 - 2.1 - Kroki
    - Bot Composer - aplikacja
        -stworzenie triggerów decydujących o uruchamianych przpadkach użycia
        
        -dodanie słów kluczowych dla każdego przypadku, które analizowane są przez LUIS API(potrzebny klucz prywatny i endpoint)
        
        -dodanie nowych dialogów, które są powiązane z triggerami
        
        -budowa dialogów realizujący odpowiednie przypadki użycia
        
        -odpowiednia konfiguaracja tworzonych inputów, opowiedzi bota, pozwalających na dynamiczną konwersację z warunkowymi zdarzeniami
        
        -weryfikacja działania bota w aplikacji Bot Framework Emulator, która podpina się pod localhosta z aplikacją Bot Composera

#### 3. Architektura
 Bot oparty jest o architekturę REST-ową, komunikuje się z zewnętrznymi API po protokole HTTP. Przetwarzane są w tych relacjach dane
 w formacie JSON, które następnie w aplikacji zbudowanej w Bot Framework Composerze, są odbierane i przetwarzane. Bot korzysta z API
 powiązanym z Language Understanding oraz w Weather API. Sama aplikacja podzielona jest na triggery wywołujące scenariusze oraz diaglogi,
 które realizowane są pod warunkami, które musi spełnić użytkownik w celu kontynuowania rozpoczętego procesu.

#### 3. Kod
 Kod umieszczony został w folderze pod nazwą WindsurfingReservationBot. Jest on wygenerowany za pomocą aplikacji Bot Composera,
 a także odpowiednio modyfikowany, by stworzyć spójnego bota. Kluczowy w zreprodukowaniu bota jest plik **appsettings.json**, w którym
 należy podać endpoint oraz swój klucz prywatny dla serwisu LUIS.
 
 #### 4. Wideo na YT
 
 [![Windsurfing Reservation Bot](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
