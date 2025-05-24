export const cratesioaichatPackage = {
  name: 'aichat' as const,
  domain: 'crates.io/aichat' as const,
  description: 'All-in-one LLM CLI tool featuring Shell Assistant, Chat-REPL, RAG, AI Tools & Agents, with access to OpenAI, Claude, Gemini, Ollama, Groq, and more.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/aichat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) aichat' as const,
  programs: [
    'aichat',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.29.0',
    '0.28.0',
  ] as const,
  fullPath: 'crates.io/aichat' as const,
  aliases: [
    'aichat',
  ] as const,
}

export type CratesioaichatPackage = typeof cratesioaichatPackage
