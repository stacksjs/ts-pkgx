export const nomadprojectioPackage = {
  name: "nomad" as const,
  domain: "nomadproject.io" as const,
  description: "Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice, batch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and Vault integrations." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/nomadproject.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) nomad" as const,
  programs: [
    "nomad",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.10.1",
    "1.10.0",
    "1.9.7",
    "1.9.6",
    "1.9.5",
    "1.9.4",
    "1.9.3",
    "1.9.2",
    "1.9.1",
    "1.9.0",
    "1.8.4",
    "1.8.3",
    "1.8.2",
  ] as const,
  fullPath: "nomadproject.io" as const,
}

export type NomadprojectioPackage = typeof nomadprojectioPackage
