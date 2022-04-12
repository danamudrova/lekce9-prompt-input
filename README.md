# README #

Czechitas Javascript 1 - Cvičení na práci s prompt a inputy

Zadání
---

Vytvoř pro úkol 1, úkol 2 i bonus separátní HTML i JS soubory.

**Úkol 1 - prompt**

- Hledáš novou pračku do domácnosti.
- Vybuduj sekvenci promptů, které ti dovolí zadat:
    - šířku pračky v cm
    - výšku pračky v cm
    - hloubku pračky v cm
- Poté, co načteš tyto tři hodnoty ti tvůj kód vypočítá, jestli se ti pračka vleze na místo o parametrech (můžeš je mít pevně v kódu):
    - šířka 62 cm
    - výška 70 cm
    - hloubka 80 cm
- Výsledek vypiš formou alert() nebo do HTML – volba je na tobě.

**Úkol 2 - input**

- Vytvoř si sčítač dvou čísel.
- Nech uživatele zadat dvě celá čísla do dvou vstupů pro číslo.
- Poté, co obě vyplní, vypiš výsledek do HTML.
- Interně můžeš použít funkci z Lekce 1: https://github.com/Czechitas-JavaScript-1/lekce1-funkce-udalosti/blob/main/main.js
- Minibonus: Pokud chceš, můžeš rozšířit na odečítání, násobení i dělení (jak budeš mezi operacemi přepínat?).

**Bonus - input**

- Nech uživatele zadat jeho rodné číslo.
- Proveď validaci, zda se jedná o rodné číslo (převzato z webu Ministerstva vnitra ČR):
    - Rodné číslo je desetimístné číslo, které je dělitelné jedenácti beze zbytku; první dvojčíslí vyjadřuje poslední dvě číslice roku narození, druhé dvojčíslí vyjadřuje měsíc narození, u žen zvýšené o 50, třetí dvojčíslí vyjadřuje den narození; čtyřmístná koncovka je rozlišujícím znakem fyzických osob narozených v tomtéž kalendářním dnu.
    - Rodná čísla přidělená fyzickým osobám narozeným před 1. 1. 1954 mají stejnou strukturu, jsou však devítimístná s třímístnou koncovkou a nesplňují podmínku dělitelnosti jedenácti