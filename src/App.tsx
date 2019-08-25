import React from "react";
import { Header } from "Components/layout/Header";
import { Footer } from "Components/layout/Footer";
import { LoanForm } from "Components/pages/LoanForm";
import { LocalizedProvider } from "Common/hooks/localization/localizedContext";
import { localizedHeader } from "Common/hooks/localization/localizedStrings ";

export function App() {
  return (
    <>
      <LocalizedProvider value={localizedHeader}>
        <Header />
        <LoanForm />
        <Footer />
      </LocalizedProvider>
    </>
  );
}
