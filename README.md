# Chatbot Web App
Prosty chatbot webowy wykorzystujący HTML, CSS (Bootstrap), JavaScript i Express.js. Aplikacja pozwala na komunikację z modelem AI za pośrednictwem API OpenAI.

# Wymagania
**Node.js**
**NPM**

# Instalacja
Sklonuj repozytorium:  
```git clone https://github.com/twoje-repo/chatbot-web-app.git```  
Przejdź do katalogu projektu:  
```cd chatbot-app```  
Zainstaluj zależności i zainicjalizuj npm:  
```npm init -y```  
```npm install express openai```  

# Konfiguracja
Stwórz plik config.js (jeśli nie istnieje) i podaj swój własny klucz API OpenAI:  
```
module.exports = {  
  OPENAI_API_KEY: 'TWOJ_KLUCZ_API_TUTAJ'  
};  
```

# Struktura projektu
chatbot-web-app/  
│  
├── node_modules/          # Zależności NPM  
│  
├── public/                # Pliki statyczne  
│   ├── index.html         # Frontend aplikacji  
│   ├── main.js            # Logika frontendu, komunikacja z backendem  
│   └── imgs/              # Katalog z obrazkami  
│       └── chatb_logo.png # Logo aplikacji  
│  
├── config.js              # Plik konfiguracyjny z kluczem API (dodaj do .gitignore!)  
│  
├── openai.js              # Obsługa komunikacji z API OpenAI  
│  
├── package.json           # Plik konfiguracji NPM, zależności projektu  
│  
├── server.js              # Backend Express.js, serwowanie plików i endpointy API  

# Uruchomienie
Uruchom serwer lokalnie:  
```node server.js```  
Otwórz przeglądarkę i wejdź na:  
[localhost](http://localhost:3000)  

# Działanie
**index.html** — Prosty interfejs użytkownika z polem czatu.  
**main.js** — Obsługuje interakcję użytkownika, wysyła zapytania do serwera.  
**server.js** — Backend oparty na Express.js, serwuje pliki i odbiera zapytania.  
**openai.js** — Moduł odpowiedzialny za komunikację z API OpenAI.  

# Uwagi
Upewnij się, że config.js zawiera poprawny klucz API OpenAI.  
Nie commituj config.js do repozytorium publicznego!  

# Licencja
*GNU GPL*
