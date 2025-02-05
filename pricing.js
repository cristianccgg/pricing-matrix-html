// Mantenemos la misma estructura de datos
const state = {
  openSections: {
    accounting: false,
    fpAndA: false,
    cfo: false,
    taxFilings: false,
    virtualTaxManager: false,
    hrPas: false,
    rightForYou: false,
    costRange: false,
  },
  animatingSection: null,
};

// Data structure se mantiene igual
const sections = {
  accounting: {
    name: "Accounting",
    mainRow: ["Yes", "Yes", "Yes", "Yes"],
    features: {
      basis: {
        name: "Basis",
        values: [
          "Cash Basis",
          "Cash / Accrual Basis",
          "Accrual Basis",
          "Accrual Basis",
        ],
      },
      cadence: {
        name: "Cadence",
        values: ["Monthly", "Bi-weekly", "Weekly", "Weekly"],
      },
      controller: {
        name: "Controller",
        values: ["x", "x", "Yes", "Yes"],
      },
      payroll: {
        name: "Payroll Reconciliation & Coding",
        values: ["Monthly", "Bi-weekly", "Weekly", "Weekly"],
      },
      billPay: {
        name: "Bill Pay Support",
        values: ["Monthly", "Bi-weekly", "Weekly", "Weekly"],
      },
      invoicing: {
        name: "Invoicing Support",
        values: ["x", "Bi-weekly", "Weekly", "Weekly"],
      },
      ecommerce: {
        name: "E-Commerce Support",
        values: ["x", "Monthly", "Weekly", "Weekly"],
      },
      classManagement: {
        name: "Class Management",
        values: ["x", "Yes", "Yes", "Yes"],
      },
    },
  },
  fpAndA: {
    name: "FP&A",
    mainRow: ["Lite", "Level 1 / Level 2", "Level 2", "Level 3"],
    features: {
      financialModel: {
        name: "Digital Financial Model & Dashboard",
        values: ["Yes", "Yes", "Yes", "Yes"],
      },
      chartAccounts: {
        name: "Chart of Accounts Revamp",
        values: ["x", "Yes", "Yes", "Yes"],
      },
      boardReporting: {
        name: "Board Reporting",
        values: ["x", "As Needed", "As Needed", "As Needed"],
      },
      operatingPlan: {
        name: "Annual Operating Plan",
        values: ["Yes", "Yes", "Yes", "Yes"],
      },
      longRange: {
        name: "Long Range Planning",
        values: ["x", "3 Years", "5 Years", "5+ Years"],
      },
      financialPlanning: {
        name: "Financial Planning & Review Meeting",
        values: ["Combined Monthly", "Monthly", "Monthly", "Weekly"],
      },
      businessStrategy: {
        name: "Business Strategy & Review Meeting",
        values: ["Combined Monthly", "Monthly", "Monthly", "Weekly"],
      },
    },
  },
  cfo: {
    name: "CFO",
    mainRow: ["No", "No", "No", "Yes"],
    features: {
      management: {
        name: "CFO Management of Accounting & Finance functions",
        values: ["", "", "", "Yes"],
      },
      strategy: {
        name: "Recurring Strategy Meetings",
        values: ["", "", "", "Weekly"],
      },
      mergers: {
        name: "Mergers & Acquisition Strategy and Guidance",
        values: ["", "", "", "As Needed"],
      },
      capTable: {
        name: "Cap Table Management",
        values: ["", "", "", "Yes"],
      },
      fundraising: {
        name: "Capital Fundraising / Equity Raise",
        values: ["", "", "", "Yes"],
      },
    },
  },
  taxFilings: {
    name: "Tax Filings",
    mainRow: ["No", "No", "No", "Yes"],
    features: {},
  },
  virtualTaxManager: {
    name: "Virtual Tax Manager",
    mainRow: ["No", "Yes", "Yes", "Yes"],
    features: {
      review: {
        name: "Review of Financial Statements",
        values: ["", "Annually", "Quarterly", "Monthly"],
      },
      compute: {
        name: "Compute Projections",
        values: ["", "Annually", "Quarterly", "Monthly"],
      },
      payment: {
        name: "Estimated Tax Payment discussion",
        values: ["", "Annually", "Quarterly", "Monthly"],
      },
      advisory: {
        name: "Tax Advisory Calls",
        values: ["", "Annually", "Quarterly", "Monthly"],
      },
      adHoc: {
        name: "Ad-Hoc Advisory",
        values: ["", "None", "Limited", "As Needed"],
      },
      salesTax: {
        name: "Sales Tax Filings",
        values: [
          "",
          "1 State Included",
          "<5 States Included",
          "<5 States Included",
        ],
      },
      nexus: {
        name: "Nexus Study",
        values: ["", "If Needed*", "Included", "Included"],
      },
    },
  },
  hrPas: {
    name: "HR / PAS",
    mainRow: [
      "No",
      "Essentials Compliance",
      "Advanced Compliance",
      "Advanced Compliance & Strategy",
    ],
    features: {
      review: {
        name: "Review of Payroll Tax Accounts",
        values: ["", "Quarterly", "Monthly", "Weekly"],
      },
      registration: {
        name: "Registration in New States",
        values: ["", "Up to 3 Included", "As Needed", "As Needed"],
      },
      taxNotice: {
        name: "Payroll Tax Notice Support",
        values: ["", "As Needed", "As Needed", "As Needed"],
      },
      stateNotices: {
        name: "Review & Advisory on State-Specific Notices & Training Requirements",
        values: ["", "Quarterly", "Monthly", "Monthly"],
      },
      benefits: {
        name: "Employee Mandatory Benefits Compliance",
        values: ["", "Annually", "Quarterly", "Monthly"],
      },
      training: {
        name: "Employee Mandatory Training Compliance",
        values: ["", "Annually", "Quarterly", "Monthly"],
      },
      handbook: {
        name: "State-Specific Employee Handbook Updates",
        values: ["", "Annually", "Bi-annually", "Quarterly"],
      },
      hiring: {
        name: "Additional Compliance Needs Prior to Hiring",
        values: ["", "x", "x", "As Needed"],
      },
      compensation: {
        name: "Compensation Benchmarking & Salary Reviews",
        values: ["", "x", "x", "Annually"],
      },
      flsa: {
        name: "FLSA Classification Review",
        values: ["", "x", "x", "Annually"],
      },
      jobDescription: {
        name: "Job Description & Role Alignment",
        values: ["", "x", "x", "Annually"],
      },
      performance: {
        name: "Performance Review Process Enhancement",
        values: ["", "x", "x", "Annually"],
      },
      strategic: {
        name: "Strategic HR Advisory",
        values: ["", "x", "x", "As Needed"],
      },
    },
  },
  rightForYou: {
    name: "Which is right for you?",
    mainRow: ["", "", "", ""],
    features: {
      persona: {
        name: "Customer Persona",
        values: ["PreSeed", "Seed", "Series A", "Established"],
      },
      revenue: {
        name: "Yearly Revenue",
        values: [
          "$1-3 million",
          "$2.5 million +",
          "$5 million +",
          "$5 million +",
        ],
      },
      employees: {
        name: "Employee Count",
        values: ["< 5", "5 - 10", "10 - 50", "50+"],
      },
    },
  },
  costRange: {
    name: "Cost range",
    mainRow: [
      "$1,500 - $2,500 / month",
      "$3,500 - $5,000 / month",
      "$5,000 - $10,000 / month",
      "Contact Us",
    ],
    features: {
      taxFiling: {
        name: "Estimated Tax Filing Cost",
        values: [
          "$1,500 - $2,000",
          "$2,000 - $3,000",
          "$2,000 - $5,000",
          "Included",
        ],
      },
    },
  },
};

function renderMainRowValue(value) {
  if (value === "Yes") {
    const template = document.getElementById("checkIcon");
    const clone = template.content.cloneNode(true);
    const container = clone.querySelector("div");
    container.classList.add(
      "transform",
      "transition-transform",
      "hover:scale-110"
    );
    return clone;
  } else if (value === "No") {
    return createTextElement(
      value,
      "span",
      "text-gray-500 font-medium text-sm md:text-base lg:text-lg transition hover:text-gray-700"
    );
  } else if (value === "Contact Us") {
    const link = document.createElement("a");
    link.href = "https://www.growthlabfinancial.com/calendar";
    link.className =
      "bg-primary hover:bg-secondary text-white lg:px-8 md:px-2 px-1 py-3 rounded-xl hover:shadow-lg active:scale-95 text-xs md:text-sm lg:text-lg font-medium transition-all";
    link.textContent = value;
    link.target = "_blank";
    return link;
  }
  return createTextElement(
    value,
    "span",
    "font-medium text-gray-700 text-sm md:text-base lg:text-lg transition hover:text-primary"
  );
}

function renderValue(value) {
  if (value === "x") {
    const template = document.getElementById("xIcon");
    const clone = template.content.cloneNode(true);
    const container = clone.querySelector("div");
    container.classList.add(
      "transform",
      "transition-transform",
      "hover:scale-125"
    );
    return clone;
  } else if (value === "Yes") {
    const template = document.getElementById("checkIcon");
    const clone = template.content.cloneNode(true);
    const container = clone.querySelector("div");
    container.classList.add(
      "transform",
      "transition-transform",
      "hover:scale-125"
    );
    return clone;
  } else if (value === "") {
    return createTextElement(
      "-",
      "span",
      "text-gray-300 text-sm md:text-base lg:text-lg"
    );
  }
  return createTextElement(
    value,
    "span",
    "text-sm md:text-base lg:text-lg transition hover:text-primary"
  );
}

function createTextElement(text, element = "span", className = "") {
  const el = document.createElement(element);
  el.textContent = text;
  if (className) el.className = className;
  return el;
}

function hasFeatures(section) {
  return Object.keys(section.features).length > 0;
}

function toggleSection(sectionKey) {
  state.animatingSection = sectionKey;
  state.openSections[sectionKey] = !state.openSections[sectionKey];
  renderTable();
}

function renderTable() {
  const tableBody = document.getElementById("pricingTableBody");
  tableBody.innerHTML = "";

  Object.entries(sections).forEach(([sectionKey, section], index) => {
    // Main section row
    const mainRow = document.createElement("tr");
    mainRow.className = `border-t hover:bg-secondary-light/50 transition-all duration-300 hover:scale-[1.01] ${
      sectionKey === "rightForYou" ? "border-t-2 border-primary/20" : ""
    }`;

    // Section name cell
    const nameCell = document.createElement("td");
    nameCell.className = "p-0 sticky-col cursor-pointer";
    nameCell.onclick = () => toggleSection(sectionKey);

    if (hasFeatures(section)) {
      const button = document.createElement("button");
      button.className =
        "w-full flex justify-between items-center p-4 hover:bg-secondary-light/50 transition-all rounded-lg";
      button.onclick = (e) => {
        e.stopPropagation();
        toggleSection(sectionKey);
      };

      const nameSpan = document.createElement("span");
      nameSpan.className = `font-semibold text-sm md:text-base lg:text-lg text-left flex-1 ${
        ["rightForYou", "costRange"].includes(sectionKey) ? "text-gray-900" : ""
      }`;
      nameSpan.textContent = section.name;

      const iconTemplate = state.openSections[sectionKey]
        ? document.getElementById("chevronUpIcon")
        : document.getElementById("chevronDownIcon");
      const icon = iconTemplate.content.cloneNode(true);

      button.appendChild(nameSpan);
      button.appendChild(icon);
      nameCell.appendChild(button);
    } else {
      const nameSpan = document.createElement("span");
      nameSpan.className =
        "font-semibold px-4 text-sm md:text-base lg:text-lg text-left w-full block p-4";
      nameSpan.textContent = section.name;
      nameCell.appendChild(nameSpan);
    }

    mainRow.appendChild(nameCell);

    // Main row values
    section.mainRow.forEach((value) => {
      const cell = document.createElement("td");
      cell.className = "p-6 text-center mobile-col";

      const valueSpan = document.createElement("span");
      valueSpan.className = ["rightForYou", "costRange"].includes(sectionKey)
        ? "font-semibold text-gray-800"
        : "";
      valueSpan.appendChild(renderMainRowValue(value));
      cell.appendChild(valueSpan);
      mainRow.appendChild(cell);
    });

    tableBody.appendChild(mainRow);

    // Feature rows
    if (state.openSections[sectionKey] && hasFeatures(section)) {
      Object.entries(section.features).forEach(
        ([featureKey, feature], featureIndex) => {
          const featureRow = document.createElement("tr");
          featureRow.className =
            "feature-row border-t hover:bg-secondary-light/50  ";

          // Animation only for toggled section
          if (sectionKey === state.animatingSection) {
            featureRow.style.animation = `fadeIn 0.3s ease-out ${
              featureIndex * 0.05
            }s forwards`;
          }

          const nameCell = document.createElement("td");
          nameCell.className = nameCell.className =
            "p-4 pl-8 text-sm md:text-base lg:text-lg text-gray-600 sticky-col text-left bg-secondary-light";
          nameCell.textContent = feature.name;
          featureRow.appendChild(nameCell);

          feature.values.forEach((value) => {
            const valueCell = document.createElement("td");
            valueCell.className =
              "p-4 text-center text-sm md:text-base lg:text-lg mobile-col";
            valueCell.appendChild(renderValue(value));
            featureRow.appendChild(valueCell);
          });

          tableBody.appendChild(featureRow);
        }
      );
    }
  });

  state.animatingSection = null;
  lucide.createIcons();
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderTable();
});
