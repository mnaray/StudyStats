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

In diesem Projekt unser Ziel, eine einfache, funktionsfähige SPA zu erstellen. Sie soll Daten von einer API fetchen und diese dann auf der Seite anzeigen.

Dabei möchten wir über den ganzen Prozess hinweg DevOps-Tools verwenden, um die Entwicklung einfacher zu gestalten. Wir wollen uns in das Modul 324 (DevOps-Prozesse mit Tools unterstützen) vertiefen und unsere Kenntnisse somit erweitern.

### Anforderungen

In der folgenden Tabelle sind die Anforderungen für das Projekt.


| Nr. | Muss/<br />Kann | funk./<br />qual./ rand | Beschreibung                                                                     |
| ----- | ----------------- | ------------------------- | :--------------------------------------------------------------------------------- |
| 1   | M               | funk.                   | Die Anwendung soll durch eine Pipeline bereitgestellt werden.                    |
| 2   | M               | funk.                   | Die Anwendung soll durch eine Pipeline automatisch deployed werden.              |
| 3   | M               | funk.                   | Die Anwendung soll vor der Bereitstellung gelintet werden.                       |
| 4   | M               | funk.                   | Vor dem Bereitstellen sollen Unittests durchgeführt werden.                     |
| 5   | M               | funk.                   | Vor dem Bereitstellen sollen Integrationstests durchgeführt werden.             |
| 6   | M               | qual.                   | Die Anwendung soll nur bereitgestellt werden, wenn alle Tests erfolgreich waren. |
| 7   | M               | qual.                   | Die Anwendung soll in der Pipeline auf Vulnerabilities getestet werden.          |
| 8   | M               | qual.                   | Die Anwendung soll einen HTML-Titel(`<h1>`) haben.                               |
| 9   | M               | rand                    | Die Anwendung soll eine API integriert haben.                                    |
| 10  | M               | funk.                   | Die Anwendung soll mindestens ein Objekt von dieser API fetchen können.         |
| 11  | M               | funk.                   | Die Anwendung soll alle gefetchten Objekte im UI darstellen können.             |
| 12  | M               | rand                    | Der Cloudanbieter soll Deta sein.                                                |
| 13  | M               | rand                    | Die Anwendung soll mit SvelteKit erstellt sein.                                  |

### Technologien

Für dieses Projekt habe ich folgende Technologien verwendet:

- [Deta Space](https://deta.space)
- [Svelte](https://svelte.dev)
- [GitHub](https://github.com)
- [Snyk](https://snyk.io/de/)
- [NPM](https://www.npmjs.com/)
- [Playwright](https://playwright.dev/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky Git-Hooks](https://www.npmjs.com/package/husky)

### Quellen

Hier sind alle Quellen aufgelistet, welche während dem Aublauf des Projekts als Hilfe oder Orientation verwendet wurden.

- [Deta Space Dokumentation](https://deta.space/docs/en)
- [Svelte Dokumentation](https://svelte.dev/docs/introduction)
- [GitHub Actions Dokumentation](https://docs.github.com/de/actions)
- [Snyk Dokumentation](https://docs.snyk.io/)
- [Vitest Dokumentation](https://vitest.dev/guide/)
- [Playwright Dokumetation](https://playwright.dev/docs/intro)
- [Husky Dokumentation](https://typicode.github.io/husky/guide.html)
- [Veränderungen einbuchen nach Formatierung in Hooks](https://stackoverflow.com/questions/71753958/git-add-same-files-in-precommit-after-formatting-cannot-add-deleted-files)
