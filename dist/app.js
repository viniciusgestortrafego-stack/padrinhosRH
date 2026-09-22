document.getElementById("year").textContent = new Date().getFullYear();

const leadForm = document.getElementById("lead-form");

function normalizeLead(formData) {
  return {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    company: String(formData.get("company") || "").trim(),
    website: String(formData.get("website") || "").trim(),
    source: "site-padrinhos-rh"
  };
}

function validateLead(lead) {
  if (lead.website) return { ok: false, message: "Não foi possível enviar o formulário." };
  if (!lead.name || !lead.email || !lead.phone || !lead.company) {
    return { ok: false, message: "Preencha todos os campos para continuar." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return { ok: false, field: "email", message: "Informe um e-mail válido." };
  }
  if (lead.phone.replace(/\D/g, "").length < 10) {
    return { ok: false, field: "phone", message: "Informe um telefone com DDD." };
  }
  if (lead.name.length > 120 || lead.company.length > 120 || lead.email.length > 160) {
    return { ok: false, message: "Revise os dados informados." };
  }
  return { ok: true };
}

function buildWhatsAppUrl(lead) {
  const message = [
    "Olá, vim do site da Padrinhos RH e quero conversar sobre uma proposta.",
    "",
    `Nome: ${lead.name}`,
    `Empresa: ${lead.company}`,
    `E-mail: ${lead.email}`,
    `Telefone: ${lead.phone}`
  ].join("\n");
  return `https://wa.me/5511983324851?text=${encodeURIComponent(message)}`;
}

function setStatus(status, message, state = "") {
  status.textContent = message;
  status.dataset.state = state;
}

if (leadForm) {
  const submitButton = leadForm.querySelector("button[type='submit']");
  const status = document.getElementById("form-status");

  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    leadForm.querySelectorAll("input").forEach((input) => input.removeAttribute("aria-invalid"));

    if (!leadForm.checkValidity()) {
      leadForm.reportValidity();
      setStatus(status, "Preencha todos os campos obrigatórios.", "error");
      return;
    }

    const lead = normalizeLead(new FormData(leadForm));
    const validation = validateLead(lead);
    if (!validation.ok) {
      if (validation.field) {
        const field = leadForm.elements.namedItem(validation.field);
        field?.setAttribute("aria-invalid", "true");
        field?.focus();
      }
      setStatus(status, validation.message, "error");
      return;
    }

    const endpoint = window.PADRINHOS_LEAD_ENDPOINT;
    if (!endpoint) {
      setStatus(status, "O envio está temporariamente indisponível. Tente novamente em instantes.", "error");
      return;
    }

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    setStatus(status, "Registrando seus dados…");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(lead)
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "Falha no registro");

      setStatus(status, "Dados registrados. Abrindo o WhatsApp…", "success");
      window.location.href = buildWhatsAppUrl(lead);
    } catch (error) {
      setStatus(status, "Não foi possível registrar seus dados. Revise sua conexão e tente novamente.", "error");
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
    }
  });
}
