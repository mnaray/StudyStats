---
sidebar_position: 1
title: Documentation
---
:::note
Dies ist die Dokumentation des Projekts. Sie wurde nach IPERKA umgesetzt. Es wird der Ablauf und die Vorgehensweise des ganzen Projekts dokumentiert.

In diesem Projekt erstellen wir eine kleine React Native multiplatform App. Mit StudyStats soll man seine Noten tracken und managen können um damit seine Noten im Überblick zu haben. Unser Fokus liegt dabei auf das Arbeiten mit React Native.

:::

## Informieren

In diesem Kapitel der Dokumentation wird die Phase festgehalten, in welcher wir uns über alles Nötige informieren. Dazu gehören die Anforderungen und die Auflistung [**aller verwendeten Quellen**](#quellen).

### Was versteht man unter React Native?

React Native ist ein Open-Source-Framework, das es Entwicklern ermöglicht, mobile Anwendungen für iOS und Android mit JavaScript und React zu erstellen. React Native nutzt die gleiche React-Syntax, die auch für Webanwendungen verwendet wird, um Benutzeroberflächen zu erstellen. Der große Vorteil besteht darin, dass Entwickler mit React Native plattformübergreifende mobile Apps schreiben können, während sie den Großteil des Codes zwischen den verschiedenen Plattformen teilen können

### Was ist unser Ziel?

In diesem Projekt unser Ziel, eine einfache, funktionsfähige Notenapp zu entwickeln, mit der man seine Noten managen kann. Dabei liegt unser ziel auf das entwickeln einer **multiplattform** App.

Damit wollen wir unsere Kenntnisse in dem Modul 335: Mobile-Applikation realisieren vertiefen und uns auf die kommende Bewertung vorbereiten.

### Anforderungen

In der folgenden Tabelle sind die Anforderungen für das Projekt.


| Anf. Nr. | Muss/Kann | Funk./Qual./Rand. | Anforderung                                                                                             |
| ---------- | ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| 1        | Muss      | Funktional        | Die App muss auf mehreren Platformen laufen(React Native und TS).                                       |
| 2        | Muss      | Funktional        | Die Daten werden in der Cloud gespeichert.                                                              |
| 3        | Muss      | Funktional        | Die Authentifizierung erfolgt mit MS OAuth.                                                             |
| 4        | Muss      | Rand              | Der Benutzer kann sich über das UI und die Middleware einloggen.                                       |
| 5        | Muss      | Rand              | Der Benutzer kann Fächer über das UI erstellen.                                                       |
| 6        | Muss      | Rand              | Der Benutzer kann Noten über das UI einfügen.                                                         |
| 7        | Kann      | Rand              | Man kann ein Bild seiner Prüfung hochladen. Mit einem Upload button übder das UI                      |
| 8        | Muss      | Rand              | Es wird ein Notenschnitt berechnet und im UI asugegeben.                                                |
| 9        | Muss      | Rand              | Das Ui besitzt unten zwei Felder, um die Tabs zu wechseln.                                              |
| 10       | Muss      | Rand              | Das UI besitzt ein Logo.                                                                                |
| 11       | Muss      | Rand              | Das UI der Startseite hat eine Ausgabe von den Fächern mit dem jeweiligen Durchschnit.                 |
| 12       | Muss      | Rand              | Das UI der Fächerpage hat eine Ausgabe von den Fächern mit den jeweiligen Noten und deren Gewichtung. |
| 13       | Muss      | Rand              | Das UI der Fächerpage ermöglichte es Fächer und Noten nach CRUD zu bearbeiten.                       |
| 14       | Kann      | Rand              | Der Benutzer kann über das UI ageben, wie die Noten gewichtet werden.                                  |

### Technologien

Für dieses Projekt haben wir folgende Technologien verwendet:

- [Deta Space](https://deta.space)
- [GitHub](https://github.com)
- [Node](https://www.npmjs.com/)
- [MS OAuth](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Native](https://reactnative.dev)

### Quellen

Hier sind alle Quellen aufgelistet, welche während dem Aublauf des Projekts als Hilfe oder Orientation verwendet wurden.

- [Deta Space Dokumentation](https://deta.space/docs/en)
- [GitHub Actions Dokumentation](https://docs.github.com/de/actions)
- [React Native](https://reactnative.dev/docs/getting-started)

## Planen

### Arbeitspakete


| Nr. | Frist      | Beschreibung | Geplante Zeit in Paketen |
| ----- | ------------ | :------------- | -------------------------- |
| 1   | 9.11.2023  |              |                          |
| 2   | 16.11.2023 |              |                          |
| 3   | 23.11.2023 |              |                          |
| 4   | 30.11.2023 |              |                          |
| 5   |            |              |                          |
| 6   |            |              |                          |
| 7   |            |              |                          |

:::info

1x Arbeitspaket = 45 Minuten = 1x Schullektion

1x Halbtag = 5x Arbeitspakete

:::

### Testfälle


| Testf.<br />Nr. | Anf.<br />Nr. | Voraussetzungen | Testumgebung | Eingabe/Aktion | Erw. Ausgabe |
| ----------------- | --------------- | ----------------- | -------------- | ---------------- | -------------- |
| 1.1             |               |                 |              |                |              |
| 2.1             |               |                 |              |                |              |

#### Testumgebungen

* Visual Studio Code (VSC)
  * Version: 1.78.2 (user setup)
  * Commit: b3e4e68a0bc097f0ae7907b217c1119af9e03435
  * Date: 2023-05-10T14:39:26.248Z
  * Electron: 22.5.2
  * Chromium: 108.0.5359.215
  * Node.js: 16.17.1
  * V8: 10.8.168.25-electron.0
  * OS: Windows_NT x64 10.0.19045
  * Sandboxed: Yes
* Chrome (für PDFs und Dokumentation)
  * Version: 114.0.5735.134 (Official Build) (64-bit)

### Wireframes

#### Seite 1

#### Seite 2
