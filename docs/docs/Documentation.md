---
sidebar_position: 1
title: Documentation
---

:::note
This is the documentation of the project. It has been implemented using IPERKA. It documents the process and approach of the entire project.

In this project, we are creating a small React Native multiplatform app. StudyStats allows users to track and manage their grades to have an overview of their academic performance. Our focus is on working with React Native.

:::

## Inform

This section of the documentation captures the phase in which we gather all necessary information. This includes requirements and the listing of [**all used sources**](#sources).

### Understanding React Native

React Native is an open-source framework that enables developers to create mobile applications for iOS and Android using JavaScript and React. React Native uses the same React syntax used for web applications to build user interfaces. The significant advantage is that developers can write cross-platform mobile apps with React Native, sharing the majority of the code between different platforms.

### Our Goal

The goal of this project is to develop a simple, functional grade management app. Our focus is on creating a **multiplatform** app.

This project aims to deepen our knowledge in Module 335: Mobile Application Realization and prepare for the upcoming evaluation.

### Requirements

The following table outlines the requirements for the project.

| Req. No. | Mandatory/Optional | Func./Qual./Margin. | Requirement                                                                             |
| -------- | ------------------ | ------------------- | --------------------------------------------------------------------------------------- |
| 1        | Mandatory          | Functional          | The app must run on multiple platforms (React Native and TS).                           |
| 2        | Mandatory          | Functional          | Data will be stored in the cloud.                                                       |
| 3        | Mandatory          | Functional          | Authentication will be done using MS OAuth.                                             |
| 4        | Mandatory          | Margin              | The user can log in via the UI and middleware.                                          |
| 5        | Mandatory          | Margin              | The user can create subjects via the UI.                                                |
| 6        | Mandatory          | Margin              | The user can insert grades via the UI.                                                  |
| 7        | Optional           | Margin              | The user can upload an image of their test with an upload button in the UI.             |
| 8        | Mandatory          | Margin              | A grade average will be calculated and displayed in the UI.                             |
| 9        | Mandatory          | Margin              | The UI has three fields at the bottom to switch tabs.                                   |
| 10       | Mandatory          | Margin              | The UI has a logo.                                                                      |
| 11       | Mandatory          | Margin              | The UI of the homepage displays subjects with their respective averages.                |
| 12       | Mandatory          | Margin              | The UI of the subjects page displays subjects with their respective grades and weights. |
| 13       | Mandatory          | Margin              | The UI of the subjects page allows editing subjects and grades using CRUD.              |
| 14       | Optional           | Margin              | The user can specify how grades are weighted via the UI.                                |

### Technologies

For this project, we used the following technologies:

-   [Deta Space](https://deta.space)
-   [GitHub](https://github.com)
-   [Node](https://www.npmjs.com/)
-   [MS OAuth](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [React Native](https://reactnative.dev)

### Sources

Here are all the sources that were used as help or orientation during the project.

-   [Deta Space Dokumentation](https://deta.space/docs/en)
-   [GitHub Actions Dokumentation](https://docs.github.com/de/actions)
-   [React Native](https://reactnative.dev/docs/getting-started)

## Plan

### Work Packages

| No. | Deadline   | Description | Planned Time in Packages |
| --- | ---------- | :---------- | ------------------------ |
| 1   | 9.11.2023  |             |                          |
| 2   | 16.11.2023 |             |                          |
| 3   | 23.11.2023 |             |                          |
| 4   | 30.11.2023 |             |                          |
| 5   |            |             |                          |
| 6   |            |             |                          |
| 7   |            |             |                          |

:::info

1x work package = 45 minutes = 1x school lesson

1x half-day = 5x work packages

:::

### Test Cases

| Test<br />No. | Req.<br />No. | Preconditions | Test Environment | Input/Action | Expected Output |
| ------------- | ------------- | ------------- | ---------------- | ------------ | --------------- |
| 1.1           |               |               |                  |              |                 |
| 2.1           |               |               |                  |              |                 |

#### Test Environments

-   Visual Studio Code (VSC)
    -   Version: 1.78.2 (user setup)
    -   Commit: b3e4e68a0bc097f0ae7907b217c1119af9e03435
    -   Date: 2023-05-10T14:39:26.248Z
    -   Electron: 22.5.2
    -   Chromium: 108.0.5359.215
    -   Node.js: 16.17.1
    -   V8: 10.8.168.25-electron.0
    -   OS: Windows_NT x64 10.0.19045
    -   Sandboxed: Yes
-   Chrome (for PDFs and documentation)
    -   Version: 114.0.5735.134 (Official Build) (64-bit)

### Wireframes

These are the wireframes we came up with for the app. As they are only used for orientation when creating the frontend they are likely not going to make it into production the way they are seen here. Some minor changes and adjustments are to be expected.

#### Overview

![](assets/20231128_145311_overwiev_full.jpg)

![](assets/20231128_145416_overview_pages.jpg)

#### Homepage

![](assets/20231128_145431_homepage.jpg)

![](assets/20231128_145646_new_entry_view.jpg)

#### Subjects

![](assets/20231128_145443_subjects_page.jpg)

#### All Tests

![](assets/20231128_145456_all_tests_page.jpg)

![](assets/20231128_145602_detailed_test_view.jpg)
