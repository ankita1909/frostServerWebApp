# FrostFrontend

## Setup

1. Install node >= 10 and npm from [here](https://nodejs.org/en/).
2. Install angular
```
npm install -g @angular/cli
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## General Architecture

The app is divided into components. Each of the resource components has a list view and a detail view. The detail view contains the detailed properties of a single resource, with option to edit them. The list view shows a table with some important properties.
