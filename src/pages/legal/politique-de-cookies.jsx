import { jsxDEV } from "react/jsx-dev-runtime";
const updated = "Derni\xE8re mise \xE0 jour : 4 septembre 2026";
function Rule() {
  return /* @__PURE__ */ jsxDEV("div", { className: "rule", "aria-hidden": "true" }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}
function DocumentHeader({ title, subtitle, extra }) {
  return /* @__PURE__ */ jsxDEV("header", { className: "document-header", children: [
    /* @__PURE__ */ jsxDEV("h1", { children: title }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    subtitle && /* @__PURE__ */ jsxDEV("div", { className: "document-subtitle", children: subtitle }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 20
    }, this),
    extra && /* @__PURE__ */ jsxDEV("div", { className: "document-extra", children: extra }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 15,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
function Section({ title, children }) {
  return /* @__PURE__ */ jsxDEV("section", { className: "doc-section", children: [
    /* @__PURE__ */ jsxDEV("h2", { children: title }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 21,
      columnNumber: 43
    }, this),
    children
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}
function Subsection({ title, children }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "doc-subsection", children: [
    /* @__PURE__ */ jsxDEV("h3", { children: title }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 25,
      columnNumber: 42
    }, this),
    children
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
function Bullets({ children }) {
  return /* @__PURE__ */ jsxDEV("ul", { children }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
function PolitiqueDeCookies() {
  return /* @__PURE__ */ jsxDEV("main", { className: "document", children: /* @__PURE__ */ jsxDEV("article", { className: "page", children: [
    /* @__PURE__ */ jsxDEV(DocumentHeader, { title: "POLITIQUE DE COOKIES", subtitle: "STAFFLY AGENCY", extra: updated }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Rule, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "1. Qu\u2019est-ce qu\u2019un cookie ?", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Un cookie est un petit fichier enregistr\xE9 sur votre appareil (ordinateur, smartphone, tablette) lors de votre navigation sur un site internet. Il permet notamment de m\xE9moriser certaines informations pour am\xE9liorer votre exp\xE9rience utilisateur et mesurer l\u2019audience du site." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "Les cookies ne permettent pas d\u2019identifier personnellement un utilisateur." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "2. Quels cookies utilisons-nous ?", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Le site STAFFLY Agency utilise des cookies strictement n\xE9cessaires et des cookies de mesure d\u2019audience." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Subsection, { title: "a) Cookies n\xE9cessaires au fonctionnement du site", children: [
        /* @__PURE__ */ jsxDEV("p", { children: "Ces cookies garantissent le bon fonctionnement technique du site :" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Bullets, { children: [
          /* @__PURE__ */ jsxDEV("li", { children: "gestion des pr\xE9f\xE9rences de navigation ;" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 46,
            columnNumber: 22
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "s\xE9curit\xE9 du site ;" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 46,
            columnNumber: 70
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "acc\xE8s aux fonctionnalit\xE9s essentielles." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 46,
            columnNumber: 97
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "Ils ne peuvent pas \xEAtre d\xE9sactiv\xE9s depuis nos syst\xE8mes." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Subsection, { title: "b) Cookies de mesure d\u2019audience (Google Analytics ou \xE9quivalent)", children: [
        /* @__PURE__ */ jsxDEV("p", { children: "Utilis\xE9s pour analyser la fr\xE9quentation, comprendre l\u2019utilisation du site et am\xE9liorer son contenu. Les donn\xE9es sont anonymis\xE9es dans la mesure du possible." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "Ces cookies sont soumis \xE0 votre consentement." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "3. Bandeau cookies et consentement", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Lors de votre premi\xE8re visite, un bandeau s\u2019affiche pour :" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Bullets, { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "accepter tous les cookies ;" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 56,
          columnNumber: 20
        }, this),
        /* @__PURE__ */ jsxDEV("li", { children: "refuser tous les cookies (hors cookies n\xE9cessaires) ;" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 56,
          columnNumber: 56
        }, this),
        /* @__PURE__ */ jsxDEV("li", { children: "personnaliser vos choix." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 56,
          columnNumber: 118
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "Votre consentement est conserv\xE9 pendant une dur\xE9e maximale de 13 mois, conform\xE9ment \xE0 la r\xE9glementation." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "4. Gestion et d\xE9sactivation des cookies", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "\xC0 tout moment, vous pouvez :" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Bullets, { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "modifier vos pr\xE9f\xE9rences dans le bandeau cookies (si accessible) ;" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 61,
          columnNumber: 20
        }, this),
        /* @__PURE__ */ jsxDEV("li", { children: "d\xE9sactiver les cookies depuis les param\xE8tres de votre navigateur." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 61,
          columnNumber: 95
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "Exemples de gestion via navigateur :" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Bullets, { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Chrome : Param\xE8tres \u2192 Confidentialit\xE9 \u2192 Cookies" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 63,
          columnNumber: 20
        }, this),
        /* @__PURE__ */ jsxDEV("li", { children: "Safari : R\xE9glages \u2192 Safari \u2192 Cookies" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 63,
          columnNumber: 76
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Bullets, { children: [
      /* @__PURE__ */ jsxDEV("li", { children: "Firefox : Options \u2192 Vie priv\xE9e \u2192 Cookies" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 65,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ jsxDEV("li", { children: "Edge : Param\xE8tres \u2192 Cookies et autorisations" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 65,
        columnNumber: 67
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "5. Donn\xE9es collect\xE9es via cookies", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Les cookies peuvent collecter :" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Bullets, { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "des donn\xE9es techniques (type de navigateur, pages visit\xE9es, dur\xE9e de session) ;" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 68,
          columnNumber: 20
        }, this),
        /* @__PURE__ */ jsxDEV("li", { children: "des informations li\xE9es \xE0 l\u2019usage du site." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 68,
          columnNumber: 108
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "Aucune donn\xE9e sensible n\u2019est collect\xE9e. Aucun cookie n\u2019est utilis\xE9 pour du ciblage publicitaire personnalis\xE9 sans consentement." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "6. Contact", children: /* @__PURE__ */ jsxDEV("p", { children: "Pour toute question sur la gestion des cookies ou vos droits RGPD : nelson@stafflyagency.com" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 71,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
export default PolitiqueDeCookies;
