import { jsxDEV } from "react/jsx-dev-runtime";
function Rule() {
  return /* @__PURE__ */ jsxDEV("div", { className: "rule", "aria-hidden": "true" }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
function DocumentHeader({ title, subtitle }) {
  return /* @__PURE__ */ jsxDEV("header", { className: "document-header", children: [
    /* @__PURE__ */ jsxDEV("h1", { children: title }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    subtitle && /* @__PURE__ */ jsxDEV("div", { className: "document-subtitle", children: subtitle }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 12,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
function Section({ title, children }) {
  return /* @__PURE__ */ jsxDEV("section", { className: "doc-section", children: [
    /* @__PURE__ */ jsxDEV("h2", { children: title }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 18,
      columnNumber: 43
    }, this),
    children
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}
function Subsection({ title, children }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "doc-subsection", children: [
    /* @__PURE__ */ jsxDEV("h3", { children: title }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 22,
      columnNumber: 42
    }, this),
    children
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
function Bullets({ children }) {
  return /* @__PURE__ */ jsxDEV("ul", { children }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
function MentionsLegales() {
  return /* @__PURE__ */ jsxDEV("main", { className: "document", children: /* @__PURE__ */ jsxDEV("article", { className: "page", children: [
    /* @__PURE__ */ jsxDEV(DocumentHeader, { title: "MENTIONS L\xC9GALES", subtitle: "STAFFLY AGENCY" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Rule, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { children: "Site internet : www.stafflyagency.com" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { children: "\xC9diteur : STAFFLY AGENCY" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "1. \xC9diteur du site", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Le pr\xE9sent site est \xE9dit\xE9 par :" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: [
        "STAFFLY AGENCY, Soci\xE9t\xE9 par Actions Simplifi\xE9e (SAS)",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 39,
          columnNumber: 65
        }, this),
        "Capital social : 1 000 \u20AC \xA0Si\xE8ge social : 76 rue du Temple, 75003 Paris",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 40,
          columnNumber: 88
        }, this),
        "RCS : Paris 878 118 660",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 41,
          columnNumber: 36
        }, this),
        "N\xB0 SIREN : 878 118 660",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 42,
          columnNumber: 35
        }, this),
        "N\xB0 TVA intracommunautaire : FR19878118660",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 43,
          columnNumber: 54
        }, this),
        "Contact : nelson@stafflyagency.com"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "2. H\xE9bergement du site", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Le site est h\xE9berg\xE9 par :" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "O2switch\xA0 Adresse : Chemin des Pardiaux, 63000 Clermont-Ferrand" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "3. Activit\xE9 de l\u2019entreprise", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "STAFFLY Agency est une soci\xE9t\xE9 sp\xE9cialis\xE9e dans :" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Bullets, { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "la mise en relation entre \xE9tablissements professionnels et personnel \xE9v\xE9nementiel, h\xF4tellerie, restauration ;" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("li", { children: "le recrutement par co-optation ;" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("li", { children: "la gestion de missions ponctuelles ou r\xE9currentes." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 55,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "La soci\xE9t\xE9 agit comme interm\xE9diaire et non comme employeur des professionnels mis en relation, sauf mention expresse ou contrat sp\xE9cifique." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "4. Propri\xE9t\xE9 intellectuelle", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "L\u2019ensemble des \xE9l\xE9ments pr\xE9sents sur le site (textes, images, vid\xE9os, graphismes, logo, structure) est la propri\xE9t\xE9 exclusive de STAFFLY Agency, sauf mention contraire." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "Toute reproduction, modification ou exploitation, totale ou partielle, sans autorisation \xE9crite pr\xE9alable est strictement interdite et constituerait une contrefa\xE7on au sens du Code de la propri\xE9t\xE9 intellectuelle." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "5. Donn\xE9es personnelles (RGPD)", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Conform\xE9ment au RGPD et \xE0 la loi Informatique et Libert\xE9s modifi\xE9e :" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Subsection, { title: "Donn\xE9es collect\xE9es", children: [
        /* @__PURE__ */ jsxDEV("p", { children: "Les donn\xE9es collect\xE9es via les formulaires (nom, email, t\xE9l\xE9phone, informations professionnelles) sont utilis\xE9es exclusivement pour :" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Bullets, { children: [
          /* @__PURE__ */ jsxDEV("li", { children: "r\xE9pondre aux demandes ;" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 67,
            columnNumber: 22
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "proposer des missions ;" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 67,
            columnNumber: 54
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "g\xE9rer la relation commerciale." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 67,
            columnNumber: 86
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Subsection, { title: "Conservation et confidentialit\xE9", children: /* @__PURE__ */ jsxDEV("p", { children: "Les donn\xE9es ne sont jamais revendues \xE0 des tiers. Elles sont conserv\xE9es pour une dur\xE9e adapt\xE9e aux finalit\xE9s du traitement." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 70,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Subsection, { title: "Vos droits", children: [
        /* @__PURE__ */ jsxDEV("p", { children: "Vous disposez \xE0 tout moment des droits :" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 73,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Bullets, { children: [
          /* @__PURE__ */ jsxDEV("li", { children: "d\u2019acc\xE8s ;" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 74,
            columnNumber: 22
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "de rectification ;" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 74,
            columnNumber: 40
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "de suppression ;" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 74,
            columnNumber: 67
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "d\u2019opposition ;" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 74,
            columnNumber: 92
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "de portabilit\xE9." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 74,
            columnNumber: 115
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "Pour exercer vos droits : lesly@stafflyagency.com" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "6. Cookies", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Le site utilise des cookies n\xE9cessaires au fonctionnement et, \xE9ventuellement, des cookies de mesure d\u2019audience. Un bandeau de consentement informe l\u2019utilisateur et lui permet d\u2019accepter, refuser ou personnaliser les cookies." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "Pour plus d\u2019informations : voir notre Politique de Cookies." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "7. Responsabilit\xE9", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "STAFFLY Agency s\u2019efforce de fournir des informations fiables et \xE0 jour, mais ne garantit ni l\u2019exactitude, ni l\u2019exhaustivit\xE9 des contenus." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "La soci\xE9t\xE9 ne peut \xEAtre tenue responsable :" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Bullets, { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "de toute erreur involontaire ;" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 85,
          columnNumber: 20
        }, this),
        /* @__PURE__ */ jsxDEV("li", { children: "d\u2019un dysfonctionnement technique ;" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 85,
          columnNumber: 59
        }, this),
        /* @__PURE__ */ jsxDEV("li", { children: "d\u2019un virus ou d\u2019un bug ;" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 85,
          columnNumber: 102
        }, this),
        /* @__PURE__ */ jsxDEV("li", { children: "de l\u2019utilisation du site ou des liens externes." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 85,
          columnNumber: 135
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Section, { title: "8. Loi applicable", children: /* @__PURE__ */ jsxDEV("p", { children: "Les pr\xE9sentes mentions l\xE9gales sont r\xE9gies par la l\xE9gislation fran\xE7aise. En cas de litige, les tribunaux comp\xE9tents seront ceux du ressort du si\xE8ge social de STAFFLY Agency." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 88,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 87,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export default MentionsLegales;
