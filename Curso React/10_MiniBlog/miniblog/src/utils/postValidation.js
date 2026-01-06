export const normalizeImageUrl = (value) => {
  const trimmed = String(value ?? "").trim();
  if (!trimmed) return "";
  if (!/^https?:\/\//i.test(trimmed)) return `https://${trimmed}`;
  return trimmed;
};

export const normalizeTags = (value) => {
  const raw = String(value ?? "");

  // Split by comma, trim, lowercase, remove extra spaces, drop empty
  const tags = raw
    .split(",")
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean)
    .map((tag) => tag.replace(/\s+/g, " "));

  // Unique, preserve order
  return Array.from(new Set(tags));
};

export const validatePostInput = ({ title, content, imageUrl, tags }) => {
  const titleValue = String(title ?? "").trim();
  const contentValue = String(content ?? "").trim();
  const imageUrlValue = String(imageUrl ?? "").trim();
  const tagsValue = Array.isArray(tags) ? tags : [];

  if (!titleValue) return { ok: false, error: "Título é obrigatório." };
  if (!contentValue) return { ok: false, error: "Conteúdo é obrigatório." };

  if (!imageUrlValue) return { ok: false, error: "URL da imagem é obrigatória." };

  try {
    const normalized = normalizeImageUrl(imageUrlValue);
    const parsed = new URL(normalized);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return {
        ok: false,
        error: "A URL da imagem precisa começar com http:// ou https://.",
      };
    }
  } catch (err) {
    return {
      ok: false,
      error: "URL da imagem inválida. Ex: https://site.com/imagem.png",
    };
  }

  if (tagsValue.length === 0) {
    return { ok: false, error: "Informe pelo menos 1 tag (separada por vírgula)." };
  }

  if (tagsValue.some((tag) => tag.length > 32)) {
    return { ok: false, error: "Cada tag deve ter no máximo 32 caracteres." };
  }

  if (tagsValue.length > 15) {
    return { ok: false, error: "Use no máximo 15 tags." };
  }

  return { ok: true };
};

