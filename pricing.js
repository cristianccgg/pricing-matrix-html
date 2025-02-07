const state = {
  openSections: {
    accounting: false,
    fpAndA: false,
    cfo: false,
    taxFilings: false,
    virtualTaxManager: false,
    hrPas: false,
    rightForYou: false,
  },
  animatingSection: null,
};

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
    name: "HR / People Advisory Services",
    mainRow: ["No", "Yes", "Yes", "Yes"],
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
    name: "Find Your Perfect Fit",
    mainRow: ["", "", "", ""],
    features: {
      persona: {
        name: "Growth Stage",
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
    name: 'Cost Range "Pricing"',
    mainRow: ["$2,500 / mo", "$3,500 / mo", "$5,000 / mo", "Contact Us"],
    features: {},
  },
};

function addInfoIcon(container, tooltipText) {
  const infoIcon = document.getElementById("infoIcon").content.cloneNode(true);
  const iconWrapper = document.createElement("span");
  iconWrapper.className = "info-wrapper";
  iconWrapper.setAttribute("aria-label", tooltipText);
  iconWrapper.setAttribute("role", "tooltip");
  iconWrapper.appendChild(infoIcon);
  container.appendChild(iconWrapper);
}

function renderMainRowValue(value, sectionKey, columnIndex) {
  if (value === "Yes") {
    if (sectionKey === "virtualTaxManager" && columnIndex === 1) {
      const template = document.getElementById("checkIcon");
      const clone = template.content.cloneNode(true);
      const container = clone.querySelector("div");
      container.classList.add(
        "transform",
        "transition-transform",
        "hover:scale-110"
      );
      return clone;
    }
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
    if (sectionKey === "taxFilings") {
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
        const container = document.createElement("div");
        container.className = "tooltip flex items-center justify-center";

        const span = createTextElement(
          value,
          "span",
          "text-gray-500 font-medium text-sm md:text-base lg:text-lg transition hover:text-gray-700 "
        );

        const tooltip = document.createElement("span");
        tooltip.className = "tooltiptext";

        if (columnIndex === 0) {
          tooltip.innerHTML =
            "$1,500 - $2,000<br>1 Federal Filing & 1 State Filing";
        } else if (columnIndex === 1) {
          tooltip.innerHTML =
            "$2,000 - $3,000<br>1 Federal Filing & < 5 State Filings";
        } else if (columnIndex === 2) {
          tooltip.innerHTML = "$2,500+<br>1 Federal Filing & 5+ State Filings";
        }

        container.appendChild(span);
        container.appendChild(tooltip);
        addInfoIcon(container);
        return container;
      }
    }
    return createTextElement(
      value,
      "span",
      "text-gray-500 font-medium text-sm md:text-base lg:text-lg transition hover:text-gray-700"
    );
  } else if (value === "Contact Us") {
    const link = document.createElement("a");
    link.href = "https://www.growthlabfinancial.com/calendar";
    link.className =
      "bg-primary hover:bg-secondary text-white xl:px-6 lg:px-4 md:px-2 px-1 py-3 rounded-xl hover:shadow-lg active:scale-95 text-xs md:text-sm xl:text-base font-medium transition-all";
    link.textContent = value;
    link.target = "_blank";
    return link;
  }
  return createTextElement(
    value,
    "span",
    "font-medium text-gray-700 text-sm md:text-base lg:text-lg transition "
  );
}

function renderValue(value, sectionKey, featureKey, columnIndex) {
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
    if (
      (sectionKey === "virtualTaxManager" &&
        featureKey === "nexus" &&
        columnIndex === 1 &&
        value === "If Needed*") ||
      (sectionKey === "virtualTaxManager" &&
        featureKey === "salesTax" &&
        (columnIndex === 2 || columnIndex === 3) &&
        value === "<5 States Included")
    ) {
      addInfoIcon(container);
    }
    return clone;
  } else if (value === "") {
    return createTextElement(
      "-",
      "span",
      "text-gray-300 text-sm md:text-base lg:text-lg "
    );
  } else if (
    sectionKey === "virtualTaxManager" &&
    featureKey === "nexus" &&
    columnIndex === 1 &&
    value === "If Needed*"
  ) {
    const container = document.createElement("div");
    container.className = "tooltip";

    const span = createTextElement(
      value,
      "span",
      "text-sm md:text-base lg:text-lg transition "
    );

    const tooltip = document.createElement("span");
    tooltip.className = "tooltiptext";
    tooltip.textContent =
      "Will be engaged and invoiced aside from recurring services.";

    container.appendChild(span);
    container.appendChild(tooltip);
    return container;
  } else if (
    sectionKey === "virtualTaxManager" &&
    featureKey === "salesTax" &&
    (columnIndex === 2 || columnIndex === 3) &&
    value === "<5 States Included"
  ) {
    const container = document.createElement("div");
    container.className =
      "tooltip inline-flex items-center justify-center gap-2";
    container.setAttribute("data-tooltip", "true");

    const span = createTextElement(
      value,
      "span",
      "text-sm md:text-base lg:text-lg transition "
    );

    const tooltip = document.createElement("span");
    tooltip.className = "tooltiptext";
    tooltip.textContent =
      "Over 4 state sales tax filings will be managed via Avalara";

    container.appendChild(span);
    container.appendChild(tooltip);
    addInfoIcon(container);
    return container;
  }
  return createTextElement(
    value,
    "span",
    "text-sm md:text-base lg:text-lg transition "
  );
}

function createTextElement(text, element = "span", className = "") {
  const el = document.createElement(element);
  el.textContent = text;
  if (className) el.className = className;
  return el;
}

function hasFeatures(section, sectionKey) {
  if (sectionKey === "costRange") return false;
  return Object.keys(section.features).length > 0;
}

function toggleSection(sectionKey) {
  if (state.animatingSection) {
    return;
  }

  state.animatingSection = sectionKey;
  state.openSections[sectionKey] = !state.openSections[sectionKey];

  const button = document.querySelector(`[data-section="${sectionKey}"]`);
  if (button) {
    button.setAttribute("aria-expanded", state.openSections[sectionKey]);
  }

  renderTable();

  setTimeout(() => {
    state.animatingSection = null;
  }, Object.keys(sections[sectionKey].features || {}).length * 100 + 300);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedRenderTable = debounce(() => {
  renderTable();
}, 150);

function createSectionButton(section, sectionKey) {
  const button = document.createElement("button");
  button.className =
    "w-full flex justify-between items-center p-4 hover:bg-secondary-light/50 transition-all rounded-lg";
  button.setAttribute("data-section", sectionKey);
  button.setAttribute("aria-expanded", state.openSections[sectionKey]);
  button.setAttribute("aria-controls", `section-${sectionKey}`);

  const icon = document.createElement("i");
  icon.className = `dropdown-icon ${
    state.openSections[sectionKey] ? "active" : ""
  }`;
  icon.setAttribute(
    "data-lucide",
    state.openSections[sectionKey] ? "chevron-up" : "chevron-down"
  );

  return button;
}

function renderFeatureRows(tableBody, sectionKey, section) {
  if (state.openSections[sectionKey] && hasFeatures(section, sectionKey)) {
    Object.entries(section.features).forEach(
      ([featureKey, feature], featureIndex) => {
        const featureRow = document.createElement("tr");

        const baseClasses = "feature-row border-t hover:bg-secondary-light/50";
        featureRow.className =
          sectionKey === "taxFilings" && featureKey === "taxFiling"
            ? `${baseClasses} tax-filing-row`
            : baseClasses;

        if (sectionKey === state.animatingSection) {
          featureRow.style.animation = `fadeIn 0.3s ease-out ${
            featureIndex * 0.1
          }s forwards`;
          featureRow.style.opacity = "0";
        } else if (state.openSections[sectionKey]) {
          featureRow.style.opacity = "1";
          featureRow.style.transform = "translateY(0)";
        }

        const nameCell = document.createElement("td");
        nameCell.className =
          "p-4 pl-8 text-sm md:text-base lg:text-lg text-gray-600 sticky-col text-left bg-secondary-light";

        if (sectionKey === "taxFilings" && featureKey === "taxFiling") {
          const container = document.createElement("div");
          container.className = "tooltip flex items-center";
          featureRow.setAttribute("data-feature", "taxFiling");

          const nameSpan = document.createElement("span");
          nameSpan.textContent = feature.name;

          const tooltip = document.createElement("span");
          tooltip.className = "tooltiptext";
          tooltip.style.zIndex = "1002";
          tooltip.innerHTML = "*Estimated<br>*will be engaged separately";

          container.appendChild(nameSpan);
          container.appendChild(tooltip);
          addInfoIcon(container);
          nameCell.appendChild(container);
        } else {
          nameCell.textContent = feature.name;
        }

        featureRow.appendChild(nameCell);

        feature.values.forEach((value, columnIndex) => {
          const valueCell = document.createElement("td");
          valueCell.className =
            "p-4 text-center text-sm md:text-base lg:text-lg mobile-col";
          valueCell.appendChild(
            renderValue(value, sectionKey, featureKey, columnIndex)
          );
          featureRow.appendChild(valueCell);
        });

        tableBody.appendChild(featureRow);
      }
    );
  }
}

function renderTable() {
  const tableBody = document.getElementById("pricingTableBody");
  tableBody.innerHTML = "";

  document.addEventListener("click", function (e) {
    document
      .querySelectorAll('.tooltip[data-active="true"]')
      .forEach((tooltip) => {
        if (!tooltip.contains(e.target)) {
          tooltip.removeAttribute("data-active");
        }
      });

    if (e.target.closest(".tooltip")) {
      const tooltip = e.target.closest(".tooltip");
      const wasActive = tooltip.getAttribute("data-active") === "true";
      tooltip.setAttribute("data-active", !wasActive);
    }
  });

  Object.entries(sections).forEach(([sectionKey, section], index) => {
    const mainRow = document.createElement("tr");

    mainRow.setAttribute("data-section", sectionKey);

    mainRow.className = `border-t hover:bg-secondary-light/50 transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
      sectionKey === "rightForYou" ? "border-t-2 border-primary/20" : ""
    }`;

    mainRow.onclick = () => toggleSection(sectionKey);

    const nameCell = document.createElement("td");
    nameCell.className = "p-0 sticky-col cursor-pointer";

    if (hasFeatures(section, sectionKey)) {
      const button = createSectionButton(section, sectionKey);
      button.onclick = (e) => {
        e.stopPropagation();
        toggleSection(sectionKey);
      };

      const nameSpan = document.createElement("span");
      nameSpan.className = `font-semibold text-sm md:text-base lg:text-lg text-left flex-1 ${
        ["rightForYou", "costRange"].includes(sectionKey) ? "text-gray-900" : ""
      }`;

      if (sectionKey === "costRange") {
        const container = document.createElement("div");
        container.className = "flex flex-col";

        const mainText = document.createElement("span");
        mainText.textContent = section.name;

        const italicText = document.createElement("span");
        italicText.textContent = "(starting at)";
        italicText.className = "italic text-sm text-gray-600 mt-1";

        container.appendChild(mainText);
        container.appendChild(italicText);
        nameSpan.appendChild(container);
      } else {
        nameSpan.textContent = section.name;
      }

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

      if (sectionKey === "costRange") {
        const container = document.createElement("div");
        container.className = "flex flex-col";

        const mainText = document.createElement("span");
        mainText.textContent = section.name;

        const italicText = document.createElement("span");
        italicText.textContent = "(starting at)";
        italicText.className = "italic text-sm text-gray-600 mt-1";

        container.appendChild(mainText);
        container.appendChild(italicText);
        nameSpan.appendChild(container);
      } else {
        nameSpan.textContent = section.name;
      }

      nameCell.appendChild(nameSpan);
    }

    mainRow.appendChild(nameCell);

    section.mainRow.forEach((value, columnIndex) => {
      const cell = document.createElement("td");
      cell.className = "p-6  text-center mobile-col";

      const valueSpan = document.createElement("span");
      valueSpan.className = ["rightForYou", "costRange"].includes(sectionKey)
        ? "font-semibold text-gray-800"
        : "";
      valueSpan.appendChild(renderMainRowValue(value, sectionKey, columnIndex));
      cell.appendChild(valueSpan);
      mainRow.appendChild(cell);
    });

    tableBody.appendChild(mainRow);

    renderFeatureRows(tableBody, sectionKey, section);
  });

  state.animatingSection = null;
  lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  renderTable();
});
