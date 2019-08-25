import React from "react";
import { Header } from "Components/layout/Header";
import { Footer } from "Components/layout/Footer";
import { LoanForm } from "Components/pages/LoanForm";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header />
        <LoanForm />
        <Footer />
      </I18nextProvider>
    </>
  );
}
